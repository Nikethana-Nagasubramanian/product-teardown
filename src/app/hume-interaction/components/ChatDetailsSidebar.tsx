'use client'

import { callMeta } from '../data'

function RatingBar({ score, max }: { score: number; max: number }) {
  return (
    <div className="flex gap-1 mt-1.5">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`h-2 flex-1 rounded-sm ${
            i < score ? 'bg-emerald-500' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="text-gray-300 hover:text-gray-500 transition-colors ml-2 shrink-0"
      title="Copy"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 4V2.5A1.5 1.5 0 008.5 1H2.5A1.5 1.5 0 001 2.5v6A1.5 1.5 0 002.5 10H4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </button>
  )
}

export default function ChatDetailsSidebar() {
  return (
    <div className="w-[340px] shrink-0 overflow-y-auto border-r border-gray-200 bg-white">
      <div className="p-5 space-y-6">
        {/* Evaluation */}
        <section>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Evaluation</h3>
          <div className="border border-gray-200 rounded-lg p-4 space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  Helpfulness: <span className="font-medium">{callMeta.helpfulness.label}</span>
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {callMeta.helpfulness.score}/{callMeta.helpfulness.max}
                </span>
              </div>
              <RatingBar score={callMeta.helpfulness.score} max={callMeta.helpfulness.max} />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  Satisfaction: <span className="font-medium">{callMeta.satisfaction.label}</span>
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {callMeta.satisfaction.score}/{callMeta.satisfaction.max}
                </span>
              </div>
              <RatingBar score={callMeta.satisfaction.score} max={callMeta.satisfaction.max} />
            </div>
          </div>
        </section>

        {/* Chat details */}
        <section>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Chat details</h3>
          <div className="border border-gray-200 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Status</span>
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-900">
                <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5L4 7.5L8 3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {callMeta.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Started</span>
              <span className="text-sm text-gray-900">{callMeta.date}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Ended</span>
              <span className="text-sm text-gray-900">{callMeta.endDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Duration</span>
              <span className="text-sm text-gray-900">{callMeta.duration}</span>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Chat ID</span>
                <div className="flex items-center">
                  <span className="text-sm font-mono text-gray-400 truncate max-w-[160px]">{callMeta.id}</span>
                  <CopyButton text={callMeta.id} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Chat group ID</span>
                <div className="flex items-center">
                  <span className="text-sm font-mono text-gray-400 truncate max-w-[160px]">{callMeta.chatGroupId}</span>
                  <CopyButton text={callMeta.chatGroupId} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Config */}
        <section>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Config</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <button className="flex items-center justify-between w-full group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 6h4M6 8h4M6 10h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">{callMeta.configDate}</p>
                  <p className="text-xs text-gray-400">{callMeta.configVersion}</p>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-300 group-hover:text-gray-500 transition-colors">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>

        {/* Audio */}
        <section>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Audio</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <button className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4.5 3L11 7L4.5 11V3Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-sm font-medium">Listen to Audio</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

