'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface TeardownItem {
  label: string
  path: string
}

const teardowns: TeardownItem[] = [
  { label: 'GPT-0 Breakdown', path: '/gptzero-mockup' },
  { label: 'Hume Interaction', path: '/hume-interaction' },
  { label: 'Cursor Redesign', path: '/cursor-redesign' },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-full bg-white border-r border-[#EAECF0] flex flex-col flex-shrink-0">
      {/* Logo / Title */}
      <div className="px-6 py-8">
        <Link href="/" className="text-xl font-bold text-[#101828] tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs">
            PT
          </div>
          Teardowns
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 space-y-1">
        <div className="px-3 mb-2">
          <span className="text-[11px] font-semibold text-[#98A2B3] uppercase tracking-wider">
            Prototypes
          </span>
        </div>
        {teardowns.map((item) => {
          const isActive = pathname === item.path || pathname?.startsWith(item.path + '/')
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-200 ${isActive
                  ? 'bg-[#101828] text-white shadow-sm'
                  : 'text-[#475467] hover:bg-[#F9FAFB] hover:text-[#101828]'
                }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-6 border-t border-[#EAECF0]">
        <a
          href="https://itsmenike.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[#475467] hover:text-[#101828] transition-colors flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-[#101828]" />
          itsmenike.com
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
