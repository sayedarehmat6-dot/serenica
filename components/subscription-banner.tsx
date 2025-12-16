'use client'
export default function SubscriptionBanner() {
return (
<div className="p-4 bg-white/10 rounded-xl text-center mb-6">
<p className="text-white/80">You are currently on the Free Plan. Upgrade to Pro or Enterprise for unlimited analyses and AI insights.</p>
<button className="mt-2 px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400">Upgrade Now</button>
</div>
)
}
