import { InputHTMLAttributes, ReactNode } from 'react'

interface TagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

export default function TagInput({ children, ...rest }: TagInputProps) {
  return (
    <label className="relative">
      <input
        className="peer absolute inset-0 invisible"
        type="checkbox"
        {...rest}
      />
      <span className="grid place-items-center py-1 px-4 rounded-full border border-solid border-purple-100 bg-transparent text-purple-100 text-center peer-checked:bg-purple-200 peer-checked:border-purple-200 peer-checked:text-gray-100 peer-hover:cursor-pointer peer-hover:bg-purple-200 peer-hover:border-purple-100 peer-hover:text-gray-100">
        {children}
      </span>
    </label>
  )
}
