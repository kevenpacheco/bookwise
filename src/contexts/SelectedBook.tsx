'use client'

import { ReactNode, createContext, useState } from 'react'
import { IBook } from '@/@types'

interface ISelectedBookContext {
  selectedBook: IBook | null
  clearSelectedBook: () => void
  selectBook: (book: IBook) => void
}

export const SelectedBookContext = createContext<ISelectedBookContext | null>(
  null,
)

export function SelectedBookProvider({ children }: { children: ReactNode }) {
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null)

  function selectBook(book: IBook) {
    setSelectedBook(book)
  }

  function clearSelectedBook() {
    setSelectedBook(null)
  }

  return (
    <SelectedBookContext.Provider
      value={{
        clearSelectedBook,
        selectBook,
        selectedBook,
      }}
    >
      {children}
    </SelectedBookContext.Provider>
  )
}
