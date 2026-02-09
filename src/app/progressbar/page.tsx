'use client'

import ProgressBar from '@/components/progressbar/ProgressBar'
import { useState } from 'react'

export default function ProgressBarPage() {
  const [progress1, setProgress1] = useState(30)
  const [progress2, setProgress2] = useState(60)
  const [progress3, setProgress3] = useState(90)

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Progress Bar Components</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Progress Bar</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <ProgressBar value={progress1} />
            <div className="flex gap-2">
              <button
                onClick={() => setProgress1(Math.max(0, progress1 - 10))}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                -10%
              </button>
              <button
                onClick={() => setProgress1(Math.min(100, progress1 + 10))}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                +10%
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Progress Bar with Label</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <ProgressBar value={progress2} showLabel />
            <div className="flex gap-2">
              <button
                onClick={() => setProgress2(Math.max(0, progress2 - 10))}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                -10%
              </button>
              <button
                onClick={() => setProgress2(Math.min(100, progress2 + 10))}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                +10%
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Colored Progress Bar</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <ProgressBar value={progress3} showLabel color="green" />
            <div className="flex gap-2">
              <button
                onClick={() => setProgress3(Math.max(0, progress3 - 10))}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                -10%
              </button>
              <button
                onClick={() => setProgress3(Math.min(100, progress3 + 10))}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                +10%
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

