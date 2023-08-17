import { ButtonHTMLAttributes } from 'react'
import { RatingStars } from './RatingStars'
import { BookImage } from './BookImage'
import { twMerge } from 'tailwind-merge'
import { IBook } from '@/@types/Book'

interface BookCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: IBook
}

export function BookCard({ className, data, ...props }: BookCardProps) {
  const { author, averageRating, coverUrl, name, summary } = data

  return (
    <button
      type="button"
      className={twMerge(
        'bg-gray-600 px-6 py-5 grid grid-cols-[108px_1fr] gap-6 rounded-lg border-2 border-solid border-gray-600 text-start hover:border-gray-500',
        className,
      )}
      {...props}
    >
      <BookImage alt={name} src={coverUrl} />

      <div className="flex-1 flex flex-col">
        <header className="flex justify-between mb-3">
          <span className="text-sm">Hoje</span>
          <RatingStars value={averageRating} />
        </header>

        <h2 className="text-gray-100 mb-6">
          {name} <br />
          <span className="text-gray-400 text-sm">{author}</span>
        </h2>

        <p className="text-gray-300 text-sm line-clamp-2">{summary}</p>
      </div>
    </button>
  )
}
