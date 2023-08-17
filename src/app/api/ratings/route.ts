import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = await prisma.rating.findMany({
    take: 10,
    orderBy: {
      created_at: 'asc',
    },
    include: {
      book: true,
      user: true,
    },
  })

  const recentReviews = data.map((review) => {
    return {
      id: review.id,
      rate: review.rate,
      description: review.description,
      createdAt: review.created_at,
      book: {
        name: review.book.name,
        author: review.book.author,
        coverUrl: review.book.cover_url,
      },
      user: {
        id: review.user.id,
        name: review.user.name,
        avatarUrl: review.user.avatar_url,
      },
    }
  })

  return NextResponse.json(recentReviews)
}
