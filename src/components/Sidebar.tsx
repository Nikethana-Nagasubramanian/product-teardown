'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TeardownItem {
  label: string
  path: string
}

const teardowns: TeardownItem[] = [
  { label: 'GPT-0 Breakdown', path: '/gptzero-mockup' },
  { label: 'Hume Interaction', path: '/hume-interaction' },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo / Title */}
      <div className="px-6 py-5 border-b border-gray-200">
        <Link href="/" className="text-lg font-bold text-gray-900 tracking-tight">
          Product Teardowns
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {teardowns.map((item) => {
          const isActive = pathname === item.path || pathname?.startsWith(item.path + '/')
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">Add more teardowns in Sidebar.tsx</p>
      </div>
    </aside>
  )
}

export default Sidebar

