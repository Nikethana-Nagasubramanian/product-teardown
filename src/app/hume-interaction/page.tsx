'use client'

import { useState, useCallback } from 'react'
import CallSummaryHeader from './components/CallSummaryHeader'
import ChatDetailsSidebar from './components/ChatDetailsSidebar'
import EmotionalArcChart from './components/EmotionalArcChart'
import IssueDetectionCard from './components/IssueDetectionCard'
import TranscriptPanel from './components/TranscriptPanel'

type Tab = 'transcript' | 'call-summary'

export default function HumeInteractionPage() {
  const [activeTab, setActiveTab] = useState<Tab>('transcript')
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleIndexChange = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return (
    <div className="h-full min-h-screen bg-[#F5F6F8] p-6 overflow-auto">
      {/* Top-level summary card */}
      <CallSummaryHeader />

      {/* Main two-panel layout */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex" style={{ height: 'calc(100vh - 220px)', minHeight: '600px' }}>
          {/* Left sidebar — Chat details */}
          <ChatDetailsSidebar />

          {/* Right content — Tabbed */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Tab bar */}
            <div className="flex items-center border-b border-gray-200 px-5 bg-white shrink-0">
              <button
                onClick={() => setActiveTab('transcript')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'transcript'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                Transcript
              </button>
              <button
                onClick={() => setActiveTab('call-summary')}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'call-summary'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                Call summary
              </button>
            </div>

            {/* Tab content */}
            {activeTab === 'transcript' ? (
              <TranscriptPanel
                currentIndex={currentIndex}
                onSegmentClick={handleIndexChange}
              />
            ) : (
              <div className="flex-1 overflow-y-auto p-5 bg-[#FAFAFA]">
                <IssueDetectionCard />
                <EmotionalArcChart
                  currentIndex={currentIndex}
                  onIndexChange={handleIndexChange}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
