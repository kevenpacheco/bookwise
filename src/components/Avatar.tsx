import Image, { ImageProps } from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

const avatarSizeMap = {
  lg: 72,
  md: 40,
  sm: 32,
}

const avatarVariants = tv({
  base: 'p-[1px] rounded-full bg-vertical-gradient',
  variants: {
    size: {
      lg: 'w-[72px] min-w-[72px] max-w-[72px] h-[72px] min-h-[72px] max-h-[72px]',
      md: 'w-[40px] min-w-[40px] max-w-[40px] h-[40px] min-h-[40px] max-h-[40px]',
      sm: 'w-[32px] min-w-[32px] max-w-[32px] h-[32px] min-h-[32px] max-h-[32px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface AvatarProp
  extends VariantProps<typeof avatarVariants>,
    Omit<ImageProps, 'src'> {
  src?: string | null
}

export function Avatar({ size = 'md', alt, src, ...props }: AvatarProp) {
  const sizeInPixels = avatarSizeMap[size]

  const fallbackText = alt
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('')
    .substring(0, 2)

  const randomBackgroundFallbackColor = `rgba(${Math.floor(
    Math.random() * 255,
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`

  return (
    <div className={avatarVariants({ size })}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={sizeInPixels}
          height={sizeInPixels}
          className="w-full h-full rounded-full"
          style={{
            objectFit: 'cover',
          }}
          {...props}
        />
      ) : (
        <div
          className={`bg-[${randomBackgroundFallbackColor}] h-full w-full text-center grid place-items-center`}
        >
          {fallbackText}
        </div>
      )}
    </div>
  )
}
