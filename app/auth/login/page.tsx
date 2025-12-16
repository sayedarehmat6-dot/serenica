'use client'
export default function Login() {
return (
<div className="max-w-md mx-auto py-32 px-6">
<h2 className="text-3xl font-semibold">Login</h2>
<form className="mt-8 flex flex-col gap-4">
<input className="bg-black border border-white/20 p-3 rounded" placeholder="Email" />
<input type="password" className="bg-black border border-white/20 p-3 rounded" placeholder="Password" />
<button className="bg-cyan-500 text-black py-3 rounded-xl">Sign In</button>
</form>
</div>
)
}
