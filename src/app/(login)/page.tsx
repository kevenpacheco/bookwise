import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { LoginButtons } from './components/LoginButtons'

export default async function SignIn() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
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

        <LoginButtons />
      </div>
    </div>
  )
}
