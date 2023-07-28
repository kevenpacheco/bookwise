import { ComponentProps } from 'react'
import { Check, List, X } from './Icons'
import { twMerge } from 'tailwind-merge'

const ActionButtonVariants = {
  close: X,
  confirm: Check,
  menu: List,
}

interface ActionButtonProps extends ComponentProps<'button'> {
  variant?: keyof typeof ActionButtonVariants
}

export function ActionButton({
  className,
  variant = 'close',
  ...props
}: ActionButtonProps) {
  const Icon = ActionButtonVariants[variant]

  return (
    <button
      type="button"
      className={twMerge(
        'rounded p-2 inline-grid place-items-center bg-gray-600 enabled:hover:cursor-pointer enabled:hover:bg-gray-500 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      <Icon size={24} className="fill-purple-100" />
    </button>
  )
}
