import Image from 'next/image'

import googleIcon from '@/assets/google.svg'
import githubIcon from '@/assets/github.svg'
import rocketIcon from '@/assets/rocket.svg'
import { ButtonHTMLAttributes, ReactNode } from 'react'

const LoginButtonMap = {
  google: googleIcon,
  github: githubIcon,
  rocket: rocketIcon,
}

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: keyof typeof LoginButtonMap
  children?: ReactNode
}

export function LoginButton({ icon, children, ...props }: LoginButtonProps) {
  const iconImage = icon ? LoginButtonMap[icon] : ''

  return (
    <button
      type="button"
      className="px-6 py-5 flex items-center gap-5 bg-gray-600 rounded-lg hover:bg-gray-500"
      {...props}
    >
      <Image src={iconImage} alt="" />
      {children}
    </button>
  )
}
