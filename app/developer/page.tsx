'use client'
import { useState } from 'react'
import api from '@/lib/api'


export default function DeveloperConsole() {
const [endpoint, setEndpoint] = useState('/example')
const [method, setMethod] = useState('GET')
const [response, setResponse] = useState('')


const handleRequest = async () => {
try {
const res = await api({ url: endpoint, method: method as any })
setResponse(JSON.stringify(res.data, null, 2))
} catch (err: any) {
setResponse(err.message)
}
}


return (
<div className="max-w-5xl mx-auto py-20">
<h2 className="text-3xl font-bold text-cyan-400 mb-6">Developer API Console</h2>
<div className="flex gap-4 mb-4">
<select value={method} onChange={(e) => setMethod(e.target.value)} className="p-2 rounded bg-black border border-white/10">
<option>GET</option>
<option>POST</option>
<option>PUT</option>
<option>DELETE</option>
</select>
<input type="text" value={endpoint} onChange={(e) => setEndpoint(e.target.value)} placeholder="API Endpoint" className="flex-1 p-2 rounded bg-black border border-white/10" />
<button onClick={handleRequest} className="px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400">Send</button>
</div>
<pre className="bg-black border border-white/10 rounded p-4 overflow-x-auto text-white/70">{response}</pre>
</div>
)
}
