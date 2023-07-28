import { ButtonHTMLAttributes } from 'react'
import { BookImage } from './BookImage'
import { RatingStars } from './RatingStars'
import { twMerge } from 'tailwind-merge'

type BookCardProps = ButtonHTMLAttributes<HTMLButtonElement>

export function BookCardSmall({ className, ...props }: BookCardProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'bg-gray-700 px-5 py-4 grid grid-cols-[108px_1fr] gap-5 rounded-lg border-2 border-solid border-gray-700 text-start hover:border-gray-500',
        className,
      )}
      {...props}
    >
      <BookImage />

      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col">
          <h2 className="text-gray-100 text-title-xs">O Hobbit</h2>
          <span className="text-gray-400 text-sm">J.R.R. Tolkien</span>
        </div>

        <RatingStars score={1} />
      </div>
    </button>
  )
}
