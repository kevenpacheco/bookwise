import Link, { LinkProps } from 'next/link'
import { CaretRight } from './Icons'
import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const linkNavigation = tv({
  base: 'rounded py-1 px-2 inline-flex items-center text-purple-100 text-center font-bold hover:bg-[rgba(131,129,217,0.06)]',
  variants: {
    size: {
      md: 'gap-3',
      sm: 'gap-2 text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface LinkNavigationProps
  extends LinkProps,
    VariantProps<typeof linkNavigation> {
  children: ReactNode
  className?: string
}

export function LinkNavigation({
  children,
  className,
  ...props
}: LinkNavigationProps) {
  return (
    <Link className={linkNavigation({ className })} {...props}>
      {children}
      <CaretRight
        size={props.size === 'sm' ? 16 : 20}
        className="fill-purple-100"
      />
    </Link>
  )
}
