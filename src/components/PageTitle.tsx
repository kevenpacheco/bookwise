import { ReactNode } from 'react'

interface PageTitleProps {
  children: ReactNode
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="flex items-center gap-3 text-gray-100 font-bold text-title-lg mb-10">
      {children}
    </h1>
  )
}
