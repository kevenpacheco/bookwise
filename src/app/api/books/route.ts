import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

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

  const session = await getServerSession(authOptions)
  let idOfBooksReadByUser: string[] = []

  if (session?.user.id) {
    const userRatings = await prisma.rating.findMany({
      where: {
        user_id: session.user.id,
      },
      select: {
        book_id: true,
      },
    })

    idOfBooksReadByUser = userRatings.map((book) => book.book_id)
  }

  const books = data.map((book) => {
    const categories = book.categories.map((category) => category.category.name)
    const ratingCount = book.ratings.length
    const averageRating =
      book.ratings.reduce((acc, { rate }) => rate + acc, 0) / ratingCount
    const wasRead = idOfBooksReadByUser.includes(book.id)

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
      wasRead,
    }
  })

  return NextResponse.json(books)
}
