'use client'

import { Sentence } from '../data'

interface SentenceItemProps {
  sentence: Sentence
  isExpanded: boolean
  isSelected: boolean
  onToggle: () => void
  onClick: () => void
}

export default function SentenceItem({
  sentence,
  isExpanded,
  isSelected,
  onToggle,
  onClick,
}: SentenceItemProps) {
  const truncatedText = sentence.text.length > 60 
    ? sentence.text.substring(0, 60) + '...' 
    : sentence.text

  const handleClick = () => {
    onClick()
    onToggle()
  }

  return (
    <div 
      data-accordion-id={sentence.id}
      className={`border-b border-gray-100 last:border-b-0 ${isSelected ? 'bg-indigo-50' : ''}`}
    >
      {/* Header Row */}
      <button
        onClick={handleClick}
        className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 transition-colors"
      >
        <span
          className={`px-2 py-0.5 text-xs font-medium rounded ${
            sentence.level === 'High'
              ? 'bg-amber-100 text-amber-800'
              : 'bg-amber-50 text-amber-700'
          }`}
        >
          {sentence.level}
        </span>
        <span className="flex-1 text-sm text-gray-700 truncate">
          {truncatedText}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-1">
          <p className="text-sm text-gray-900 font-medium mb-3 leading-relaxed">
            {sentence.text}
          </p>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded mb-2">
            {sentence.reason}
          </span>
          <p className="text-sm text-gray-600 leading-relaxed">
            {sentence.explanation}
          </p>
        </div>
      </div>
    </div>
  )
}

