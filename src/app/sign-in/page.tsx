import Image from 'next/image'

import googleIcon from '@/assets/google.svg'
import githubIcon from '@/assets/github.svg'
import rocketIcon from '@/assets/rocket.svg'

export default function SignIn() {
  return (
    <div className="p-5 h-[100vh] grid grid-cols-1 justify-items-center items-center md:grid-cols-[4fr_6fr]">
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
          <button
            type="button"
            className="px-6 py-5 flex items-center gap-5 bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            <Image src={googleIcon} alt="" />
            Entrar com Google
          </button>
          <button
            type="button"
            className="px-6 py-5 flex items-center gap-5 bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            <Image src={githubIcon} alt="" />
            Entrar com GitHub
          </button>
          <button
            type="button"
            className="px-6 py-5 flex items-center gap-5 bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            <Image src={rocketIcon} alt="" />
            Acessar como visitante
          </button>
        </div>
      </div>
    </div>
  )
}
