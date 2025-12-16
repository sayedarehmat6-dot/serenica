'use client'
import { create } from 'zustand'
import { fetchSubscriptionStatus } from '@/lib/subscription'


interface SubscriptionState {
plan: 'free' | 'pro' | 'enterprise'
maxJobs: number
loadStatus: () => Promise<void>
}


export const useSubscriptionStore = create<SubscriptionState>((set) => ({
plan: 'free',
maxJobs: 5,
loadStatus: async () => {
const res = await fetchSubscriptionStatus()
set({ plan: res.plan, maxJobs: res.maxJobs })
}
}))
