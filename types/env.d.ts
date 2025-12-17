// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    // public (client + server)
    NEXT_PUBLIC_API_URL: string
    NEXT_PUBLIC_APP_NAME?: string
    NEXT_PUBLIC_LOCALE?: string

    // server only

    // app
    NODE_ENV: 'local' | 'development' | 'production' | 'test'
  }
}
