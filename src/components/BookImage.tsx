import Image, { ImageProps } from 'next/image'
import { twMerge } from 'tailwind-merge'

interface BookImage extends Omit<ImageProps, 'width'> {
  className?: string
}

export function BookImage({ className, src, alt, ...props }: BookImage) {
  return (
    <div className={twMerge('w-full', className)}>
      <div className="relative pt-[calc(152/108*100%)] rounded overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={108}
          height={152}
          className="absolute inset-0 w-full h-full"
          {...props}
        />
      </div>
    </div>
  )
}
