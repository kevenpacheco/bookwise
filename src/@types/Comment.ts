import { IUser } from './User'

export interface IComment {
  id: string
  rate: number
  description: string
  createdAt: Date
  user: IUser
}
