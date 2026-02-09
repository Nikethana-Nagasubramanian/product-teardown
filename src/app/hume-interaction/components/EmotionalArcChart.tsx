'use client'

import { useCallback, useMemo, useRef } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'
import { chartData, transcript, TranscriptSegment } from '../data'

interface EmotionalArcChartProps {
  currentIndex: number
  onIndexChange: (index: number) => void
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.[0]) return null
  const d = payload[0].payload
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-3 py-2 text-sm">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-medium text-gray-900">{d.timestamp}</span>
        <span className={`text-xs px-1.5 py-0.5 rounded ${d.speaker === 'customer' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
          {d.speaker}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-500">{d.label}</span>
        <span className={`font-mono font-semibold ${d.score >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
          {d.score > 0 ? '+' : ''}{d.score.toFixed(2)}
        </span>
      </div>
    </div>
  )
}

function scoreColor(score: number): string {
  if (score <= -0.5) return 'text-red-500'
  if (score <= -0.2) return 'text-orange-500'
  if (score <= 0.2) return 'text-gray-500'
  if (score <= 0.5) return 'text-emerald-500'
  return 'text-emerald-600'
}

function MiniMessage({ seg, highlight }: { seg: TranscriptSegment; highlight: boolean }) {
  const isCustomer = seg.speaker === 'customer'
  return (
    <div className={`flex gap-3 py-2.5 ${highlight ? 'bg-indigo-50/60 -mx-3 px-3 rounded-lg' : ''}`}>
      <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold ${
        isCustomer ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
      }`}>
        {isCustomer ? 'U' : 'A'}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={`text-xs font-semibold ${isCustomer ? 'text-blue-600' : 'text-gray-600'}`}>
            {isCustomer ? 'User' : 'Agent'}
          </span>
          <span className="text-[10px] text-gray-400">{seg.timestamp}</span>
          <span className={`text-[10px] font-medium ml-auto ${scoreColor(seg.emotionScore)}`}>
            {seg.emotionLabel} {seg.emotionScore > 0 ? '+' : ''}{seg.emotionScore.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{seg.text}</p>
      </div>
    </div>
  )
}

export default function EmotionalArcChart({ currentIndex, onIndexChange }: EmotionalArcChartProps) {
  const sliderRef = useRef<HTMLInputElement>(null)

  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onIndexChange(parseInt(e.target.value, 10))
    },
    [onIndexChange]
  )

  const handleChartClick = useCallback(
    (state: any) => {
      if (state?.activeTooltipIndex !== undefined) {
        onIndexChange(state.activeTooltipIndex)
      }
    },
    [onIndexChange]
  )

  // Get conversation context for the selected chart point
  const conversationSnippet = useMemo(() => {
    const point = chartData[currentIndex]
    if (!point) return []

    // Find the matching transcript segment
    const segIdx = transcript.findIndex((s) => s.id === point.segmentId)
    if (segIdx === -1) return []

    // Gather a window: the selected message + 1 before and 1 after (skip system)
    const nonSystem = transcript.filter((s) => s.speaker !== 'system')
    const nsIdx = nonSystem.findIndex((s) => s.id === point.segmentId)

    const start = Math.max(0, nsIdx - 1)
    const end = Math.min(nonSystem.length - 1, nsIdx + 1)
    const window: { seg: TranscriptSegment; isFocused: boolean }[] = []

    for (let i = start; i <= end; i++) {
      window.push({ seg: nonSystem[i], isFocused: nonSystem[i].id === point.segmentId })
    }
    return window
  }, [currentIndex])

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Emotional Arc</h2>
          <p className="text-sm text-gray-500">
            Click any point or drag the slider to explore the conversation
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Positive
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-400" /> Negative
          </span>
        </div>
      </div>

      {/* Chart */}
      <div
        className="h-[240px] w-full outline-none [&_svg]:outline-none [&_svg]:focus:outline-none [&_*]:outline-none"
        tabIndex={-1}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            onClick={handleChartClick}
            style={{ outline: 'none' }}
          >
            <defs>
              <linearGradient id="emotionGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="50%" stopColor="#f3f4f6" stopOpacity={0.05} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="timestamp"
              tick={{ fontSize: 11, fill: '#9ca3af' }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis
              domain={[-1, 1]}
              ticks={[-1, -0.5, 0, 0.5, 1]}
              tick={{ fontSize: 11, fill: '#9ca3af' }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
              tickFormatter={(v: number) => (v > 0 ? `+${v}` : `${v}`)}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={0} stroke="#d1d5db" strokeDasharray="4 4" />

            {chartData[currentIndex] && (
              <ReferenceLine
                x={chartData[currentIndex].timestamp}
                stroke="#6366f1"
                strokeWidth={2}
                strokeDasharray="4 2"
              />
            )}

            <Area
              type="monotone"
              dataKey="score"
              stroke="#6366f1"
              strokeWidth={2.5}
              fill="url(#emotionGradient)"
              dot={(props: any) => {
                const { cx, cy, index } = props
                const isActive = index === currentIndex
                const d = chartData[index]
                const color = d?.score >= 0 ? '#10b981' : '#ef4444'
                return (
                  <circle
                    key={index}
                    cx={cx}
                    cy={cy}
                    r={isActive ? 6 : 3}
                    fill={isActive ? '#6366f1' : color}
                    stroke={isActive ? '#fff' : 'none'}
                    strokeWidth={isActive ? 2 : 0}
                    style={{ transition: 'r 0.15s ease, fill 0.15s ease', cursor: 'pointer' }}
                  />
                )
              }}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Scrubber */}
      <div className="mt-3 px-1">
        <input
          ref={sliderRef}
          type="range"
          min={0}
          max={chartData.length - 1}
          value={currentIndex}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500
            [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab
            [&::-webkit-slider-thumb]:active:cursor-grabbing
            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{chartData[0]?.timestamp}</span>
          <span className="font-medium text-indigo-500">
            {chartData[currentIndex]?.timestamp} — {chartData[currentIndex]?.label}
          </span>
          <span>{chartData[chartData.length - 1]?.timestamp}</span>
        </div>
      </div>

      {/* Inline conversation snippet */}
      {conversationSnippet.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Conversation at {chartData[currentIndex]?.timestamp}
            </span>
          </div>
          <div className="divide-y divide-gray-100">
            {conversationSnippet.map(({ seg, isFocused }) => (
              <MiniMessage key={seg.id} seg={seg} highlight={isFocused} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
