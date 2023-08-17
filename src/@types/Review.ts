import { IBook } from './Book'
import { IUser } from './User'

export interface IReview {
  id: string
  rate: number
  description: string
  createdAt: Date
  book: IBook
  user: IUser
}
