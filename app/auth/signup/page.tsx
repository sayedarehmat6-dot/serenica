'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth-store'


export default function SignupPage() {
const router = useRouter()
const { signup } = useAuthStore()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')


const handleSignup = async (e: React.FormEvent) => {
e.preventDefault()
const success = await signup(email, password)
if (success) router.push('/dashboard')
else setError('Signup failed')
}


return (
<div className="max-w-md mx-auto py-20">
<h2 className="text-3xl font-bold text-cyan-400 mb-6">Sign Up</h2>
{error && <p className="text-red-500 mb-4">{error}</p>}
<form onSubmit={handleSignup} className="flex flex-col gap-4">
<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 rounded bg-black border border-white/10" />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-3 rounded bg-black border border-white/10" />
<button type="submit" className="px-6 py-3 rounded bg-cyan-500 hover:bg-cyan-400">Sign Up</button>
</form>
<p className="mt-4 text-sm text-white/60">Already have an account? <a href="/auth/login" className="text-cyan-400 underline">Login</a></p>
</div>
)
}
