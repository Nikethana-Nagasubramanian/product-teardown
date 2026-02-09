export interface Sentence {
  id: number
  text: string
  aiProbability: number
  level: 'High' | 'Med' | null
  highlighted: boolean
  reason: string | null
  explanation: string | null
}

export const sentences: Sentence[] = [
  {
    id: 1,
    text: "Snow in Boston has this strange dual personality: it's both a cliché and still a bit shocking every time it really shows up.",
    aiProbability: 98,
    level: 'High',
    highlighted: true,
    reason: 'Robotic Formality',
    explanation: "The sentence's formal tone is maintained through the use of phrases like 'dual personality' and 'still a bit shocking'."
  },
  {
    id: 2,
    text: "The classic winter picture is familiar—wet flakes blowing sideways off the harbor, brownstones in Back Bay with staircases carved into snowbanks, the Green Line crawling along tracks half-buried in slush.",
    aiProbability: 85,
    level: 'Med',
    highlighted: true,
    reason: 'Robotic Formality',
    explanation: "Descriptive phrasing like 'wet flakes blowing sideways' and 'staircases carved into snowbanks' maintains a formal, structured tone."
  },
  {
    id: 3,
    text: "But what actually stands out when you live here is the inconsistency.",
    aiProbability: 12,
    level: null,
    highlighted: false,
    reason: null,
    explanation: null
  },
  {
    id: 4,
    text: "Some winters tease you with a dusting that melts by noon, others dump nor'easter after nor'easter until sidewalks become canyon walls of compacted ice.",
    aiProbability: 45,
    level: null,
    highlighted: false,
    reason: null,
    explanation: null
  },
  {
    id: 5,
    text: "The city's whole rhythm changes with snow: commute patterns, soundscape, even how light bounces off buildings on those rare, blue-sky days after a storm when everything is crisp and quiet.",
    aiProbability: 78,
    level: 'Med',
    highlighted: true,
    reason: 'Robotic Formality',
    explanation: "The structured enumeration of 'commute patterns, soundscape, even how light bounces' creates a formal, list-like tone typical of AI writing."
  },
  {
    id: 6,
    text: "If you zoom out over the last four decades, the data backs up what residents feel: Boston winters have become more volatile.",
    aiProbability: 96,
    level: 'High',
    highlighted: true,
    reason: 'Robotic Formality',
    explanation: "The sentence's formal tone is maintained through the use of phrases like 'visually and emotionally' and 'broader climate story'."
  },
  {
    id: 7,
    text: "Since the 1980s, you see huge swings in annual snowfall—monster years like 2015, when the city recorded over 100 inches and roofs literally collapsed under the weight, sitting right next to winters where barely a foot lands all season.",
    aiProbability: 94,
    level: 'High',
    highlighted: true,
    reason: 'Robotic Formality',
    explanation: "The contrast structure 'monster years...sitting right next to winters' and formal quantification maintains an AI-like analytical tone."
  },
  {
    id: 8,
    text: "Climate work on New England shows winters trending warmer overall, yet when it does snow, it increasingly arrives as intense, high-precipitation events—\"all or nothing\" storms instead of gentle, frequent flakes.",
    aiProbability: 92,
    level: 'High',
    highlighted: true,
    reason: 'Robotic Formality',
    explanation: "Technical phrasing like 'high-precipitation events' and the structured contrast of 'all or nothing storms instead of gentle, frequent flakes' indicates AI generation."
  },
  {
    id: 9,
    text: "That shift changes the character of Boston snow.",
    aiProbability: 35,
    level: null,
    highlighted: false,
    reason: null,
    explanation: null
  },
  {
    id: 10,
    text: "Earlier decades leaned more toward long, cold stretches where snow could linger for weeks, building up gradually.",
    aiProbability: 42,
    level: null,
    highlighted: false,
    reason: null,
    explanation: null
  },
  {
    id: 11,
    text: "Now, you're just as likely to get a freak 60–70°F day in January that erases everything overnight.",
    aiProbability: 38,
    level: null,
    highlighted: false,
    reason: null,
    explanation: null
  },
  {
    id: 12,
    text: "Since around 2010, Boston has logged some of its warmest winters on record, even as it set records for total snowfall in individual years.",
    aiProbability: 55,
    level: null,
    highlighted: false,
    reason: null,
    explanation: null
  },
  {
    id: 13,
    text: "Warmer air holds more moisture, which means when conditions line up in the right narrow temperature band, the city gets hammered by heavy, wet snow rather than the light powder you might associate with a \"typical\" New England winter.",
    aiProbability: 68,
    level: null,
    highlighted: false,
    reason: null,
    explanation: null
  },
  {
    id: 14,
    text: "So you have this weird pairing: less reliable snow cover across the season, but more extreme single events when storms do hit.",
    aiProbability: 48,
    level: null,
    highlighted: false,
    reason: null,
    explanation: null
  }
]

export const highlightedSentences = sentences.filter(s => s.highlighted).sort((a, b) => b.aiProbability - a.aiProbability)

export const stats = {
  ai: 99,
  mixed: 1,
  human: 0,
  totalCharacters: 3196,
  totalWords: 470,
  scansLeft: 2,
  totalSentences: highlightedSentences.length
}

