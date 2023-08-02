'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import TagInput from '@/components/TagInput'
import { BookInfoModal } from './components/BookInfoModal'
import { BookCardSmall } from '@/components/BookCardSmall'
import { Book } from '@/@types/Book'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { LoginModal } from '@/components/LoginModal'
import { categories } from '@/utils/categories'

export default function Explore() {
  const [books, setBooks] = useState<Book[]>([])
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [isRating, setIsRating] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const { data: session } = useSession()

  function handleSelectBook(book: Book) {
    return () => {
      setSelectedBook(book)
    }
  }

  function handleClearSelectedBook() {
    setSelectedBook(null)
  }

  function handleRating() {
    if (!session) {
      setShowLoginModal(true)
      return
    }
    setIsRating(true)
  }

  function handleCloseLoginModal() {
    setShowLoginModal(false)
  }

  function handleSearchBook(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value)
  }

  function handleSelectCategory(e: ChangeEvent<HTMLInputElement>) {
    const currentCategory = e.target.value
    const hasBeenSelected = selectedCategories.includes(currentCategory)

    if (
      currentCategory === 'Tudo' ||
      (selectedCategories.length === 1 && hasBeenSelected)
    ) {
      setSelectedCategories([])
      return
    }

    if (hasBeenSelected) {
      setSelectedCategories((prevState) =>
        prevState.filter((c) => c !== currentCategory),
      )
      return
    }

    setSelectedCategories((prevState) => [...prevState, currentCategory])
  }

  useEffect(() => {
    api.get('/books').then((resp) => {
      setBooks(resp.data)
    })
  }, [])

  const booksInView = books.filter((book) => {
    const booksInCategories =
      selectedCategories.length === 0 ||
      book.categories.some((category) => selectedCategories.includes(category))

    return book.name.includes(searchText) && booksInCategories
  })

  return (
    <>
      <header className="mb-12">
        <div className="grid grid-cols-[1fr_min(433px,100%)] justify-between">
          <PageTitle />
          <Input
            placeholder="Buscar livro ou autor"
            onChange={handleSearchBook}
          />
        </div>

        <div className="flex items-center flex-wrap gap-3">
          {categories.map((category) => (
            <TagInput
              key={category}
              value={category}
              checked={
                (category === 'Tudo' && selectedCategories.length === 0) ||
                selectedCategories.includes(category)
              }
              onChange={handleSelectCategory}
            />
          ))}
        </div>
      </header>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-5">
        {booksInView.map((book) => (
          <BookCardSmall
            key={book.id}
            data={book}
            onClick={handleSelectBook(book)}
          />
        ))}
      </div>

      {!!selectedBook && (
        <BookInfoModal
          book={selectedBook}
          onClose={handleClearSelectedBook}
          isRating={isRating}
          onRating={handleRating}
        />
      )}

      {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
    </>
  )
}
