import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { MagnifyingGlass } from './Icons'

interface InputProps extends ComponentProps<'input'> {
  className?: string
}

export function Input({ className, ...props }: InputProps) {
  return (
    <label className="h-12 w-full px-[14px] flex items-center gap-8 rounded border border-solid group border-gray-500 overflow-hidden focus-within:border-green-200">
      <input
        className={twMerge(
          'h-full w-full bg-gray-800 text-gray-200 text-sm focus:outline-none caret-green-100 placeholder:text-gray-400',
          className,
        )}
        {...props}
      />
      <MagnifyingGlass className="w-5 max-w-5 min-w-5 h-5 max-h-5 min-h-5 fill-gray-500 leading-[0px] grid place-items-center group-focus-within:fill-green-200" />
    </label>
  )
}
