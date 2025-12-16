'use client'
export default function Signup() {
return (
<div className="max-w-md mx-auto py-32 px-6">
<h2 className="text-3xl font-semibold">Create Account</h2>
<form className="mt-8 flex flex-col gap-4">
<input className="bg-black border border-white/20 p-3 rounded" placeholder="Email" />
<input type="password" className="bg-black border border-white/20 p-3 rounded" placeholder="Password" />
<select className="bg-black border border-white/20 p-3 rounded">
<option>Research</option>
<option>Clinical</option>
<option>Enterprise</option>
</select>
<button className="bg-cyan-500 text-black py-3 rounded-xl">Create Account</button>
<p className="text-xs text-white/60">Free tier includes limited analyses. Upgrade anytime.</p>
</form>
</div>
)
}
