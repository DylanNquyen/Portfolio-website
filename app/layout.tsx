import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/context/LanguageContext'
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
  title: 'Nguyen Ngoc Thien | Full-stack Developer',
  description: 'Software Engineering student with hands-on experience building high-performance frontend applications and full-stack systems using React, TypeScript, Node.js, NestJS, Docker, and microservices-style architecture.',
  keywords: ['Full-stack Developer', 'React.js', 'TypeScript', 'Node.js', 'NestJS', 'Docker', 'Microservices', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Nguyen Ngoc Thien' }],
  openGraph: {
    title: 'Nguyen Ngoc Thien | Full-stack Developer',
    description: 'Full-stack Developer with frontend strength and backend system experience',
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
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
