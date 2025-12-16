'use client'
import Link from 'next/link'


export default function Navigation() {
return (
<nav className="flex justify-between items-center py-4 px-6 border-b border-white/10">
<Link href="/" className="text-2xl font-bold text-cyan-400">Serenica</Link>
<div className="space-x-6">
<Link href="/platform" className="hover:text-cyan-300">Platform</Link>
<Link href="/solutions" className="hover:text-cyan-300">Solutions</Link>
<Link href="/pricing" className="hover:text-cyan-300">Pricing</Link>
<Link href="/about" className="hover:text-cyan-300">About</Link>
<Link href="/contact" className="hover:text-cyan-300">Contact</Link>
<Link href="/auth/login" className="px-4 py-2 bg-cyan-500 rounded">Login</Link>
</div>
</nav>
)
}
