'use client'

import { forwardRef } from 'react'
import { Sentence, stats } from '../data'
import SentenceItem from './SentenceItem'

interface RightPanelProps {
  highlightedSentences: Sentence[]
  selectedSentenceId: number | null
  expandedAccordions: number[]
  onSentenceClick: (sentence: Sentence) => void
  onAccordionToggle: (sentenceId: number) => void
  onCollapseAll: () => void
}

const RightPanel = forwardRef<HTMLDivElement, RightPanelProps>(({
  highlightedSentences,
  selectedSentenceId,
  expandedAccordions,
  onSentenceClick,
  onAccordionToggle,
  onCollapseAll,
}, ref) => {
  return (
    <div ref={ref} className="w-[40%] h-full overflow-y-auto border-l border-gray-200 bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-900">Advanced Scan</h2>
            <span className="px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
              {stats.scansLeft} scans left
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Info Notice */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          More than 100 words yield accurate results
        </div>

        {/* AI Detection Summary */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-900">{stats.ai}%</span>
            </div>
            <span className="text-sm text-gray-500 mt-1">AI</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-900">{stats.mixed}%</span>
            </div>
            <span className="text-sm text-gray-500 mt-1">Mixed</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-900">{stats.human}%</span>
            </div>
            <span className="text-sm text-gray-500 mt-1">Human</span>
          </div>
        </div>
      </div>

      {/* Sentences Section */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          Sentences driving AI probability
        </h3>
        
        {/* Gradient Bar */}
        <div className="mb-3">
          <div className="h-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-100 to-white border border-gray-200" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>AI</span>
            <span>Human</span>
          </div>
        </div>

        {/* Collapse All Button */}
        <div className="flex justify-end mb-2">
          <button
            onClick={onCollapseAll}
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
            title="Collapse all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="4 14 10 14 10 20" />
              <polyline points="20 10 14 10 14 4" />
              <line x1="14" y1="10" x2="21" y2="3" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
        </div>

        {/* Sentence List */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {highlightedSentences.map((sentence) => (
            <SentenceItem
              key={sentence.id}
              sentence={sentence}
              isExpanded={expandedAccordions.includes(sentence.id)}
              isSelected={selectedSentenceId === sentence.id}
              onToggle={() => onAccordionToggle(sentence.id)}
              onClick={() => onSentenceClick(sentence)}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="sticky bottom-0 p-4 bg-white border-t border-gray-200">
        <button className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
          Scan text
        </button>
        <p className="text-center text-xs text-gray-500 mt-2">
          Text change detected, scan for updated results
        </p>
      </div>
    </div>
  )
})

RightPanel.displayName = 'RightPanel'

export default RightPanel

