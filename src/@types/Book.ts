export interface Book {
  id: string
  name: string
  author: string
  coverUrl: string
  totalPages: number
  categories: Array<string>
  ratingCount: number
  averageRating: number
}
