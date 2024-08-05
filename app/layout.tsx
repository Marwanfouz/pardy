import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextUIProvider from './NextUIProvider'
import { cn } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'pardy',
  description:
    'Pardy is a comprehensive event management application designed to streamline the process of organizing and tracking events.\
    With a user - friendly interface and powerful features, Pardy makes it easy to create, manage, and monitor events, as well as manage guest lists and RSVPs.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark text-foreground bg-background min-h-screen`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
