'use client'
import Link from 'next/link'


export default function Navigation() {
return (
<header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<Link href="/" className="text-2xl font-semibold tracking-tight">Serenica</Link>
<nav className="flex gap-6 text-sm text-white/80">
<Link href="/platform">Platform</Link>
<Link href="/solutions">Solutions</Link>
<Link href="/pricing">Pricing</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
<Link href="/auth/login" className="text-cyan-400">Login</Link>
<Link href="/auth/signup" className="text-cyan-400">Sign Up</Link>
</nav>
</div>
</header>
)
}
