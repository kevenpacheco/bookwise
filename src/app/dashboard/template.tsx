import { ReactNode } from 'react'
import { AsideBar } from '@/components/AsideBar'
import { ModalBookDetails } from '@/components/ModalBookDetails'
import { SelectedBookProvider } from '@/contexts/SelectedBook'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="h-[calc(100vh-40px)] flex relative">
      <AsideBar />

      <SelectedBookProvider>
        <main className="flex-1 px-24 pt-[72px] pb-[84px] overflow-auto">
          {children}
        </main>

        <ModalBookDetails />
      </SelectedBookProvider>
    </div>
  )
}
