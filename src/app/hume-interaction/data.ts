export interface ProsodyScore {
  name: string
  score: number
  color: string // tailwind bg class
}

export interface TranscriptSegment {
  id: number
  timestamp: string       // "mm:ss"
  seconds: number         // total seconds from call start
  speaker: 'agent' | 'customer' | 'system'
  text: string
  emotionScore: number    // -1 (very negative) to +1 (very positive)
  emotionLabel: string    // human-readable label
  prosody?: ProsodyScore[]
}

export interface DetectedIssue {
  id: number
  title: string
  description: string
  severity: 'critical' | 'warning' | 'info'
  timestamp: string
  relatedSegmentId: number
}

export const callMeta = {
  id: 'dfaaefa4-92bc-47fb-9891-e',
  chatGroupId: '52f33300-5b40-436d-98ed-a',
  date: '2/9/2026, 1:59:06 PM',
  endDate: '2/9/2026, 2:06:41 PM',
  duration: '8 minutes',
  durationShort: '7:42',
  agent: 'Sarah M.',
  customer: 'James Peterson',
  status: 'User ended',
  helpfulness: { label: 'Slightly Helpful', score: 4, max: 5 },
  satisfaction: { label: 'Slightly Satisfied', score: 4, max: 5 },
  configDate: '2/9/2026, 01:53:44 PM',
  configVersion: 'Version 1',
  startEmotion: { score: -0.8, label: 'Frustrated' },
  endEmotion: { score: 0.75, label: 'Satisfied' },
  insight: 'Billing error resolved — customer retained after escalation risk at 2:15.',
  agentMessages: 11,
  customerMessages: 11,
  totalMessages: 22,
}

export const transcript: TranscriptSegment[] = [
  {
    id: 0,
    timestamp: '1:59:07 PM',
    seconds: 0,
    speaker: 'system',
    text: 'You are a helpful support assistant.',
    emotionScore: 0,
    emotionLabel: 'Neutral',
  },
  {
    id: 1,
    timestamp: '1:59:07 PM',
    seconds: 2,
    speaker: 'agent',
    text: 'Thank you for calling Streamline support, this is Sarah. How can I help you today?',
    emotionScore: 0.1,
    emotionLabel: 'Neutral',
    prosody: [
      { name: 'Determination', score: 0.29, color: 'bg-emerald-500' },
      { name: 'Interest', score: 0.23, color: 'bg-blue-500' },
      { name: 'Excitement', score: 0.20, color: 'bg-yellow-400' },
    ],
  },
  {
    id: 2,
    timestamp: '1:59:08 PM',
    seconds: 5,
    speaker: 'agent',
    text: "What's on your mind?",
    emotionScore: 0.05,
    emotionLabel: 'Neutral',
    prosody: [
      { name: 'Confusion', score: 0.49, color: 'bg-orange-400' },
      { name: 'Anger', score: 0.41, color: 'bg-red-500' },
      { name: 'Surprise (negative)', score: 0.34, color: 'bg-gray-700' },
    ],
  },
  {
    id: 3,
    timestamp: '1:59:22 PM',
    seconds: 15,
    speaker: 'customer',
    text: "Um, I'm just checking out my bill. I was charged $49.99 from you guys. I'm on the basic plan — it should be $29.99.",
    emotionScore: -0.5,
    emotionLabel: 'Annoyed',
    prosody: [
      { name: 'Awkwardness', score: 0.49, color: 'bg-purple-400' },
      { name: 'Contemplation', score: 0.26, color: 'bg-blue-400' },
      { name: 'Doubt', score: 0.23, color: 'bg-gray-500' },
    ],
  },
  {
    id: 4,
    timestamp: '1:59:40 PM',
    seconds: 33,
    speaker: 'agent',
    text: "I'm sorry to hear about that. Let me pull up your account right away and take a look at what happened.",
    emotionScore: 0.05,
    emotionLabel: 'Neutral',
    prosody: [
      { name: 'Sympathy', score: 0.38, color: 'bg-blue-300' },
      { name: 'Determination', score: 0.31, color: 'bg-emerald-500' },
      { name: 'Calmness', score: 0.25, color: 'bg-teal-400' },
    ],
  },
  {
    id: 5,
    timestamp: '1:59:55 PM',
    seconds: 48,
    speaker: 'customer',
    text: "This is the second time this has happened. Last month I called about the same thing and was told it was fixed.",
    emotionScore: -0.75,
    emotionLabel: 'Frustrated',
    prosody: [
      { name: 'Anger', score: 0.52, color: 'bg-red-500' },
      { name: 'Contempt', score: 0.38, color: 'bg-red-400' },
      { name: 'Disappointment', score: 0.31, color: 'bg-gray-500' },
    ],
  },
  {
    id: 6,
    timestamp: '2:00:15 PM',
    seconds: 68,
    speaker: 'agent',
    text: "I completely understand your frustration. Let me check the notes from your previous call... I can see the adjustment was made but it looks like it didn't carry over to this billing cycle.",
    emotionScore: -0.1,
    emotionLabel: 'Concerned',
    prosody: [
      { name: 'Concentration', score: 0.42, color: 'bg-indigo-500' },
      { name: 'Sympathy', score: 0.35, color: 'bg-blue-300' },
      { name: 'Distress', score: 0.21, color: 'bg-orange-400' },
    ],
  },
  {
    id: 7,
    timestamp: '2:00:38 PM',
    seconds: 91,
    speaker: 'customer',
    text: "So basically nothing was actually fixed. I'm paying twenty dollars extra every month for something I didn't sign up for.",
    emotionScore: -0.85,
    emotionLabel: 'Angry',
    prosody: [
      { name: 'Anger', score: 0.71, color: 'bg-red-500' },
      { name: 'Contempt', score: 0.45, color: 'bg-red-400' },
      { name: 'Frustration', score: 0.39, color: 'bg-orange-500' },
    ],
  },
  {
    id: 8,
    timestamp: '2:00:55 PM',
    seconds: 108,
    speaker: 'agent',
    text: "You're absolutely right, and I apologize. This shouldn't have happened twice. I want to make this right for you.",
    emotionScore: -0.2,
    emotionLabel: 'Empathetic',
    prosody: [
      { name: 'Sympathy', score: 0.48, color: 'bg-blue-300' },
      { name: 'Determination', score: 0.39, color: 'bg-emerald-500' },
      { name: 'Distress', score: 0.22, color: 'bg-orange-400' },
    ],
  },
  {
    id: 9,
    timestamp: '2:01:15 PM',
    seconds: 128,
    speaker: 'customer',
    text: "Honestly, I'm thinking about just cancelling. I've been a customer for two years and this is how it goes?",
    emotionScore: -0.9,
    emotionLabel: 'Very Frustrated',
    prosody: [
      { name: 'Anger', score: 0.68, color: 'bg-red-500' },
      { name: 'Disappointment', score: 0.55, color: 'bg-gray-500' },
      { name: 'Contempt', score: 0.42, color: 'bg-red-400' },
    ],
  },
  {
    id: 10,
    timestamp: '2:01:40 PM',
    seconds: 153,
    speaker: 'agent',
    text: "I'd really hate to lose you as a customer, James. Here's what I can do — I'm going to refund both months of overcharges right now, and I'm escalating this to our billing team lead to make sure it's permanently fixed.",
    emotionScore: -0.15,
    emotionLabel: 'Determined',
    prosody: [
      { name: 'Determination', score: 0.58, color: 'bg-emerald-500' },
      { name: 'Concentration', score: 0.34, color: 'bg-indigo-500' },
      { name: 'Sympathy', score: 0.28, color: 'bg-blue-300' },
    ],
  },
  {
    id: 11,
    timestamp: '2:02:10 PM',
    seconds: 183,
    speaker: 'customer',
    text: "Both months? Okay... that's something at least. But how do I know it won't happen again next month?",
    emotionScore: -0.4,
    emotionLabel: 'Skeptical',
    prosody: [
      { name: 'Doubt', score: 0.51, color: 'bg-gray-500' },
      { name: 'Contemplation', score: 0.33, color: 'bg-blue-400' },
      { name: 'Interest', score: 0.22, color: 'bg-blue-500' },
    ],
  },
  {
    id: 12,
    timestamp: '2:02:35 PM',
    seconds: 208,
    speaker: 'agent',
    text: "Great question. I'm going to set a manual lock on your plan rate at $29.99, and I'll personally follow up with you via email after the next billing cycle to confirm it's correct. Would that work?",
    emotionScore: 0.1,
    emotionLabel: 'Reassuring',
    prosody: [
      { name: 'Determination', score: 0.45, color: 'bg-emerald-500' },
      { name: 'Concentration', score: 0.38, color: 'bg-indigo-500' },
      { name: 'Calmness', score: 0.29, color: 'bg-teal-400' },
    ],
  },
  {
    id: 13,
    timestamp: '2:03:00 PM',
    seconds: 233,
    speaker: 'customer',
    text: "You'd actually follow up? That's... yeah, that would be great actually.",
    emotionScore: 0.2,
    emotionLabel: 'Surprised',
    prosody: [
      { name: 'Surprise (positive)', score: 0.44, color: 'bg-yellow-400' },
      { name: 'Relief', score: 0.31, color: 'bg-teal-300' },
      { name: 'Interest', score: 0.26, color: 'bg-blue-500' },
    ],
  },
  {
    id: 14,
    timestamp: '2:03:18 PM',
    seconds: 251,
    speaker: 'agent',
    text: "Absolutely. I'm putting a reminder in right now. You'll get an email from me after March 7th confirming everything looks good.",
    emotionScore: 0.3,
    emotionLabel: 'Confident',
    prosody: [
      { name: 'Determination', score: 0.51, color: 'bg-emerald-500' },
      { name: 'Satisfaction', score: 0.35, color: 'bg-emerald-400' },
      { name: 'Calmness', score: 0.28, color: 'bg-teal-400' },
    ],
  },
  {
    id: 15,
    timestamp: '2:03:40 PM',
    seconds: 273,
    speaker: 'customer',
    text: "Okay. And the refund — when does that show up?",
    emotionScore: -0.05,
    emotionLabel: 'Neutral',
    prosody: [
      { name: 'Contemplation', score: 0.29, color: 'bg-blue-400' },
      { name: 'Interest', score: 0.26, color: 'bg-blue-500' },
      { name: 'Calmness', score: 0.19, color: 'bg-teal-400' },
    ],
  },
  {
    id: 16,
    timestamp: '2:03:55 PM',
    seconds: 288,
    speaker: 'agent',
    text: "The $39.98 refund will appear on your card within 3-5 business days. I've already processed it — I can give you the confirmation number if you'd like.",
    emotionScore: 0.25,
    emotionLabel: 'Helpful',
    prosody: [
      { name: 'Concentration', score: 0.40, color: 'bg-indigo-500' },
      { name: 'Determination', score: 0.33, color: 'bg-emerald-500' },
      { name: 'Satisfaction', score: 0.25, color: 'bg-emerald-400' },
    ],
  },
  {
    id: 17,
    timestamp: '2:04:15 PM',
    seconds: 308,
    speaker: 'customer',
    text: "Yeah, let me grab a pen... okay go ahead.",
    emotionScore: 0.15,
    emotionLabel: 'Calm',
    prosody: [
      { name: 'Calmness', score: 0.41, color: 'bg-teal-400' },
      { name: 'Interest', score: 0.28, color: 'bg-blue-500' },
      { name: 'Contemplation', score: 0.19, color: 'bg-blue-400' },
    ],
  },
  {
    id: 18,
    timestamp: '2:04:30 PM',
    seconds: 323,
    speaker: 'agent',
    text: "It's RF-2026-4481. And as a thank you for your patience and loyalty, I've also added a one-month credit to your account.",
    emotionScore: 0.4,
    emotionLabel: 'Positive',
    prosody: [
      { name: 'Satisfaction', score: 0.48, color: 'bg-emerald-400' },
      { name: 'Excitement', score: 0.31, color: 'bg-yellow-400' },
      { name: 'Determination', score: 0.25, color: 'bg-emerald-500' },
    ],
  },
  {
    id: 19,
    timestamp: '2:04:55 PM',
    seconds: 348,
    speaker: 'customer',
    text: "Oh wow, you didn't have to do that. Thank you, Sarah. I really appreciate you actually taking the time.",
    emotionScore: 0.7,
    emotionLabel: 'Grateful',
    prosody: [
      { name: 'Gratitude', score: 0.62, color: 'bg-emerald-400' },
      { name: 'Joy', score: 0.45, color: 'bg-yellow-300' },
      { name: 'Surprise (positive)', score: 0.31, color: 'bg-yellow-400' },
    ],
  },
  {
    id: 20,
    timestamp: '2:05:15 PM',
    seconds: 368,
    speaker: 'agent',
    text: "Of course! You've been with us for two years — that means a lot. Is there anything else I can help you with today?",
    emotionScore: 0.5,
    emotionLabel: 'Warm',
    prosody: [
      { name: 'Joy', score: 0.42, color: 'bg-yellow-300' },
      { name: 'Satisfaction', score: 0.38, color: 'bg-emerald-400' },
      { name: 'Interest', score: 0.25, color: 'bg-blue-500' },
    ],
  },
  {
    id: 21,
    timestamp: '2:05:35 PM',
    seconds: 388,
    speaker: 'customer',
    text: "No, I think that covers it. You really turned this around — I was ready to cancel when I called in.",
    emotionScore: 0.75,
    emotionLabel: 'Satisfied',
    prosody: [
      { name: 'Satisfaction', score: 0.69, color: 'bg-emerald-400' },
      { name: 'Gratitude', score: 0.48, color: 'bg-emerald-400' },
      { name: 'Relief', score: 0.35, color: 'bg-teal-300' },
    ],
  },
  {
    id: 22,
    timestamp: '2:05:55 PM',
    seconds: 408,
    speaker: 'agent',
    text: "I'm glad I could help. Remember, you'll hear from me after March 7th. Have a great rest of your day, James!",
    emotionScore: 0.6,
    emotionLabel: 'Friendly',
    prosody: [
      { name: 'Joy', score: 0.51, color: 'bg-yellow-300' },
      { name: 'Satisfaction', score: 0.42, color: 'bg-emerald-400' },
      { name: 'Excitement', score: 0.28, color: 'bg-yellow-400' },
    ],
  },
  {
    id: 23,
    timestamp: '2:06:10 PM',
    seconds: 423,
    speaker: 'customer',
    text: "You too, Sarah. Thanks again.",
    emotionScore: 0.8,
    emotionLabel: 'Happy',
    prosody: [
      { name: 'Joy', score: 0.58, color: 'bg-yellow-300' },
      { name: 'Gratitude', score: 0.52, color: 'bg-emerald-400' },
      { name: 'Satisfaction', score: 0.44, color: 'bg-emerald-400' },
    ],
  },
]

export const detectedIssues: DetectedIssue[] = [
  {
    id: 1,
    title: 'Recurring Billing Error',
    description:
      'Customer charged $49.99 instead of $29.99 (Basic plan rate). This is the second consecutive month — previous fix did not persist across billing cycles.',
    severity: 'critical',
    timestamp: '0:12',
    relatedSegmentId: 3,
  },
  {
    id: 2,
    title: 'Escalation Risk — Churn Intent',
    description:
      'Customer explicitly stated intent to cancel at 2:10. Two-year customer with recurring billing issue. Retained through double refund + follow-up commitment.',
    severity: 'warning',
    timestamp: '2:10',
    relatedSegmentId: 9,
  },
  {
    id: 3,
    title: 'Previous Resolution Failed',
    description:
      'Notes from prior call show a rate adjustment was made, but the system reverted it. Suggests a bug in plan-lock logic or a race condition in the billing pipeline.',
    severity: 'critical',
    timestamp: '1:05',
    relatedSegmentId: 6,
  },
]

// Chart data points (skip system messages for the chart)
export const chartData = transcript
  .filter((seg) => seg.speaker !== 'system')
  .map((seg) => ({
    timestamp: seg.timestamp,
    seconds: seg.seconds,
    score: seg.emotionScore,
    label: seg.emotionLabel,
    speaker: seg.speaker,
    segmentId: seg.id,
  }))
