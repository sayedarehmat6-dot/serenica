'use client'
import { useState } from 'react'
import { useAnalysisStore } from '@/store/analysis-store'


export default function UploadPanel() {
const [files, setFiles] = useState<FileList | null>(null)
const [mode, setMode] = useState('research')
const { runAnalysis, running } = useAnalysisStore()


return (
<div className="border border-white/10 rounded-xl p-6 max-w-xl">
<h3 className="text-xl font-semibold">Run Analysis</h3>


<select
className="mt-4 bg-black border border-white/20 p-3 rounded w-full"
value={mode}
onChange={(e) => setMode(e.target.value)}
>
<option value="clinical">Clinical</option>
<option value="research">Research</option>
<option value="pharma">Pharma</option>
</select>


<input
type="file"
multiple
accept=".vcf,.gz,.csv"
className="mt-4 w-full"
onChange={(e) => setFiles(e.target.files)}
/>


<button
disabled={!files || running}
onClick={() => files && runAnalysis(files, mode)}
className="mt-6 bg-cyan-500 text-black py-3 px-6 rounded-xl disabled:opacity-50"
>
{running ? 'Processing…' : 'Start Analysis'}
</button>
</div>
)
}
