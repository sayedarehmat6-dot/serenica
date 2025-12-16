import VariantTable from '@/components/variant-table'
import GraphView from '@/components/graph-view'


export default function ClinicalDashboard() {
return (
<div>
<h2 className="text-3xl font-bold text-cyan-400 mb-6">Clinical Dashboard</h2>
<VariantTable />
<GraphView />
</div>
)
}
