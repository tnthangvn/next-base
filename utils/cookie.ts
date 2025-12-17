import { NextResponse } from 'next/server'
import { EXPIRES_TOKEN } from '~/constants'

interface CookieOptions {
  path?: string
  sameSite?: 'lax' | 'strict' | 'none'
  secure?: boolean
  httpOnly?: boolean
  maxAge?: number
}

export class CookieStorage {
  // Set cookie server-side, trả về NextResponse để gửi ra client
  setServerCookie(res: NextResponse, key: string, value: string, options?: CookieOptions) {
    const { path = '/', sameSite = 'lax', maxAge = EXPIRES_TOKEN } = options || {}
    const secure = options?.secure ?? true
    const httpOnly = options?.httpOnly ?? true

    res.cookies.set({
      name: key,
      value,
      path,
      sameSite,
      secure,
      httpOnly,
      maxAge,
    })
  }

  async getServerCookie(key: string): Promise<string | undefined> {
    if (typeof window === undefined) {
      const { cookies } = await import('next/headers')
      const cookieStore = await cookies()
      return cookieStore.get(key)?.value
    }

    throw new Error('You must use getServerCookie on server')
  }

  setClient(key: string, value: string, options?: CookieOptions) {
    const { path = '/', sameSite = 'lax', maxAge = EXPIRES_TOKEN } = options || {}
    const secure = options?.secure ?? false
    const cookieStr = `${key}=${value}; path=${path}; max-age=${maxAge}; samesite=${sameSite}${secure ? '; secure' : ''}`
    document.cookie = cookieStr
  }

  getClient(key: string) {
    const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'))
    return match ? match[2] : undefined
  }
}

export const cookieStorage = new CookieStorage()
