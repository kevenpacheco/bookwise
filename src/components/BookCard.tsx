import { ButtonHTMLAttributes } from 'react'
import { RatingStars } from './RatingStars'
import { BookImage } from './BookImage'
import { twMerge } from 'tailwind-merge'

type BookCardProps = ButtonHTMLAttributes<HTMLButtonElement>

export function BookCard({ className, ...props }: BookCardProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'bg-gray-600 px-6 py-5 grid grid-cols-[108px_1fr] gap-6 rounded-lg border-2 border-solid border-gray-600 text-start hover:border-gray-500',
        className,
      )}
      {...props}
    >
      <BookImage />

      <div className="flex-1 flex flex-col">
        <header className="flex justify-between mb-3">
          <span className="text-sm">Hoje</span>
          <RatingStars score={3.6} />
        </header>

        <h2 className="text-gray-100 mb-6">
          O Hobbit <br />
          <span className="text-gray-400 text-sm">J.R.R. Tolkien</span>
        </h2>

        <p className="text-gray-300 text-sm">
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </p>
      </div>
    </button>
  )
}
