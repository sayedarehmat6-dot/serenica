'use client'
import { create } from 'zustand'


interface Variant {
id: string
gene: string
score: number
phenotypeMatch: string
}


interface AnalysisState {
variants: Variant[]
addVariants: (v: Variant[]) => void
clearVariants: () => void
}


export const useAnalysisStore = create<AnalysisState>((set) => ({
variants: [],
addVariants: (v) => set({ variants: v }),
clearVariants: () => set({ variants: [] })
}))
