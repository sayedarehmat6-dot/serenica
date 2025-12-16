'use client'
import { create } from 'zustand'


export const useUserStore = create((set) => ({
plan: 'FREE',
jobsUsed: 0,
upgrade: (plan) => set({ plan }),
incrementJob: () => set((s) => ({ jobsUsed: s.jobsUsed + 1 }))
}))
