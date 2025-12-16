'use client'
import { useAnalysisStore } from '@/store/analysis-store'


export default function ReportActions() {
const { results } = useAnalysisStore()


const downloadCSV = () => {
const header = 'Variant,Gene,Score,Interpretation\n'
const rows = results.map(r => `${r.variant},${r.gene},${r.score},${r.interpretation}`).join('\n')
const blob = new Blob([header + rows], { type: 'text/csv' })
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = 'serenica_results.csv'
a.click()
}


const generatePDF = () => {
alert('PDF generation hook ready – connect backend renderer')
}


return (
<div className="flex gap-4">
<button onClick={downloadCSV} className="px-4 py-2 rounded bg-cyan-500">Export CSV</button>
<button onClick={generatePDF} className="px-4 py-2 rounded bg-white/10">Generate PDF</button>
</div>
)
}
