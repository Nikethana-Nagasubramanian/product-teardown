'use client'

import { ReactNode, useState, useEffect, useRef } from 'react'
import { useAccordion } from './Accordion'

interface AccordionItemProps {
  title: string
  children: ReactNode
  index?: number
}

const AccordionItem = ({ title, children, index = 0 }: AccordionItemProps) => {
  const { openItems, toggleItem } = useAccordion()
  const [height, setHeight] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const isOpen = openItems.has(index)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleItem(index)}
        className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
      >
        <span className="font-medium text-gray-800">{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="px-4 py-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccordionItem

