import { User } from './User'

export interface Comment {
  id: string
  rate: number
  description: string
  createdAt: Date
  user: User
}
