import { CommentCard } from '@/components/CommentCard'
import { CommentForm } from '@/components/CommentForm'
import { RatingStars } from '@/components/RatingStars'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'

interface BookInfoModal {
  onClose: () => void
}

export function BookInfoModal({ onClose }: BookInfoModal) {
  return (
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
            <div className="aspect-[32/47] w-full max-w-[172px] rounded bg-red-500">
              Livro
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <h2 className="text-gray-100 text-title-xs">
                O Hobbit <br />
                <span className="text-gray-400 text-md">J.R.R. Tolkien</span>
              </h2>

              <div>
                <RatingStars score={3.8} />

                <span className="text-gray-400 text-sm mt-1 block">
                  3 avaliações
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
                <span className="text-gray-200 text-title-xs font-bold">
                  Computação, educação
                </span>
              </span>
            </div>

            <div className="flex justify-center items-center gap-4 py-1">
              <BookOpen size={24} className="fill-green-100" />
              <span className="text-gray-300 text-sm">
                Páginas
                <br />
                <span className="text-gray-200 text-title-xs font-bold">
                  160
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
              className="text-purple-100 flex items-center px-1 py-2 gap-3"
            >
              Avaliar
            </button>
          </header>

          <div className="flex flex-col gap-3">
            <CommentForm />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </div>
    </div>
  )
}
