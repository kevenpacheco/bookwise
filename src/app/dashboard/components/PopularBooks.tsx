'use client'

import { IBook } from '@/@types'
import { BookCardSmall } from '@/components/BookCardSmall'
import { LinkNavigation } from '@/components/Link'
import { useSelectedBook } from '@/hooks/useSelectedBook'
import React from 'react'

interface PopularBooksProps {
  books: IBook[]
}

export default function PopularBooks({ books }: PopularBooksProps) {
  const { selectBook } = useSelectedBook()

  function handleShowBookDetails(book: IBook) {
    return function () {
      selectBook(book)
    }
  }

  return (
    <section className="w-[324px]">
      <div className="text-gray-100 text-sm flex items-center justify-between">
        Livros populares
        <LinkNavigation size="sm" href="/dashboard/explore" prefetch>
          Ver todos
        </LinkNavigation>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {books.map((book) => {
          return (
            <BookCardSmall
              key={book.id}
              data={book}
              onClick={handleShowBookDetails(book)}
              className="grid-cols-[64px_1fr]"
            />
          )
        })}
      </div>
    </section>
  )
}
