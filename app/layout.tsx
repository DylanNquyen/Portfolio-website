import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Nguyen Ngoc Thien | Frontend Developer',
  description: 'Software Engineering student with 3 years of experience building high-performance web applications using React.js, Vue 3, and TypeScript. Specialized in creating responsive, accessible, and performant user interfaces.',
  keywords: ['Frontend Developer', 'React.js', 'Vue.js', 'TypeScript', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Nguyen Ngoc Thien' }],
  openGraph: {
    title: 'Nguyen Ngoc Thien | Frontend Developer',
    description: 'Frontend Developer specializing in React.js, Vue 3, and TypeScript',
    images: [{ url: '/opengraph-image.png' }], 
    locale: 'vi_VN',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1d2e' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
