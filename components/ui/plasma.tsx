"use client"

import { useEffect, useRef } from "react"
import { Renderer, Program, Mesh, Triangle } from "ogl"

interface PlasmaProps {
  color?: string
  speed?: number
  opacity?: number
  mouseInteractive?: boolean
  className?: string
}

const VERT = /* glsl */ `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor;
uniform float uOpacity;
uniform vec2 uMouse;

float plasma(vec2 p, float t) {
  float v = 0.0;
  v += sin(p.x * 3.0 + t);
  v += sin(p.y * 3.0 + t * 0.8);
  v += sin((p.x + p.y) * 2.5 + t * 1.2);
  v += sin(sqrt(p.x * p.x + p.y * p.y) * 4.0 + t);
  return v;
}

void main() {
  vec2 uv = vUv * 2.0 - 1.0;
  uv.x *= uResolution.x / uResolution.y;

  vec2 mouse = uMouse * 2.0 - 1.0;
  mouse.x *= uResolution.x / uResolution.y;
  float mouseDist = length(uv - mouse);
  float mouseInfluence = smoothstep(0.8, 0.0, mouseDist) * 0.3;

  float v = plasma(uv + mouseInfluence * 0.2, uTime);
  float intensity = clamp((v + 4.0) / 8.0, 0.0, 1.0);

  vec3 col = mix(vec3(0.0), uColor, intensity * 0.5);
  gl_FragColor = vec4(col, intensity * uOpacity * 0.6);
}
`

export function Plasma({ color = "#4a7c59", speed = 0.4, opacity = 0.6, mouseInteractive = true, className }: PlasmaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const hex = color.replace("#", "")
    const r = parseInt(hex.substring(0, 2), 16) / 255
    const g = parseInt(hex.substring(2, 4), 16) / 255
    const b = parseInt(hex.substring(4, 6), 16) / 255

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: false, antialias: false })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    Object.assign(gl.canvas.style, { position: "absolute", inset: "0", width: "100%", height: "100%" })
    container.appendChild(gl.canvas)

    const geometry = new Triangle(gl)
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [container.clientWidth, container.clientHeight] },
        uColor: { value: [r, g, b] },
        uOpacity: { value: opacity },
        uMouse: { value: [0.5, 0.5] },
      },
      transparent: true,
      depthTest: false,
    })
    const mesh = new Mesh(gl, { geometry, program })

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
      program.uniforms.uResolution.value = [container.clientWidth, container.clientHeight]
    }
    const ro = new ResizeObserver(resize)
    ro.observe(container)
    resize()

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1.0 - (e.clientY - rect.top) / rect.height,
      }
    }
    if (mouseInteractive) container.addEventListener("mousemove", onMouseMove)

    const startTime = performance.now()
    const loop = () => {
      rafRef.current = requestAnimationFrame(loop)
      program.uniforms.uTime.value = ((performance.now() - startTime) / 1000) * speed
      program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y]
      renderer.render({ scene: mesh })
    }
    loop()

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      if (mouseInteractive) container.removeEventListener("mousemove", onMouseMove)
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [color, speed, opacity, mouseInteractive])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
