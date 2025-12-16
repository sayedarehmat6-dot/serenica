export default function Home() {
return (
<section className="max-w-7xl mx-auto px-6 py-32">
<h1 className="text-6xl font-semibold leading-tight max-w-4xl">
The Intelligence Layer for the Future of Bioinformatics
</h1>
<p className="mt-6 text-xl text-white/70 max-w-3xl">
Serenica unifies genomics, multi-omics, AI reasoning, and knowledge graphs into a single
non-replaceable platform for clinical, research, and enterprise discovery.
</p>
<div className="mt-10 flex gap-6">
<a href="/auth/signup" className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-medium">
Get Started
</a>
<a href="/platform" className="border border-white/20 px-8 py-4 rounded-xl">
Explore Platform
</a>
</div>
</section>
)
}
