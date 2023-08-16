'use client'

import { X, Check } from '@/components/Icons'
import { Avatar } from './Avatar'
import { RatingStars } from './RatingStars'
import { useSession } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import { Comment } from '@/@types/Comment'

interface CommentFormProps {
  onCancel: () => void
  onConfirm: ({
    rate,
    description,
  }: Pick<Comment, 'description' | 'rate'>) => void
}

export function CommentForm({ onCancel, onConfirm }: CommentFormProps) {
  const { data: session } = useSession()
  const [rate, setRate] = useState(0)
  const [comment, setComment] = useState('')

  function handleConfirm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onConfirm({ rate, description: comment })
  }

  return (
    <form
      className="w-full p-6 flex flex-col gap-6 rounded-lg bg-gray-700"
      onSubmit={handleConfirm}
    >
      <header className="flex items-start gap-4">
        <Avatar alt={session?.user.name ?? ''} src={session?.user.avatar_url} />

        <p className="flex-1 text-title-xs text-gray-100">
          {session?.user.name}
        </p>

        <RatingStars
          maxWidth={152}
          readOnly={false}
          onChange={setRate}
          value={rate}
          isRequired
        />
      </header>

      <div className="flex flex-col gap-3">
        <div className="relative flex">
          <textarea
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
            placeholder="Escreva sua avaliação"
            className="resize-none w-full min-h-[164px] py-[14px] px-5 rounded border border-solid border-gray-500 bg-gray-800 text-gray-200 text-sm caret-green-100 placeholder:text-gray-400 focus:border-green-200"
          />
          <span className="absolute bottom-1 right-2 text-[#7C7C8A] text-right text-xs">
            0/450
          </span>
        </div>

        <div className="flex gap-2 ml-auto">
          <button
            type="button"
            onClick={onCancel}
            className="rounded p-2 inline-grid place-items-center bg-gray-600 enabled:hover:cursor-pointer enabled:hover:bg-gray-500 disabled:cursor-not-allowed"
          >
            <X size={24} className="fill-purple-100" />
          </button>
          <button
            type="submit"
            className="rounded p-2 inline-grid place-items-center bg-gray-600 enabled:hover:cursor-pointer enabled:hover:bg-gray-500 disabled:cursor-not-allowed"
          >
            <Check size={24} className="fill-green-100" />
          </button>
        </div>
      </div>
    </form>
  )
}
