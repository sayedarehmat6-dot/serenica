import api from './api'


export async function loginAPI(email: string, password: string) {
try {
const res = await api.post('/auth/login', { email, password })
return { success: res.data.success }
} catch {
return { success: false }
}
}


export async function signupAPI(email: string, password: string) {
try {
const res = await api.post('/auth/signup', { email, password })
return { success: res.data.success }
} catch {
return { success: false }
}
}
