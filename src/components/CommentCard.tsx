import { Comment } from '@/@types/Comment'
import { Avatar } from './Avatar'
import { RatingStars } from './RatingStars'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

dayjs.extend(relativeTime)

interface CommentCardProps {
  data: Comment
}

export function CommentCard({ data }: CommentCardProps) {
  const { description, user, rate, createdAt } = data

  const time = dayjs(createdAt).fromNow()

  return (
    <div className="flex flex-col gap-5 p-6 rounded-lg bg-gray-700">
      <header className="flex items-center gap-4">
        <Avatar alt={user.name} src={user.avatar_url} />

        <p className="flex-1 text-title-xs text-gray-100">
          {user.name} <br />
          <span className="text-gray-400 text-sm">{time}</span>
        </p>

        <RatingStars value={rate} maxWidth={152} />
      </header>

      <p className="text-gray-300 text-sm mt-5">{description}</p>
    </div>
  )
}
