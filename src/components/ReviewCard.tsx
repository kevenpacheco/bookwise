'use client'

import { useState } from 'react'
import { Avatar } from './Avatar'
import { BookImage } from './BookImage'
import { RatingStars } from './RatingStars'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IReview } from '@/@types/Review'
import Link from 'next/link'

dayjs.extend(relativeTime)

interface ReviewCardProps {
  data: IReview
}

export function ReviewCard({ data }: ReviewCardProps) {
  const { book, createdAt, description, rate, user } = data

  const maxChar = 229
  const [showFullDescription, setShowFullDescription] = useState(() => {
    return description.length <= maxChar
  })

  function handleShowFullDescription() {
    setShowFullDescription(true)
  }

  const time = dayjs(createdAt).fromNow()

  return (
    <div className="bg-gray-700 p-6 flex flex-col gap-8 rounded-lg">
      <header className="flex gap-4 items-start">
        <Link href={`/dashboard/profile/${user.id}`}>
          <Avatar alt={user.name} src={user.avatarUrl} />
        </Link>

        <div className="flex-1 flex flex-col text-gray-100">
          <Link href={`/dashboard/profile/${user.id}`}>{user.name}</Link>
          <span className="text-gray-400 text-sm">{time}</span>
        </div>

        <RatingStars value={rate} />
      </header>

      <div className="flex gap-5">
        <BookImage
          src={book.coverUrl}
          alt={book.name}
          className="max-w-[108px]"
        />

        <div className="flex-1">
          <h2 className="text-gray-100 mb-5">
            {book.name} <br />
            <span className="text-gray-400 text-sm">{book.author}</span>
          </h2>

          <div className="text-sm text-gray-300">
            {showFullDescription ? (
              description
            ) : (
              <>
                {description.substring(0, maxChar).padEnd(maxChar + 3, '...')}{' '}
                <button
                  type="button"
                  onClick={handleShowFullDescription}
                  className="text-purple-100 text-sm font-bold"
                >
                  ver mais
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
