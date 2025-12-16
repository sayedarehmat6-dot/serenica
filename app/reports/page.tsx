'use client'
import ReportActions from '@/components/report-actions'
import { useAnalysisStore } from '@/store/analysis-store'


export default function ReportsPage() {
const variants = useAnalysisStore((state) => state.variants)


return (
<div className="max-w-6xl mx-auto py-20">
<h2 className="text-3xl font-bold text-cyan-400 mb-6">Reports</h2>
{variants.length ? (
<>
<div className="overflow-x-auto">
<table className="min-w-full text-left text-white/80 border border-white/10">
<thead>
<tr>
<th className="px-4 py-2">Variant</th>
<th className="px-4 py-2">Gene</th>
<th className="px-4 py-2">Score</th>
<th className="px-4 py-2">Phenotype Match</th>
</tr>
</thead>
<tbody>
{variants.map((v, idx) => (
<tr key={idx} className="border-t border-white/10">
<td className="px-4 py-2">{v.id}</td>
<td className="px-4 py-2">{v.gene}</td>
<td className="px-4 py-2">{v.score}</td>
<td className="px-4 py-2">{v.phenotypeMatch}</td>
</tr>
))}
</tbody>
</table>
</div>
<ReportActions />
</>
) : (
<p className="text-white/60">No analysis reports available. Upload files to generate reports.</p>
)}
</div>
)
}
