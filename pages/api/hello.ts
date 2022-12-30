import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(request: NextRequest) {
  console.log(`API request.referrer: '${request.referrer}'`)
  console.log(`API request.headers.get('referer'): '${request.headers.get('referer')}'`)

  return new Response(
      JSON.stringify({
        name: 'Jim Halpert',
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      }
  )
}