'use client'

import { useState } from 'react'
import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import TagInput from '@/components/TagInput'
import { BookInfoModal } from './components/BookInfoModal'
import { BookCardSmall } from '@/components/BookCardSmall'

const tagsMap = [
  'Tudo',
  'Computação',
  'Educação',
  'Fantasia',
  'Ficção científica',
  'Horror',
  'HQs',
  'Suspense',
]

export default function Explore() {
  const [selectedBook, setSelectedBook] = useState<any | null>(null)

  function handleSelectBook(book: any) {
    setSelectedBook('book')
  }

  function handleClearSelectedBook() {
    setSelectedBook(null)
  }

  return (
    <>
      <header className="mb-12">
        <div className="grid grid-cols-[1fr_min(433px,100%)] justify-between">
          <PageTitle />
          <Input placeholder="Buscar livro ou autor" />
        </div>

        <div className="flex items-center gap-3">
          {tagsMap.map((tag) => (
            <TagInput key={tag}>{tag}</TagInput>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 15 }, (_, index) => (
          <BookCardSmall key={index} onClick={handleSelectBook} />
        ))}
      </div>

      {!!selectedBook && <BookInfoModal onClose={handleClearSelectedBook} />}

      {/* <LoginModal /> */}
    </>
  )
}
