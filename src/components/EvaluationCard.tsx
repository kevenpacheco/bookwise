'use client'

import { useState } from 'react'
import { Avatar } from './Avatar'
import { BookImage } from './BookImage'
import { RatingStars } from './RatingStars'

export function EvaluationCard() {
  const maxChar = 229
  const comment =
    'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibhADAWDA KEVEN'

  const [showFullComment, setShowFullComment] = useState(() => {
    return comment.length <= maxChar
  })

  function handleShowFullComment() {
    setShowFullComment(true)
  }

  return (
    <div className="bg-gray-700 p-6 flex flex-col gap-8 rounded-lg">
      <header className="flex gap-4 items-start">
        <Avatar />

        <p className="flex-1 text-gray-100">
          Jaxson Dias <br />
          <span className="text-gray-400 text-sm">Hoje</span>
        </p>

        <RatingStars score={2} />
      </header>

      <div className="flex gap-5">
        <BookImage className="max-w-[108px]" />

        <div className="flex-1">
          <h2 className="text-gray-100 mb-5">
            O Hobbit <br />
            <span className="text-gray-400 text-sm">J.R.R. Tolkien</span>
          </h2>

          <div className="text-sm text-gray-300">
            {showFullComment ? (
              comment
            ) : (
              <>
                {comment.substring(0, maxChar).padEnd(maxChar + 3, '...')}{' '}
                <button
                  type="button"
                  onClick={handleShowFullComment}
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
