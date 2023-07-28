import { EvaluationCard } from '@/components/EvaluationCard'
import { BookCard } from '@/components/BookCard'
import { PageTitle } from '@/components/PageTitle'
import { BookCardSmall } from '@/components/BookCardSmall'
import { LinkNavigation } from '@/components/Link'
import { getServerSession } from 'next-auth'

export default async function Dashboard() {
  const session = await getServerSession()
  const isLoggedIn = !!session?.user

  return (
    <>
      <PageTitle />

      <div className="flex gap-16">
        <div className="flex-1">
          {isLoggedIn && (
            <section className="mb-10">
              <div className="text-gray-100 text-sm flex items-center justify-between">
                Sua última leitura{' '}
                <LinkNavigation size="sm" href="#">
                  Ver todos
                </LinkNavigation>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <BookCard />
              </div>
            </section>
          )}

          <section>
            <span className="text-gray-100 text-sm">
              Avaliações mais recentes
            </span>

            <div className="mt-4 flex flex-col gap-3">
              <EvaluationCard />
              <EvaluationCard />
              <EvaluationCard />
              <EvaluationCard />
              <EvaluationCard />
              <EvaluationCard />
              <EvaluationCard />
            </div>
          </section>
        </div>

        <section className="w-[324px]">
          <div className="text-gray-100 text-sm flex items-center justify-between">
            Livros populares
            <LinkNavigation size="sm" href="#">
              Ver todos
            </LinkNavigation>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <BookCardSmall className="grid-cols-[64px_1fr]" />
          </div>
        </section>
      </div>
    </>
  )
}
