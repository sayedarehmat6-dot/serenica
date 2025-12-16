'use client'
import Link from 'next/link'


export default function HomePage() {
return (
<div className="text-center py-20">
<h1 className="text-5xl font-bold text-cyan-400">Serenica</h1>
<p className="mt-6 text-xl text-white/70">Next-generation AI-driven bioinformatics platform for variant analysis and multi-omics insights.</p>
<Link href="/auth/signup" className="mt-10 inline-block px-8 py-4 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-400">Get Started</Link>
</div>
)
}


// ---------- app/platform/page.tsx ----------
export default function PlatformPage() {
return (
<div className="max-w-5xl mx-auto py-20">
<h2 className="text-4xl font-bold text-cyan-400">Our Platform</h2>
<p className="mt-4 text-white/70 text-lg">Serenica provides cutting-edge tools for variant annotation, AI ranking, and causal knowledge visualization for research, clinical, and pharma applications.</p>
</div>
)
}
