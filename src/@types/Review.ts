import { Book } from './Book'
import { User } from './User'

export interface Review {
  id: string
  rate: number
  description: string
  createdAt: Date
  book: Book
  user: User
}
