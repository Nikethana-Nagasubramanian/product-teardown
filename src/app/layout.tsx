import type { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Product Teardowns',
  description: 'UI breakdowns and product teardowns for various companies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased text-[#1A1A1A]">
        <div className="flex h-screen overflow-hidden bg-[#F2F4F7]">
          <Sidebar />
          <main className="flex-1 relative overflow-auto p-4 md:p-8">
            <div className="max-w-[1400px] mx-auto min-h-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
