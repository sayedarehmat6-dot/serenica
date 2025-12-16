'use client'
import Link from 'next/link'


export default function Footer() {
return (
<footer className="border-t border-white/10 mt-20 py-8 text-center text-sm text-white/60">
<p>&copy; 2025 Serenica. All rights reserved.</p>
<div className="flex justify-center space-x-6 mt-2">
<Link href="/privacy" className="hover:text-cyan-300">Privacy</Link>
<Link href="/terms" className="hover:text-cyan-300">Terms</Link>
</div>
</footer>
)
}
