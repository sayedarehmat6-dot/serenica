'use client'


export default function AuditLog() {
return (
<div className="border border-white/10 rounded-xl mt-10 p-4">
<h3 className="text-lg font-semibold">Audit Log</h3>
<ul className="text-xs text-white/60 mt-3 space-y-2">
<li>2025-01-13 10:12 – File uploaded (VCF)</li>
<li>2025-01-13 10:13 – Annotation started</li>
<li>2025-01-13 10:15 – Results generated</li>
<li>2025-01-13 10:16 – CSV exported</li>
</ul>
</div>
)
}
