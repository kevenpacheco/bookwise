import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = await prisma.book.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: true,
    },
  })

  const books = data.map((book) => {
    const categories = book.categories.map((category) => category.category.name)
    const ratingCount = book.ratings.length
    const averageRating =
      book.ratings.reduce((acc, { rate }) => rate + acc, 0) / ratingCount

    return {
      id: book.id,
      name: book.name,
      author: book.author,
      coverUrl: book.cover_url,
      totalPages: book.total_pages,
      summary: book.summary,
      categories,
      ratingCount,
      averageRating,
    }
  })

  return NextResponse.json(books)
}
