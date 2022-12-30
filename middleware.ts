import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log(`Middleware request.referrer: '${request.referrer}'`)
    console.log(`Middleware request.headers.get('referer'): '${request.headers.get('referer')}'`)
}

export const config = {
    matcher: [
        '/',
        '/api/hello'
    ]
}