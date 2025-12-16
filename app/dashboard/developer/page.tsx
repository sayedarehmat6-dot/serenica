import ApiKeyManager from '@/components/api-key-manager'
import UsageMetrics from '@/components/usage-metrics'
import EnterpriseSettings from '@/components/enterprise-settings'


export default function DeveloperConsole() {
return (
<div>
<h2 className="text-3xl font-semibold">Developer Console</h2>
<div className="grid md:grid-cols-2 gap-6 mt-6">
<ApiKeyManager />
<UsageMetrics />
</div>


<div className="mt-6">
<EnterpriseSettings />
</div>
</div>
)
}
