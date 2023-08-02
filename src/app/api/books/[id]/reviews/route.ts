import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const bookId = params.id

  const book = await prisma.rating.findMany({
    where: {
      book_id: bookId,
    },
    include: {
      user: true,
    },
  })

  const formattedBook = book.map((book) => {
    return {
      id: book.id,
      rate: book.rate,
      description: book.description,
      createdAt: book.created_at,
      user: {
        name: book.user.name,
        avatarUrl: book.user.avatar_url,
      },
    }
  })

  return NextResponse.json(formattedBook)
}
