'use client'

const tabs = [
  { id: 'basic', label: 'Basic Scan', active: false },
  { id: 'advanced', label: 'Advanced Scan', active: true },
  { id: 'plagiarism', label: 'Plagiarism', active: false },
  { id: 'hallucinations', label: 'Hallucinations', active: false },
  { id: 'writing', label: 'Writing Feedback', active: false },
  { id: 'reviewer', label: 'AI Reviewer', active: false },
]

export default function TopBar() {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center px-4 justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <span className="text-sm text-gray-700 font-medium">Snow in Boston h...</span>
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Saved
        </span>
      </div>

      {/* Center: Tabs */}
      <nav className="flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              tab.active
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Right: Upgrade + Credits */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          Upgrade to Premium
        </button>
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-600">10K credits of 10K remaining</span>
          <div className="w-32 h-1.5 bg-gray-200 rounded-full mt-1">
            <div className="w-full h-full bg-indigo-600 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  )
}

