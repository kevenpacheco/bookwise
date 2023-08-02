export interface Comment {
  id: string
  rate: 4
  description: string
  createdAt: Date
  user: {
    name: string
    avatarUrl: string
  }
}
