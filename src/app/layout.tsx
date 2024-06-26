import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AOSInit } from '@/components/AOS'
import '../db/firebase.js'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })
const url = 'http://webty.tech'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: 'WEBTY | Diseño web',
  description:
    'Webty Diseño Web. Diseño web de alto impacto visual y marketing eficaz. Diseño web Argentina. Diseño de páginas web, posicionamiento SEO y marketing online.',
  keywords:
    'diseño web, marketing digital, posicionamiento SEO, desarrollo web, webty, paginas web, diseño gráfico, marketing en redes sociales, optimización de sitios web, experiencia de usuario, estrategias de marketing online, marketing de contenidos',
  icons: {
    icon: '/assets/icon.png'
  },
  openGraph: {
    description:
      'Webty Diseño Web. Diseño web de alto impacto visual y marketing eficaz. Diseño web Argentina. Diseño de páginas web, posicionamiento SEO y marketing online.',
    type: 'website',
    countryName: 'Argentina',
    siteName: 'Webty - Diseño de páginas web',
    images: [
      {
        url: '/assets/logo.png',
        width: 500,
        height: 500
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${inter.className} overflow-x-hidden`}>
        <AOSInit></AOSInit>
        <Toaster></Toaster>
        {children}
      </body>
    </html>
  )
}
