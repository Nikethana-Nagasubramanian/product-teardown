"use client";

import { BuggyColumn } from "./components/BuggyColumn";
import { SmoothColumn } from "./components/SmoothColumn";

export default function DndComparisonPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex items-center justify-center p-8">
      <div className="flex gap-12 items-start">
        <BuggyColumn />
        <SmoothColumn />
      </div>
    </div>
  );
}
