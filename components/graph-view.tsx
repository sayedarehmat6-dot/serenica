'use client'
import CytoscapeComponent from 'react-cytoscapejs'


export default function GraphView() {
const elements = [
{ data: { id: 'gene1', label: 'BRCA1' } },
{ data: { id: 'gene2', label: 'TP53' } },
{ data: { source: 'gene1', target: 'gene2', label: 'interaction' } }
]


return (
<div className="h-[400px] border border-white/10 rounded-xl">
<CytoscapeComponent
elements={elements}
style={{ width: '100%', height: '100%' }}
layout={{ name: 'cose' }}
stylesheet={[
{ selector: 'node', style: { label: 'data(label)', backgroundColor: '#22d3ee' } },
{ selector: 'edge', style: { label: 'data(label)', lineColor: '#94a3b8' } }
]}
/>
</div>
)
}
