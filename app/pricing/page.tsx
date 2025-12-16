import { PLANS } from '@/lib/plans'


export default function PricingPage() {
return (
<div className="max-w-5xl mx-auto py-20">
<h1 className="text-4xl font-bold text-center">Pricing</h1>
<div className="grid md:grid-cols-3 gap-8 mt-10">
{Object.entries(PLANS).map(([k, p]) => (
<div key={k} className="border border-white/10 rounded-2xl p-6">
<h2 className="text-2xl font-semibold">{p.name}</h2>
<p className="mt-4 text-3xl">{p.price ? `$${p.price}/mo` : 'Custom'}</p>
<p className="text-sm text-white/60 mt-2">{p.maxJobs === Infinity ? 'Unlimited analyses' : `${p.maxJobs} analyses/month`}</p>
<button className="mt-6 w-full py-2 rounded bg-cyan-500">Subscribe</button>
</div>
))}
</div>
</div>
)
}
