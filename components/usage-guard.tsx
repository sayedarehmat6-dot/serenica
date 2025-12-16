'use client'
import { useUserStore } from '@/store/user-store'
import { PLANS } from '@/lib/plans'


export default function UsageGuard({ children }: { children: React.ReactNode }) {
const { plan, jobsUsed } = useUserStore()


if (jobsUsed >= PLANS[plan].maxJobs) {
return (
<div className="border border-red-500/30 bg-red-500/10 p-6 rounded-xl">
<h3 className="text-lg font-semibold">Usage Limit Reached</h3>
<p className="text-sm text-white/60 mt-2">Upgrade your plan to continue running analyses.</p>
<a href="/pricing" className="text-red-400 underline">View plans</a>
</div>
)
}


return <>{children}</>
}
