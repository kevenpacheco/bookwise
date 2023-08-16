import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

interface Context {
  params: {
    bookId: string
  }
}

export async function GET(request: Request, { params }: Context) {
  const { bookId } = params

  const ratings = await prisma.rating.findMany({
    where: {
      book_id: bookId,
    },
    select: {
      id: true,
      rate: true,
      description: true,
      created_at: true,
      user: {
        select: {
          name: true,
          avatar_url: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  const formattedRatings = ratings.map((rating) => {
    const {
      created_at: createdAt,
      user: { avatar_url: avatarUrl, ...restUser },
      ...restRating
    } = rating

    return {
      ...restRating,
      createdAt,
      user: {
        ...restUser,
        avatarUrl,
      },
    }
  })

  return NextResponse.json(formattedRatings)
}

export async function POST(request: Request, { params }: Context) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json(null, { status: 401 })
  }

  const { rate, description }: { rate: number; description: string } =
    await request.json()

  if (!rate || !description) {
    return NextResponse.json(
      { message: 'Rate and description are required.' },
      { status: 400 },
    )
  }

  const { bookId } = params

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  })

  if (!book) {
    return NextResponse.json(
      { message: 'Book does not exist.' },
      { status: 400 },
    )
  }

  const newRating = await prisma.rating.create({
    data: {
      description,
      rate,
      book_id: bookId,
      user_id: session.user.id,
    },
    include: {
      user: true,
    },
  })

  const formattedRating = {
    id: newRating.id,
    rate: newRating.rate,
    description: newRating.description,
    createdAt: newRating.created_at,
    user: {
      name: newRating.user.name,
      avatarUrl: newRating.user.avatar_url,
    },
  }

  return NextResponse.json(formattedRating, { status: 201 })
}
