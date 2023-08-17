'use client'

import { LoginButton } from '@/components/LoginButton'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function LoginButtons() {
  const router = useRouter()

  function handleGoToDashboard() {
    router.push('/dashboard')
  }

  return (
    <div className="mt-10 flex flex-col gap-4">
      <LoginButton icon="google" onClick={() => signIn('google')}>
        Entrar com Google
      </LoginButton>
      <LoginButton icon="github" onClick={() => signIn('github')}>
        Entrar com GitHub
      </LoginButton>
      <LoginButton icon="rocket" onClick={handleGoToDashboard}>
        Acessar como visitante
      </LoginButton>
    </div>
  )
}
