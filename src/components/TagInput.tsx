import { InputHTMLAttributes } from 'react'

type TagInputProps = InputHTMLAttributes<HTMLInputElement>

export default function TagInput({ value, ...rest }: TagInputProps) {
  return (
    <label className="relative wra">
      <input
        className="peer absolute inset-0 invisible"
        type="checkbox"
        value={value}
        {...rest}
      />
      <span className="grid place-items-center py-1 px-4 rounded-full border border-solid border-purple-100 bg-transparent text-purple-100 text-center whitespace-nowrap peer-checked:bg-purple-200 peer-checked:border-purple-200 peer-checked:text-gray-100 peer-hover:cursor-pointer peer-hover:bg-purple-200 peer-hover:border-purple-100 peer-hover:text-gray-100">
        {value}
      </span>
    </label>
  )
}
