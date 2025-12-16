'use client'
import { create } from 'zustand'
import { loginAPI, signupAPI } from '@/lib/auth'


interface AuthState {
user: { email: string } | null
login: (email: string, password: string) => Promise<boolean>
signup: (email: string, password: string) => Promise<boolean>
logout: () => void
}


export const useAuthStore = create<AuthState>((set) => ({
user: null,
login: async (email, password) => {
const res = await loginAPI(email, password)
if (res.success) {
set({ user: { email } })
return true
}
return false
},
signup: async (email, password) => {
const res = await signupAPI(email, password)
if (res.success) {
set({ user: { email } })
return true
}
return false
},
logout: () => set({ user: null })
}))
