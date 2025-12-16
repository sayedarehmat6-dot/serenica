'use client'
import { useState } from 'react'


export default function ApiKeyManager() {
const [keys, setKeys] = useState<ApiKey[]>([
{ id: 'key_1', key: 'sk_live_serenica_xxxx', createdAt: '2025-01-10', scope: 'annotation.read/write' }
])


const createKey = () => {
setKeys([...keys, {
id: `key_${Date.now()}`,
key: 'sk_live_serenica_' + Math.random().toString(36).slice(2),
createdAt: new Date().toISOString().slice(0, 10),
scope: 'annotation.read/write'
}])
}


return (
<div className="border border-white/10 rounded-xl p-6">
<h3 className="text-lg font-semibold">API Keys</h3>
<p className="text-xs text-white/60 mt-1">Use API keys to access Serenica programmatically</p>


<button onClick={createKey} className="mt-4 px-4 py-2 rounded bg-cyan-500">Generate API Key</button>


<ul className="mt-6 space-y-3 text-sm">
{keys.map(k => (
<li key={k.id} className="border border-white/5 p-3 rounded">
<p className="font-mono text-xs break-all">{k.key}</p>
<p className="text-xs text-white/50">Created: {k.createdAt} | Scope: {k.scope}</p>
</li>
))}
</ul>
</div>
)
}
