import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'TinyNest – Safety-Certified Baby Essentials',
  description:
    'Trusted baby loungers, head supports, bed bumpers, and feeding gear. CPSC & ASTM certified. Loved by 50,000+ mothers. Free shipping on orders over $65.',
  keywords: 'baby lounger, infant sleep support, baby head support, nursing pillow, bed bumpers, CPSC certified baby products',
  openGraph: {
    title: 'TinyNest – Safety-Certified Baby Essentials',
    description: 'Where little ones rest easy. Trusted by 50,000+ mothers.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FDFAF6] antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
