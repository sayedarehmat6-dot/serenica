'use client'


const jobs = [
{ id: 'job_1', date: '2025-01-12', status: 'Completed', samples: 1 },
{ id: 'job_2', date: '2025-01-13', status: 'Completed', samples: 4 }
]


export default function JobHistory() {
return (
<div className="border border-white/10 rounded-xl mt-10">
<h3 className="text-lg font-semibold p-4">Job History</h3>
<table className="w-full text-sm">
<thead className="text-white/60">
<tr>
<th className="p-3">Job ID</th>
<th>Date</th>
<th>Status</th>
<th>Samples</th>
</tr>
</thead>
<tbody>
{jobs.map(j => (
<tr key={j.id} className="border-t border-white/5">
<td className="p-3">{j.id}</td>
<td>{j.date}</td>
<td>{j.status}</td>
<td>{j.samples}</td>
</tr>
))}
</tbody>
</table>
</div>
)
}
