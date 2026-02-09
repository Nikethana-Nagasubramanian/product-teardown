'use client'

import { useState, useRef, useCallback } from 'react'
import { sentences, highlightedSentences, stats, Sentence } from './data'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import OverviewCard from './components/OverviewCard'

export default function GPTZeroMockup() {
  const [hoveredSentence, setHoveredSentence] = useState<Sentence | null>(null)
  const [selectedSentenceId, setSelectedSentenceId] = useState<number | null>(null)
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([])
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number } | null>(null)
  const [isCardSticky, setIsCardSticky] = useState(false)

  const leftPanelRef = useRef<HTMLDivElement>(null)
  const rightPanelRef = useRef<HTMLDivElement>(null)

  // Handle hover on sentence in left panel (TextCanvas)
  const handleSentenceHover = useCallback((sentence: Sentence | null, event: React.MouseEvent | null) => {
    if (isCardSticky) return
    
    if (sentence && event) {
      setHoveredSentence(sentence)
      setCardPosition({ x: event.clientX, y: event.clientY })
    } else {
      setHoveredSentence(null)
      setCardPosition(null)
    }
  }, [isCardSticky])

  // Handle click on sentence in left panel (TextCanvas)
  const handleSentenceClick = useCallback((sentence: Sentence, event: React.MouseEvent) => {
    setSelectedSentenceId(sentence.id)
    setHoveredSentence(sentence)
    setCardPosition({ x: event.clientX, y: event.clientY })
    setIsCardSticky(true)
    
    if (!expandedAccordions.includes(sentence.id)) {
      setExpandedAccordions(prev => [...prev, sentence.id])
    }

    if (rightPanelRef.current) {
      const accordionElement = rightPanelRef.current.querySelector(
        `[data-accordion-id="${sentence.id}"]`
      )
      if (accordionElement) {
        accordionElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [expandedAccordions])

  // Handle click on sentence in right panel
  const handleRightPanelSentenceClick = useCallback((sentence: Sentence) => {
    setSelectedSentenceId(sentence.id)
    setIsCardSticky(false)
    setHoveredSentence(null)
    setCardPosition(null)
    
    if (leftPanelRef.current) {
      const sentenceElement = leftPanelRef.current.querySelector(
        `[data-sentence-id="${sentence.id}"]`
      )
      if (sentenceElement) {
        sentenceElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [])

  // Handle accordion toggle
  const handleAccordionToggle = useCallback((sentenceId: number) => {
    setExpandedAccordions(prev => 
      prev.includes(sentenceId)
        ? prev.filter(id => id !== sentenceId)
        : [...prev, sentenceId]
    )
  }, [])

  // Collapse all accordions
  const handleCollapseAll = useCallback(() => {
    setExpandedAccordions([])
  }, [])

  // Dismiss sticky card
  const handleDismissCard = useCallback(() => {
    setIsCardSticky(false)
    setHoveredSentence(null)
    setCardPosition(null)
    setSelectedSentenceId(null)
  }, [])

  const cardSentence = hoveredSentence

  return (
    <div className="h-full min-h-screen bg-[#F5F6F8] p-6 overflow-auto">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">GPTZero Breakdown</h1>

      {/* Summary Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">GPTZero Breakdown</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
          Bi-directional interactive prototype: Click highlighted sentences to jump between text and analysis panels. The interface responds in both directions, creating seamless navigation. Complete teardown and design rationale in the Medium article —{' '}
          <a
            href="https://medium.com/@nike_thana/redesigning-gptzeros-advanced-scan-a-product-teardown-7234a19c4c95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2"
          >
            medium.com/@nike_thana/redesigning-gptzeros-advanced-scan
          </a>
        </p>
      </div>

      {/* Prototype Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Interactive Prototype</h2>
          <p className="text-sm text-gray-500 mt-0.5">Click on highlighted sentences to explore AI detection details</p>
        </div>

        <div className="flex h-[850px] relative">
          <LeftPanel
            ref={leftPanelRef}
            sentences={sentences}
            selectedSentenceId={selectedSentenceId}
            onSentenceHover={handleSentenceHover}
            onSentenceClick={handleSentenceClick}
          />
          
          <RightPanel
            ref={rightPanelRef}
            highlightedSentences={highlightedSentences}
            selectedSentenceId={selectedSentenceId}
            expandedAccordions={expandedAccordions}
            onSentenceClick={handleRightPanelSentenceClick}
            onAccordionToggle={handleAccordionToggle}
            onCollapseAll={handleCollapseAll}
          />
        </div>
      </div>

      {/* Overview Card (Hover/Click Tooltip) */}
      {cardSentence && cardPosition && (
        <OverviewCard
          sentence={cardSentence}
          position={cardPosition}
          isSticky={isCardSticky}
          onDismiss={handleDismissCard}
        />
      )}
    </div>
  )
}
