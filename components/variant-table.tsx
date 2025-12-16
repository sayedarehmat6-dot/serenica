'use client'
export default function VariantTable() {
return (
<div className="border border-white/10 rounded-xl p-6 mt-6 overflow-x-auto">
<h3 className="text-lg font-semibold">Variant Table</h3>
<table className="min-w-full mt-4 text-left text-white/80">
<thead>
<tr>
<th className="px-4 py-2">Variant</th>
<th className="px-4 py-2">Gene</th>
<th className="px-4 py-2">Score</th>
<th className="px-4 py-2">Phenotype Match</th>
</tr>
</thead>
<tbody>
<tr>
<td className="px-4 py-2">chr1:12345A>T</td>
<td className="px-4 py-2">TP53</td>
<td className="px-4 py-2">9.8</td>
<td className="px-4 py-2">High</td>
</tr>
</tbody>
</table>
</div>
)
}
