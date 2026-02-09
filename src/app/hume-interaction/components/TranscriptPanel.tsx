'use client'

import { useEffect, useRef } from 'react'
import { transcript, TranscriptSegment } from '../data'

interface TranscriptPanelProps {
  currentIndex: number
  onSegmentClick: (index: number) => void
}

function ProsodyBar({ name, score, color }: { name: string; score: number; color: string }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span className="text-xs text-gray-600 font-medium shrink-0 w-[120px] truncate">{name}</span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden min-w-[40px]">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${Math.min(score * 100, 100)}%` }}
        />
      </div>
      <span className="text-xs text-gray-400 font-mono shrink-0 w-8 text-right">{score.toFixed(2)}</span>
    </div>
  )
}

function MessageBubble({
  seg,
  index,
  isActive,
  onClick,
}: {
  seg: TranscriptSegment
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const isCustomer = seg.speaker === 'customer'
  const isSystem = seg.speaker === 'system'

  if (isSystem) {
    return (
      <div className="flex justify-start mb-4" onClick={onClick}>
        <div className="max-w-[85%]">
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
            <div className="flex items-center justify-between gap-4 mb-1">
              <span className="text-xs font-semibold text-gray-500">System</span>
              <span className="text-xs text-gray-400">{seg.timestamp}</span>
            </div>
            <p className="text-sm text-gray-700">{seg.text}</p>
          </div>
        </div>
      </div>
    )
  }

  const prosodyLabel = isCustomer ? 'User Prosody' : 'Agent Prosody'

  return (
    <div className={`mb-4 ${isCustomer ? 'flex justify-end' : 'flex justify-start'}`}>
      <div
        className={`max-w-[85%] cursor-pointer transition-all duration-150 ${
          isActive ? 'ring-2 ring-indigo-300 ring-offset-1 rounded-lg' : ''
        }`}
        onClick={onClick}
      >
        {/* Message bubble */}
        <div
          className={`rounded-lg px-4 py-3 ${
            isCustomer
              ? 'bg-gray-50 border border-gray-200'
              : 'bg-white border border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between gap-4 mb-1.5">
            <span className={`text-xs font-semibold ${isCustomer ? 'text-blue-600' : 'text-gray-600'}`}>
              {isCustomer ? 'User' : 'Agent'}
            </span>
            <span className="text-xs text-gray-400">{seg.timestamp}</span>
          </div>
          <p className="text-sm text-gray-800 leading-relaxed">{seg.text}</p>
        </div>

        {/* Prosody scores */}
        {seg.prosody && seg.prosody.length > 0 && (
          <div className={`mt-1.5 rounded-lg border border-gray-100 bg-white px-4 py-2.5 ${
            isCustomer ? 'ml-2' : 'mr-2'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                {prosodyLabel}
              </span>
              <span className="text-[10px] text-gray-300">{seg.timestamp}</span>
            </div>
            <div className="flex items-center gap-4">
              {seg.prosody.map((p) => (
                <div key={p.name} className="flex items-center gap-1.5 min-w-0">
                  <span className="text-xs text-gray-700 font-medium whitespace-nowrap">{p.name}</span>
                  <div className={`w-10 h-1.5 rounded-full ${p.color}`} style={{ opacity: 0.7 + p.score * 0.3 }} />
                  <span className="text-xs text-gray-400 font-mono">{p.score.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function TranscriptPanel({ currentIndex, onSegmentClick }: TranscriptPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const segmentRefs = useRef<(HTMLDivElement | null)[]>([])

  // Auto-scroll to active segment
  useEffect(() => {
    const el = segmentRefs.current[currentIndex]
    if (el && containerRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [currentIndex])

  return (
    <div ref={containerRef} className="flex-1 overflow-y-auto p-5 bg-[#FAFAFA]">
      <p className="text-xs text-gray-400 mb-4">
        Showing {transcript.length} of ~{transcript.length} messages
      </p>
      {transcript.map((seg: TranscriptSegment, index: number) => (
        <div
          key={seg.id}
          ref={(el) => { segmentRefs.current[index] = el }}
        >
          <MessageBubble
            seg={seg}
            index={index}
            isActive={index === currentIndex}
            onClick={() => onSegmentClick(index)}
          />
        </div>
      ))}
    </div>
  )
}
