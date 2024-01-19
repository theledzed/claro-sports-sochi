import './globals.css'
import { Exo } from 'next/font/google'
import type { Metadata } from 'next'
import { ReduxProvider } from '@/redux/providers'
import StyledComponentsRegistry from '@/lib/registry'

const archivo = Exo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Claro Sports',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={archivo.className}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
