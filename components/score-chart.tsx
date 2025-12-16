'use client'
import Plot from 'react-plotly.js'
import { useAnalysisStore } from '@/store/analysis-store'


export default function ScoreChart() {
const { results } = useAnalysisStore()


if (!results.length) return null


return (
<Plot
data={[{
x: results.map(r => r.variant),
y: results.map(r => r.score),
type: 'bar'
}]}
layout={{
paper_bgcolor: 'black',
plot_bgcolor: 'black',
font: { color: 'white' },
title: 'Variant Scores'
}}
/>
)
}
