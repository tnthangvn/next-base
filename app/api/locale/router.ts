// app/api/locale/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { locale } = await req.json()
  const res = NextResponse.json({ ok: true })

  res.cookies.set({
    name: 'locale',
    value: locale,
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  })

  return res
}
