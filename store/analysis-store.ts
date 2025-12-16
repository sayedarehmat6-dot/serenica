import { create } from 'zustand'


interface VariantResult {
variant: string
score: number
interpretation: string
}


interface AnalysisState {
running: boolean
results: VariantResult[]
runAnalysis: (files: FileList, mode: string) => Promise<void>
}


export const useAnalysisStore = create<AnalysisState>((set) => ({
running: false,
results: [],
runAnalysis: async (files, mode) => {
set({ running: true })
const form = new FormData()
Array.from(files).forEach(f => form.append('file', f))
form.append('mode', mode)


const res = await fetch('/api/annotation', { method: 'POST', body: form })
const data = await res.json()
set({ results: data.results, running: false })
}
}))
