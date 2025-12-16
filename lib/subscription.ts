import api from './api'


export async function fetchSubscriptionStatus() {
try {
const res = await api.get('/subscription/status')
return res.data
} catch {
return { plan: 'free', maxJobs: 5 }
}
}
