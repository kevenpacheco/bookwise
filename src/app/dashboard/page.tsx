import { ReviewCard } from '@/components/ReviewCard'
import { PageTitle } from '@/components/PageTitle'
import { BookCardSmall } from '@/components/BookCardSmall'
import { LinkNavigation } from '@/components/Link'
import { getServerSession } from 'next-auth'
import { api } from '@/lib/axios'
import { Book } from '@/@types/Book'
import { Review } from '@/@types/Review'
import { BookCard } from '@/components/BookCard'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  const isLoggedIn = !!session?.user

  const ratedBooks: Review[] = await api
    .get('/ratings')
    .then((resp) => resp.data)

  const popularBooks: Book[] = await api
    .get('/books/popular')
    .then((resp) => resp.data)

  const lastUserReview = ratedBooks.find(({ user }) => {
    return user.id === session?.user.id
  })

  return (
    <>
      <PageTitle />

      <div className="flex gap-16">
        <div className="flex-1">
          {isLoggedIn && lastUserReview && (
            <section className="mb-10">
              <div className="text-gray-100 text-sm flex items-center justify-between">
                Sua última leitura{' '}
                <LinkNavigation size="sm" href="/dashboard/explore" prefetch>
                  Ver todos
                </LinkNavigation>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <BookCard data={lastUserReview.book} />
              </div>
            </section>
          )}

          <section>
            <span className="text-gray-100 text-sm">
              Avaliações mais recentes
            </span>

            <div className="mt-4 flex flex-col gap-3">
              {ratedBooks.map((book) => {
                return <ReviewCard key={book.id} data={book} />
              })}
            </div>
          </section>
        </div>

        <section className="w-[324px]">
          <div className="text-gray-100 text-sm flex items-center justify-between">
            Livros populares
            <LinkNavigation size="sm" href="/dashboard/explore" prefetch>
              Ver todos
            </LinkNavigation>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {popularBooks.map((book) => {
              return (
                <BookCardSmall
                  key={book.id}
                  data={book}
                  className="grid-cols-[64px_1fr]"
                />
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}
