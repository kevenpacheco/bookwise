import { X, Check } from '@/components/Icons'
import { Avatar } from './Avatar'
import { RatingStars } from './RatingStars'

export function CommentForm() {
  return (
    <form className="w-full p-6 flex flex-col gap-6 rounded-lg bg-gray-700">
      <header className="flex items-start gap-4">
        <Avatar />

        <p className="flex-1 text-title-xs text-gray-100">Brandon Botosh</p>

        <RatingStars maxWidth={152} readOnly={false} />
      </header>

      <div className="flex flex-col gap-3">
        <div className="relative flex">
          <textarea
            placeholder="Escreva sua avaliação"
            className=" resize-none w-full min-h-[164px] py-[14px] px-5 rounded border border-solid border-gray-500 bg-gray-800 text-gray-200 text-sm caret-green-100 placeholder:text-gray-400 focus:border-green-200"
          >
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit
            porta eget nec vitae sit vulputate eget
          </textarea>
          <span className="absolute bottom-1 right-2 text-[#7C7C8A] text-right text-xs">
            0/450
          </span>
        </div>

        <div className="flex gap-2 ml-auto">
          <button
            type="button"
            className="rounded p-2 inline-grid place-items-center bg-gray-600 enabled:hover:cursor-pointer enabled:hover:bg-gray-500 disabled:cursor-not-allowed"
          >
            <X size={24} className="fill-purple-100" />
          </button>
          <button
            type="button"
            className="rounded p-2 inline-grid place-items-center bg-gray-600 enabled:hover:cursor-pointer enabled:hover:bg-gray-500 disabled:cursor-not-allowed"
          >
            <Check size={24} className="fill-green-100" />
          </button>
        </div>
      </div>
    </form>
  )
}
