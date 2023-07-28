import { Avatar } from './Avatar'
import { RatingStars } from './RatingStars'

export function CommentCard() {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-lg bg-gray-700">
      <header className="flex items-center gap-4">
        <Avatar />

        <p className="flex-1 text-title-xs text-gray-100">
          Brandon Botosh <br />
          <span className="text-gray-400 text-sm">Há 2 dias</span>
        </p>

        <RatingStars score={3.5} maxWidth={152} />
      </header>

      <p className="text-gray-300 text-sm mt-5">
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </div>
  )
}
