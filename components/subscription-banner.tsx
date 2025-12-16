'use client'
export default function SubscriptionBanner() {
return (
<div className="border border-yellow-400/30 bg-yellow-500/10 p-4 rounded-xl text-sm">
Free tier: 5 analyses / month. Upgrade for unlimited access.
</div>
)
}


// ---------- app/dashboard/research/page.tsx ----------
import UploadPanel from '@/components/upload-panel'
import VariantTable from '@/components/variant-table'
import SubscriptionBanner from '@/components/subscription-banner'


export default function ResearchDashboard() {
return (
<div>
<h2 className="text-3xl font-semibold">Research Analysis</h2>
<SubscriptionBanner />
<div className="mt-6">
<UploadPanel />
<VariantTable />
</div>
</div>
)
}
