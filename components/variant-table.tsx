'use client'
import { useAnalysisStore } from '@/store/analysis-store'


export default function VariantTable() {
const { results } = useAnalysisStore()


if (!results.length) {
return <p className="text-white/60 mt-6">No results yet.</p>
}


return (
<table className="mt-8 w-full border border-white/10 text-sm">
<thead className="bg-white/5">
<tr>
<th className="p-3 text-left">Variant</th>
<th className="p-3">Score</th>
<th className="p-3">Interpretation</th>
</tr>
</thead>
<tbody>
{results.map((r, i) => (
<tr key={i} className="border-t border-white/10">
<td className="p-3">{r.variant}</td>
<td className="p-3 text-center">{r.score}</td>
<td className="p-3 text-center">{r.interpretation}</td>
</tr>
))}
</tbody>
</table>
)
}
