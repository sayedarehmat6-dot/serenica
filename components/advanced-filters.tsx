'use client'
import { useAnalysisStore } from '@/store/analysis-store'
import { useState } from 'react'


export default function AdvancedFilters() {
const { results } = useAnalysisStore()
const [threshold, setThreshold] = useState(0.5)


const filtered = results.filter(r => r.score >= threshold)


return (
<div className="border border-white/10 p-4 rounded-xl">
<label className="text-sm">Minimum Score</label>
<input
type="range"
min={0}
max={1}
step={0.01}
value={threshold}
onChange={(e) => setThreshold(Number(e.target.value))}
className="w-full mt-2"
/>
<p className="text-xs text-white/60 mt-2">Showing {filtered.length} variants</p>
</div>
)
}
