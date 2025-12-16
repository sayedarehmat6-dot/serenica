'use client'
import { useUserStore } from '@/store/user-store'
import { PLANS } from '@/lib/plans'


export default function SubscriptionBanner() {
const { plan, jobsUsed } = useUserStore()
const limit = PLANS[plan].maxJobs


return (
<div className="border border-cyan-500/30 bg-cyan-500/10 rounded-xl p-4 mt-4">
<p className="text-sm">Plan: <strong>{plan}</strong> | Usage: {jobsUsed}/{limit === Infinity ? '∞' : limit}</p>
{plan === 'FREE' && (
<a href="/pricing" className="text-cyan-400 underline text-sm">Upgrade to unlock full analysis</a>
)}
</div>
)
}
