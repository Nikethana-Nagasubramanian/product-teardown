'use client'

import { ReactNode, useState, createContext, useContext, Children, cloneElement, isValidElement } from 'react'

interface AccordionContextType {
  openItems: Set<number>
  toggleItem: (index: number) => void
  allowMultiple: boolean
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

interface AccordionProps {
  children: ReactNode
  allowMultiple?: boolean
}

const Accordion = ({ children, allowMultiple = false }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]))

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        if (allowMultiple || newSet.size > 1) {
          newSet.delete(index)
        }
      } else {
        if (allowMultiple) {
          newSet.add(index)
        } else {
          return new Set([index])
        }
      }
      return newSet
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className="space-y-2">
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child, { index } as { index: number })
          }
          return child
        })}
      </div>
    </AccordionContext.Provider>
  )
}

export const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('AccordionItem must be used within Accordion')
  }
  return context
}

export default Accordion

