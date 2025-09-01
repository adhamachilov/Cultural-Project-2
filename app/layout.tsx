import './globals.css'
import type { Metadata } from 'next'

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
      <body className="font-sans">{children}</body>
    </html>
  )
}
