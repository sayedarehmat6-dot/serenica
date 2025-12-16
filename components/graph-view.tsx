'use client'
import CytoscapeComponent from 'react-cytoscapejs'
export default function GraphView() {
const elements = [
{ data: { id: 'v1', label: 'Variant 1' } },
{ data: { id: 'g1', label: 'Gene 1' } },
{ data: { source: 'v1', target: 'g1', label: 'affects' } }
]


return (
<div className="border border-white/10 rounded-xl p-6 mt-6">
<h3 className="text-lg font-semibold">Knowledge Graph</h3>
<CytoscapeComponent elements={elements} style={{ width: '100%', height: '400px' }} />
</div>
)
}
