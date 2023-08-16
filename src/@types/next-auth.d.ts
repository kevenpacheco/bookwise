import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    avatar_url: string | null
    created_at: Date
  }
  interface Session {
    user: User
  }
}
