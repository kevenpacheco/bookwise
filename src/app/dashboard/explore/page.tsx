'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import TagInput from '@/components/TagInput'
import { BookCardSmall } from '@/components/BookCardSmall'
import { IBook } from '@/@types/Book'
import { api } from '@/lib/axios'
import { Binoculars } from '@phosphor-icons/react'
import { useSelectedBook } from '@/hooks/useSelectedBook'
import { categories } from '../../../../prisma/constants/categories'

export default function Explore() {
  const [books, setBooks] = useState<IBook[]>([])
  const [searchText, setSearchText] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const { selectBook } = useSelectedBook()

  function handleSelectBook(book: IBook) {
    return function () {
      selectBook(book)
    }
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

    return (
      book.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) &&
      booksInCategories
    )
  })

  return (
    <>
      <header className="mb-12">
        <div className="grid grid-cols-[1fr_min(433px,100%)] justify-between">
          <PageTitle>
            <Binoculars size={32} className="fill-green-100" /> Explorar
          </PageTitle>

          <Input
            placeholder="Buscar livro ou autor"
            onChange={handleSearchBook}
          />
        </div>

        <div className="flex items-center flex-wrap gap-3">
          <TagInput
            value="Tudo"
            checked={!selectedCategories.length}
            onChange={handleSelectCategory}
          />
          {categories.map(({ name }) => (
            <TagInput
              key={name}
              value={name}
              checked={
                (name === 'Tudo' && selectedCategories.length === 0) ||
                selectedCategories.includes(name)
              }
              onChange={handleSelectCategory}
            />
          ))}
        </div>
      </header>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5">
        {booksInView.map((book) => (
          <BookCardSmall
            key={book.id}
            data={book}
            onClick={handleSelectBook(book)}
          />
        ))}
      </div>
    </>
  )
}
