'use client'


export default function UsageMetrics() {
return (
<div className="border border-white/10 rounded-xl p-6">
<h3 className="text-lg font-semibold">Usage Metrics</h3>
<ul className="text-sm text-white/60 mt-4 space-y-2">
<li>API calls this month: 12,430</li>
<li>Jobs executed: 84</li>
<li>Average latency: 2.1s</li>
<li>Error rate: 0.02%</li>
</ul>
</div>
)
}
