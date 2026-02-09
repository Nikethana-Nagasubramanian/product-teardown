'use client'

import { useEffect, useRef } from 'react'
import { Sentence } from '../data'

interface OverviewCardProps {
  sentence: Sentence
  position: { x: number; y: number }
  isSticky: boolean
  onDismiss: () => void
}

export default function OverviewCard({
  sentence,
  position,
  isSticky,
  onDismiss,
}: OverviewCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isSticky) return

    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onDismiss()
      }
    }

    // Delay adding listener to prevent immediate dismissal
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSticky, onDismiss])

  // Calculate position to keep card within viewport
  const cardStyle: React.CSSProperties = {
    position: 'fixed',
    left: Math.min(position.x + 10, window.innerWidth - 320),
    top: Math.min(position.y + 10, window.innerHeight - 150),
    zIndex: 50,
  }

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      className="w-72 bg-white rounded-lg shadow-xl border border-gray-200 p-4 animate-in fade-in duration-150"
    >
      {/* Level Badge */}
      <span
        className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full mb-2 ${
          sentence.level === 'High'
            ? 'bg-amber-100 text-amber-800 border border-amber-200'
            : 'bg-amber-50 text-amber-700 border border-amber-100'
        }`}
      >
        {sentence.level} AI Content
      </span>

      {/* Reason Tag */}
      <div className="mb-2">
        <span className="inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded">
          {sentence.reason}
        </span>
      </div>

      {/* Explanation */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {sentence.explanation}
      </p>
    </div>
  )
}

