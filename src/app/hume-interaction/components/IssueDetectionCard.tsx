'use client'

import { detectedIssues, DetectedIssue } from '../data'

const severityConfig: Record<DetectedIssue['severity'], { border: string; badge: string; badgeText: string }> = {
  critical: {
    border: 'border-l-red-500',
    badge: 'bg-red-50 text-red-700',
    badgeText: 'Critical',
  },
  warning: {
    border: 'border-l-amber-400',
    badge: 'bg-amber-50 text-amber-700',
    badgeText: 'Warning',
  },
  info: {
    border: 'border-l-blue-400',
    badge: 'bg-blue-50 text-blue-700',
    badgeText: 'Info',
  },
}

export default function IssueDetectionCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1L1 12.5H13L7 1Z"
              stroke="#dc2626"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M7 5.5V8" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="7" cy="10" r="0.75" fill="#dc2626" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Issues Detected</h2>
        <span className="ml-auto text-sm font-medium text-gray-400">
          {detectedIssues.length} issue{detectedIssues.length !== 1 ? 's' : ''} found
        </span>
      </div>

      <div className="space-y-3">
        {detectedIssues.map((issue) => {
          const config = severityConfig[issue.severity]
          return (
            <div
              key={issue.id}
              className={`border border-gray-100 border-l-4 ${config.border} rounded-sm p-4 hover:bg-gray-50 transition-colors`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${config.badge}`}>
                      {config.badgeText}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900">{issue.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{issue.description}</p>
                </div>
                <span className="text-xs font-mono text-gray-400 shrink-0">{issue.timestamp}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
