import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(req: NextRequest) {
const token = req.cookies.get('auth_token')
const url = req.nextUrl.clone()


if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
url.pathname = '/auth/login'
return NextResponse.redirect(url)
}


return NextResponse.next()
}


export const config = {
matcher: ['/dashboard/:path*']
}
