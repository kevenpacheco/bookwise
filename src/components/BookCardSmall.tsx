import { ButtonHTMLAttributes } from 'react'
import { BookImage } from './BookImage'
import { RatingStars } from './RatingStars'
import { twMerge } from 'tailwind-merge'
import { IBook } from '@/@types/Book'

interface BookCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: IBook
}

export function BookCardSmall({ className, data, ...props }: BookCardProps) {
  const { author, coverUrl, name, averageRating, wasRead } = data

  return (
    <button
      type="button"
      className={twMerge(
        'bg-gray-700 relative overflow-hidden px-5 py-7 grid grid-cols-[108px_1fr] gap-5 rounded-lg border-2 border-solid border-gray-700 text-start hover:border-gray-500',
        className,
      )}
      {...props}
    >
      {wasRead && (
        <span className="px-3 py-1 rounded-es bg-green-300 absolute top-0 right-0 uppercase text-green-100 text-xs font-bold">
          Lido
        </span>
      )}

      <BookImage src={coverUrl} alt={name} />

      <div className="h-full flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col">
          <h2 className="text-gray-100 text-title-xs line-clamp-2">{name}</h2>
          <span className="text-gray-400 text-sm">{author}</span>
        </div>

        <RatingStars value={averageRating} />
      </div>
    </button>
  )
}
