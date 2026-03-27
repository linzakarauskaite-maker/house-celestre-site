import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'House Celestre',
  description: 'A new kind of technology institution, built for the public good.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
