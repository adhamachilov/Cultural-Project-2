import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TranslationProvider } from '../contexts/TranslationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cultural Exchange Platform',
  description: 'Live with local families, experience authentic culture of Russia & CIS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}
