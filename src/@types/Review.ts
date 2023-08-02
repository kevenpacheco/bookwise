import { Book } from './Book'

export interface Review {
  id: string
  rate: number
  description: string
  createdAt: Date
  book: Pick<Book, 'name' | 'author' | 'coverUrl'>
  user: {
    name: string
    avatarUrl: string
  }
}
