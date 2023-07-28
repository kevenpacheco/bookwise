import { LoginButton } from './LoginButton'
import { CloseButton } from './CloseButton'

export function LoginModal() {
  return (
    <div className="grid place-items-center bg-black/60 fixed inset-0">
      <div className="px-14 py-[72px] w-[516px] flex flex-col gap-10 rounded-2xl bg-gray-700 shadow-[-4px_16px_24px_0_rgba(0,0,0,0.25)] relative">
        <CloseButton className="fill-gray-400 absolute top-4 right-4" />

        <h3 className="text-gray-200 text-center text-title-xs">
          Faças login para deixar sua avaliação
        </h3>

        <div className="flex flex-col gap-4">
          <LoginButton icon="google">Entrar com Google</LoginButton>
          <LoginButton icon="github">Entrar com Github</LoginButton>
        </div>
      </div>
    </div>
  )
}
