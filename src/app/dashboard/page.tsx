import { ReviewCard } from '@/components/ReviewCard'
import { PageTitle } from '@/components/PageTitle'
import { LinkNavigation } from '@/components/Link'
import { getServerSession } from 'next-auth'
import { api } from '@/lib/axios'
import { IBook, IReview } from '@/@types'
import { BookCard } from '@/components/BookCard'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { ChartLineUp } from '@/components/Icons'
import PopularBooks from './components/PopularBooks'

async function getRatedBooks() {
  const res = await api.get('/ratings')
  return res.data
}

async function getPopularBooks() {
  const res = await api.get('/books/popular')
  return res.data
}

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  const isLoggedIn = !!session?.user

  const ratedBooks: IReview[] = await getRatedBooks()
  const popularBooks: IBook[] = await getPopularBooks()

  const lastUserReview = ratedBooks.find(({ user }) => {
    return user.id === session?.user.id
  })

  return (
    <>
      <PageTitle>
        <ChartLineUp size={32} className="fill-green-100" /> Início
      </PageTitle>

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

        <PopularBooks books={popularBooks} />
      </div>
    </>
  )
}
