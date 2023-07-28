'use client'

import { LoginButton } from '@/components/LoginButton'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const router = useRouter()

  function handleGoToDashboard() {
    router.push('/dashboard')
  }

  return (
    <div className="h-[calc(100vh-1.25rem*2)] grid grid-cols-1 justify-items-center items-center md:grid-cols-[4fr_6fr]">
      <div
        className="w-full h-full rounded-[10px] bg-center bg-no-repeat bg-cover hidden md:block"
        style={{
          backgroundImage: "url('login.png')",
        }}
      />

      <div className="w-full max-w-[372px]">
        <h1 className="text-gray-100 text-title-lg mb-[2px]">Boas vindas!</h1>
        <span>Faça seu login ou acesse como visitante.</span>

        <div className="mt-10 flex flex-col gap-4">
          <LoginButton icon="google">Entrar com Google</LoginButton>
          <LoginButton icon="github">Entrar com GitHub</LoginButton>
          <LoginButton icon="rocket" onClick={handleGoToDashboard}>
            Acessar como visitante
          </LoginButton>
        </div>
      </div>
    </div>
  )
}
