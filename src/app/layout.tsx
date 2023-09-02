import './globals.css'
import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import Header from './components/Navigation/Header'

const fira_sans = Fira_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Josh Hartwig',
  description: 'various musings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="fira_sans.className text-[0.9rem] antialiased">
        <div className="flex min-h-screen flex-col py-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
