import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import Navbar from './components/Navigation/Navbar'

const noto_sans = Noto_Sans({
  weight: ["400","700"],
  style: ["normal","italic"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Josh Hartwig',
  description: 'Various musings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
