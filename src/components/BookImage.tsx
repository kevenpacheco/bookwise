import Image from 'next/image'
import bookImg from '@/assets/book.png'
import { twMerge } from 'tailwind-merge'

interface BookImage {
  className?: string
}

export function BookImage({ className }: BookImage) {
  return (
    <div className={twMerge('w-full', className)}>
      <div className="relative pt-[calc(152/108*100%)] rounded overflow-hidden">
        <Image
          src={bookImg}
          alt="livro"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  )
}
