import { X } from '@phosphor-icons/react'
import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export function CloseButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...props}
      className={twMerge(
        'rounded p-2 inline-grid place-items-center fill-purple-100 cursor-pointer hover:bg-gray-500 disabled:cursor-not-allowed',
        props.className,
      )}
    >
      <X size={24} />
    </button>
  )
}
