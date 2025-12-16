import UploadPanel from '@/components/upload-panel'
import SubscriptionBanner from '@/components/subscription-banner'


export default function DashboardHome() {
return (
<div>
<h2 className="text-3xl font-bold text-cyan-400 mb-6">Dashboard</h2>
<SubscriptionBanner />
<UploadPanel />
<p className="mt-6 text-white/70">Recent analyses and AI insights will appear here once files are uploaded.</p>
</div>
)
}
