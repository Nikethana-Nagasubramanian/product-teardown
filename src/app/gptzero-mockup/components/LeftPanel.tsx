'use client'

import { forwardRef } from 'react'
import { Sentence, stats } from '../data'
import TextCanvas from './TextCanvas'

interface LeftPanelProps {
  sentences: Sentence[]
  selectedSentenceId: number | null
  onSentenceHover: (sentence: Sentence | null, event: React.MouseEvent | null) => void
  onSentenceClick: (sentence: Sentence, event: React.MouseEvent) => void
}

const LeftPanel = forwardRef<HTMLDivElement, LeftPanelProps>(({
  sentences,
  selectedSentenceId,
  onSentenceHover,
  onSentenceClick,
}, ref) => {
  return (
    <div ref={ref} className="w-[60%] h-full overflow-y-auto p-6">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy
        </button>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <select className="px-2 py-1 border border-gray-200 rounded">
            <option>12</option>
          </select>
          <button className="w-8 h-8 flex items-center justify-center font-bold hover:bg-gray-100 rounded">B</button>
          <button className="w-8 h-8 flex items-center justify-center italic hover:bg-gray-100 rounded">I</button>
          <button className="w-8 h-8 flex items-center justify-center underline hover:bg-gray-100 rounded">U</button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Text Canvas */}
      <TextCanvas
        sentences={sentences}
        selectedSentenceId={selectedSentenceId}
        onSentenceHover={onSentenceHover}
        onSentenceClick={onSentenceClick}
      />

      {/* Bottom Bar */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>{stats.totalCharacters.toLocaleString()} characters {stats.totalWords} words</span>
      </div>
    </div>
  )
})

LeftPanel.displayName = 'LeftPanel'

export default LeftPanel

