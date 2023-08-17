'use client'

import { PageTitle } from '@/components/PageTitle'
import { CaretLeft, User } from '@/components/Icons'
import { useRouter } from 'next/navigation'

interface IProfileHeaderProps {
  hasUser: boolean
}

export function ProfileHeader({ hasUser }: IProfileHeaderProps) {
  const router = useRouter()

  function handleBackNavigation() {
    router.back()
  }

  return hasUser ? (
    <PageTitle>
      <User size={32} className="fill-green-100" /> Perfil
    </PageTitle>
  ) : (
    <button
      type="button"
      onClick={handleBackNavigation}
      className="flex items-center gap-3 text-gray-200 mb-10 cursor-pointer hover:text-gray-300"
    >
      <CaretLeft size={20} /> Voltar
    </button>
  )
}
