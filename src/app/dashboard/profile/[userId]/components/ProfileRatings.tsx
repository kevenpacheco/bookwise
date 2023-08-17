'use client'

import { IReview } from '@/@types/Review'
import { BookImage } from '@/components/BookImage'
import { Input } from '@/components/Input'
import { RatingStars } from '@/components/RatingStars'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useState } from 'react'

dayjs.extend(relativeTime)

interface IProfileRatingsProps {
  data: Omit<IReview, 'user'>[]
}

export function ProfileRatings({ data }: IProfileRatingsProps) {
  const [search, setSearch] = useState('')

  const ratingsInView = data
    .filter(({ book }) =>
      book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
    .sort((a, b) => {
      return dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
    })

  return (
    <div className="flex flex-col gap-8">
      <Input
        placeholder="Buscar livro avaliado"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex flex-col gap-6">
        {ratingsInView.map((rating) => {
          const howLong = dayjs(rating.createdAt).fromNow()

          return (
            <div key={rating.id} className="flex flex-col gap-2">
              <span className="text-sm">{howLong}</span>
              <div className="p-6 flex flex-col gap-6 rounded-lg bg-gray-700">
                <div className="grid grid-cols-[98px_1fr] gap-6">
                  <BookImage
                    alt={rating.book.name}
                    src={rating.book.coverUrl}
                  />

                  <div className="flex flex-col justify-between px-1">
                    <h2 className="text-gray-100 text-title-sm">
                      {rating.book.name} <br />
                      <span className="text-gray-400 text-sm">
                        {rating.book.author}
                      </span>
                    </h2>

                    <RatingStars value={rating.rate} />
                  </div>
                </div>

                <p className="text-sm">{rating.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
