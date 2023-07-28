'use client'

import { routes } from '@/utils/Routes'
import { usePathname } from 'next/navigation'

export function PageTitle() {
  const currentPathname = usePathname()

  const currentPage = routes.find(({ pathname }) => {
    return currentPathname === pathname
  })

  if (!currentPage) {
    return null
  }

  const { icon: Icon, text } = currentPage

  return (
    <h1 className="flex items-center gap-3 text-gray-100 font-bold text-title-lg mb-10">
      <Icon size={32} className="fill-green-100" /> {text}
    </h1>
  )
}
