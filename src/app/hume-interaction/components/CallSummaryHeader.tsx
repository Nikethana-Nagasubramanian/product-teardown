'use client'

import { callMeta } from '../data'

function emotionColor(score: number): string {
  if (score <= -0.5) return 'text-red-600'
  if (score <= -0.2) return 'text-orange-500'
  if (score <= 0.2) return 'text-gray-500'
  if (score <= 0.5) return 'text-emerald-500'
  return 'text-emerald-600'
}

function emotionBg(score: number): string {
  if (score <= -0.5) return 'bg-red-50'
  if (score <= -0.2) return 'bg-orange-50'
  if (score <= 0.2) return 'bg-gray-50'
  if (score <= 0.5) return 'bg-emerald-50'
  return 'bg-emerald-50'
}

export default function CallSummaryHeader() {
  const { startEmotion, endEmotion } = callMeta

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
      {/* Title + summary */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Hume Interaction</h1>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-3xl">
          Redesigning Hume&apos;s call monitoring interface to surface insights instead of data. Tracks emotional trajectory (frustrated &rarr; satisfied), automatically detects system bugs from conversation context, and connects agent performance to business outcomes. Focuses on actionable intelligence for support teams rather than raw emotional metrics.
        </p>
      </div>

      {/* Emotional Journey Bar */}
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium text-gray-500 shrink-0">Emotional Journey</div>
        <div className="flex items-center gap-3 flex-1">
          {/* Start emotion */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${emotionBg(startEmotion.score)} ${emotionColor(startEmotion.score)}`}>
            <span>{startEmotion.label}</span>
            <span className="opacity-60">({startEmotion.score.toFixed(1)})</span>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-1 flex-1">
            <div className="h-px flex-1 bg-gradient-to-r from-red-300 via-gray-300 to-emerald-300" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-emerald-400 shrink-0">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* End emotion */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${emotionBg(endEmotion.score)} ${emotionColor(endEmotion.score)}`}>
            <span>{endEmotion.label}</span>
            <span className="opacity-60">(+{endEmotion.score.toFixed(1)})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

