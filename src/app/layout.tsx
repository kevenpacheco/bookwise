/* eslint-disable camelcase */
import { RootProviders } from '@/contexts/RootProviders'
import './globals.css'
import '@/lib/dayjs'
import '@smastrom/react-rating/style.css'

import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookWise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  )
}
