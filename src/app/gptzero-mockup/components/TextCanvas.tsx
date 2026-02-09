'use client'

import { Sentence } from '../data'

interface TextCanvasProps {
  sentences: Sentence[]
  selectedSentenceId: number | null
  onSentenceHover: (sentence: Sentence | null, event: React.MouseEvent | null) => void
  onSentenceClick: (sentence: Sentence, event: React.MouseEvent) => void
}

export default function TextCanvas({
  sentences,
  selectedSentenceId,
  onSentenceHover,
  onSentenceClick,
}: TextCanvasProps) {
  const getHighlightClass = (sentence: Sentence) => {
    if (!sentence.highlighted) return ''
    
    const isSelected = sentence.id === selectedSentenceId
    
    if (isSelected) {
      return 'bg-yellow-300 cursor-pointer'
    }
    
    if (sentence.level === 'High') {
      return 'bg-[#FEF3C7] hover:bg-yellow-200 cursor-pointer'
    }
    
    if (sentence.level === 'Med') {
      return 'bg-[#FEF9E7] hover:bg-yellow-100 cursor-pointer'
    }
    
    return ''
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-12 min-h-[500px] text-gray-900 leading-7">
      {sentences.map((sentence, index) => (
        <span
          key={sentence.id}
          data-sentence-id={sentence.id}
          className={`${getHighlightClass(sentence)} transition-colors`}
          onMouseEnter={(e) => sentence.highlighted && onSentenceHover(sentence, e)}
          onMouseLeave={() => sentence.highlighted && onSentenceHover(null, null)}
          onClick={(e) => sentence.highlighted && onSentenceClick(sentence, e)}
        >
          {sentence.text}
        </span>
      ))}
    </div>
  )
}

