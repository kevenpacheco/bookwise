'use client'

import { Book } from '@/@types/Book'
import { Comment } from '@/@types/Comment'
import { BookImage } from '@/components/BookImage'
import { CommentCard } from '@/components/CommentCard'
import { CommentForm } from '@/components/CommentForm'
import { LoginModal } from '@/components/LoginModal'
import { RatingStars } from '@/components/RatingStars'
import { api } from '@/lib/axios'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface BookInfoModal {
  book: Book
  onClose: () => void
}

export function BookInfoModal({ book, onClose }: BookInfoModal) {
  const [comments, setComments] = useState<Comment[]>([])
  const [isRating, setRating] = useState(false)
  const [isShowLoginModal, setIsShowLoginModal] = useState(false)

  const { data: session } = useSession()

  function handleRating() {
    if (session?.user) {
      setRating(true)
      return
    }

    setIsShowLoginModal(true)
  }

  function handleCloseLoginModal() {
    setIsShowLoginModal(false)
  }

  function handleCloseRatingForm() {
    setRating(false)
  }

  function generateRatingCountText(count: number) {
    if (!count) return null

    if (count > 1) {
      return `${count} avaliações`
    }

    return `${count} avaliação`
  }

  async function confirmNewRating({
    rate,
    description,
  }: Pick<Comment, 'description' | 'rate'>) {
    const { data } = await api.post(`/books/${book.id}/reviews`, {
      rate,
      description,
    })

    setComments((prevState) => [data, ...prevState])

    handleCloseRatingForm()
  }

  useEffect(() => {
    api.get(`/books/${book.id}/reviews`).then((response) => {
      setComments(response.data)
    })
  }, [book.id])

  return (
    <>
      <div className="fixed inset-0 p-2 flex justify-end bg-black/60">
        <div className="book-info w-full max-w-[660px] px-[34px] pt-4 pb-16 bg-gray-800 shadow-[-4px_0_30px_0_rgba(0,0,0,0.50)] overflow-y-auto">
          <button
            type="button"
            onClick={onClose}
            className="ml-auto block cursor-pointer"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col gap-10 px-8 pt-6 pb-4 mt-4 rounded-[10px] bg-gray-700">
            <div className="flex gap-8">
              <BookImage
                src={book.coverUrl}
                alt={book.name}
                className="w-full max-w-[172px]"
              />

              <div className="flex-1 flex flex-col justify-between">
                <h2 className="text-gray-100 text-title-xs">
                  {book.name} <br />
                  <span className="text-gray-400 text-md">{book.author}</span>
                </h2>

                <div>
                  <RatingStars value={book.averageRating} />

                  <span className="text-gray-400 text-sm mt-1 block">
                    {generateRatingCountText(book.ratingCount)}
                  </span>
                </div>
              </div>
            </div>

            <footer className="flex items-center gap-14 mb-4 py-6 border-t border-solid border-gray-600">
              <div className="flex justify-center items-center gap-4 py-1">
                <BookmarkSimple size={24} className="fill-green-100" />
                <span className="text-gray-300 text-sm">
                  Categoria
                  <br />
                  <span className="block text-gray-200 text-title-xs font-bold lowercase first-letter:capitalize">
                    {book.categories.join(', ')}
                  </span>
                </span>
              </div>

              <div className="flex justify-center items-center gap-4 py-1">
                <BookOpen size={24} className="fill-green-100" />
                <span className="text-gray-300 text-sm">
                  Páginas
                  <br />
                  <span className="text-gray-200 text-title-xs font-bold">
                    {book.totalPages}
                  </span>
                </span>
              </div>
            </footer>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <header className="flex items-center justify-between">
              <span className="text-gray-200 text-sm">Avaliações</span>
              <button
                type="button"
                onClick={handleRating}
                className="text-purple-100 flex items-center px-1 py-2 gap-3"
              >
                Avaliar
              </button>
            </header>

            <div className="flex flex-col gap-3">
              {isRating && (
                <CommentForm
                  onCancel={handleCloseRatingForm}
                  onConfirm={confirmNewRating}
                />
              )}

              {comments.map((comment) => {
                return <CommentCard key={comment.id} data={comment} />
              })}
            </div>
          </div>
        </div>
      </div>

      {isShowLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
    </>
  )
}
