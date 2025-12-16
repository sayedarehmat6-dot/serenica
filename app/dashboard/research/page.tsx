import UploadPanel from '@/components/upload-panel'
import VariantTable from '@/components/variant-table'
import SubscriptionBanner from '@/components/subscription-banner'
import GraphView from '@/components/graph-view'
import ScoreChart from '@/components/score-chart'
import AdvancedFilters from '@/components/advanced-filters'


export default function ResearchDashboard() {
return (
<div>
<h2 className="text-3xl font-semibold">Research Analysis</h2>
<SubscriptionBanner />


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
<UploadPanel />
<AdvancedFilters />
<ScoreChart />
</div>


<VariantTable />


<div className="mt-10">
<h3 className="text-xl font-semibold mb-4">Causal Knowledge Graph</h3>
<GraphView />
</div>
</div>
)
}
