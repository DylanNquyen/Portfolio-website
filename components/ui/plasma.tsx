"use client"

import { useEffect, useRef } from "react"

interface PlasmaProps {
  color?: string
  speed?: number
  opacity?: number
  mouseInteractive?: boolean
  className?: string
}

export function Plasma({
  color = "#4a7c59",
  speed = 0.4,
  opacity = 0.6,
  mouseInteractive = true,
  className = "",
}: PlasmaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let renderer: any
    let gl: any
    let program: any
    let mesh: any

    const init = async () => {
      const { Renderer, Program, Mesh, Triangle } = await import("ogl")

      renderer = new Renderer({
        alpha: true,
        antialias: true,
        dpr: Math.min(window.devicePixelRatio, 2),
      })
      gl = renderer.gl
      container.appendChild(gl.canvas)

      gl.clearColor(0, 0, 0, 0)

      const resize = () => {
        renderer.setSize(container.offsetWidth, container.offsetHeight)
      }
      window.addEventListener("resize", resize)
      resize()

      // Parse hex color to RGB
      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result
          ? {
              r: parseInt(result[1], 16) / 255,
              g: parseInt(result[2], 16) / 255,
              b: parseInt(result[3], 16) / 255,
            }
          : { r: 0.29, g: 0.49, b: 0.35 }
      }

      const rgb = hexToRgb(color)

      const vertex = /* glsl */ `
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
        }
      `

      const fragment = /* glsl */ `
        precision highp float;
        uniform float uTime;
        uniform float uOpacity;
        uniform vec2 uMouse;
        uniform vec3 uColor;
        uniform vec2 uResolution;
        varying vec2 vUv;

        // Simplex noise function
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                   -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
            + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
            dot(x12.zw,x12.zw)), 0.0);
          m = m*m;
          m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < 5; i++) {
            value += amplitude * snoise(p);
            p *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          
          // Mouse influence
          vec2 mouseInfluence = (uMouse - 0.5) * 0.3;
          
          // Create flowing plasma effect
          float time = uTime * 0.15;
          
          vec2 p = uv * aspect * 2.0;
          p += mouseInfluence;
          
          // Multiple layers of noise for plasma effect
          float n1 = fbm(p + time);
          float n2 = fbm(p * 1.5 - time * 0.7 + vec2(n1));
          float n3 = fbm(p * 0.8 + time * 0.5 + vec2(n2 * 0.5));
          
          // Combine noises
          float plasma = (n1 + n2 + n3) / 3.0;
          plasma = plasma * 0.5 + 0.5;
          
          // Create color gradient based on noise
          vec3 col1 = uColor;
          vec3 col2 = uColor * 0.5;
          vec3 col3 = uColor * 1.5;
          
          vec3 finalColor = mix(col1, col2, plasma);
          finalColor = mix(finalColor, col3, snoise(p * 0.5 + time) * 0.5 + 0.5);
          
          // Soft vignette
          float vignette = smoothstep(1.2, 0.3, length(uv - 0.5));
          
          // Final output with opacity
          float alpha = plasma * vignette * uOpacity;
          gl_FragColor = vec4(finalColor, alpha * 0.7);
        }
      `

      const geometry = new Triangle(gl)

      program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uOpacity: { value: opacity },
          uMouse: { value: [0.5, 0.5] },
          uColor: { value: [rgb.r, rgb.g, rgb.b] },
          uResolution: { value: [container.offsetWidth, container.offsetHeight] },
        },
        transparent: true,
        depthTest: false,
        depthWrite: false,
      })

      mesh = new Mesh(gl, { geometry, program })

      // Mouse move handler
      const handleMouseMove = (e: MouseEvent) => {
        if (!mouseInteractive) return
        const rect = container.getBoundingClientRect()
        mouseRef.current.x = (e.clientX - rect.left) / rect.width
        mouseRef.current.y = 1 - (e.clientY - rect.top) / rect.height
      }

      if (mouseInteractive) {
        container.addEventListener("mousemove", handleMouseMove)
      }

      // Animation loop
      let startTime = performance.now()
      const animate = () => {
        const elapsed = (performance.now() - startTime) * 0.001 * speed

        program.uniforms.uTime.value = elapsed
        program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y]
        program.uniforms.uResolution.value = [container.offsetWidth, container.offsetHeight]

        renderer.render({ scene: mesh })
        animationRef.current = requestAnimationFrame(animate)
      }

      animate()

      return () => {
        window.removeEventListener("resize", resize)
        if (mouseInteractive) {
          container.removeEventListener("mousemove", handleMouseMove)
        }
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
        if (gl.canvas && container.contains(gl.canvas)) {
          container.removeChild(gl.canvas)
        }
        renderer.gl.getExtension("WEBGL_lose_context")?.loseContext()
      }
    }

    const cleanup = init()

    return () => {
      cleanup.then((fn) => fn?.())
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [color, speed, opacity, mouseInteractive])

  return (
    <div
      ref={containerRef}
      className={`plasma-container ${className}`}
      aria-hidden="true"
    />
  )
}
