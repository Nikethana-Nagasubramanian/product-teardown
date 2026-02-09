'use client'

import { useState } from 'react'

interface CounterProps {
  initialValue?: number
  step?: number
  min?: number
  max?: number
}

const Counter = ({ 
  initialValue = 0, 
  step = 1, 
  min = -Infinity, 
  max = Infinity 
}: CounterProps) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max))
  }

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min))
  }

  const reset = () => {
    setCount(initialValue)
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        disabled={count <= min}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        -
      </button>
      <div className="text-2xl font-bold text-gray-800 min-w-[80px] text-center">
        {count}
      </div>
      <button
        onClick={increment}
        disabled={count >= max}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        +
      </button>
      <button
        onClick={reset}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
      >
        Reset
      </button>
    </div>
  )
}

export default Counter

