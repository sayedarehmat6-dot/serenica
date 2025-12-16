'use client'
import Link from 'next/link'


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
return (
<div className="flex">
<aside className="w-64 min-h-screen border-r border-white/10 p-6">
<nav className="flex flex-col gap-4 text-sm">
<Link href="/dashboard">Overview</Link>
<Link href="/dashboard/clinical">Clinical</Link>
<Link href="/dashboard/research">Research</Link>
<Link href="/dashboard/pharma">Pharma</Link>
<Link href="/reports">Reports</Link>
<Link href="/developer">API Console</Link>
</nav>
</aside>
<div className="flex-1 p-10">{children}</div>
</div>
)
}
