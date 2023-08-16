import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import { RatingStars } from '@/components/RatingStars'
import { BookOpen, BookmarkSimple, Books, UserList } from '@/components/Icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { api } from '@/lib/axios'
import { Review } from '@/@types/Review'
import { BookImage } from '@/components/BookImage'
import { User } from '@/@types/User'

dayjs.extend(relativeTime)

interface ProfileData extends User {
  pagesReadCount: number
  authorsReadCount: number
  mostReadCategory: string
  ratings: Omit<Review, 'user'>[]
}

interface ProfilePage {
  params: {
    userId: string
  }
}

export default async function Profile({ params }: ProfilePage) {
  const { userId } = params

  if (!userId) {
    return {
      redirect: '/dashboard',
    }
  }

  const { data: currentProfile } = await api.get<ProfileData>(
    `/users/${userId}`,
  )

  if (!currentProfile) {
    return {
      redirect: '/dashboard',
    }
  }

  const memberAt = dayjs(currentProfile.createdAt).get('y')

  return (
    <>
      <PageTitle />

      <div className="grid grid-cols-[1fr_308px] items-start gap-16">
        <div className="flex flex-col gap-8">
          <Input placeholder="Buscar livro avaliado" />

          <div className="flex flex-col gap-6">
            {currentProfile.ratings.map((rating) => {
              const howLong = dayjs(rating.createdAt).fromNow()

              return (
                <div key={rating.id} className="flex flex-col gap-2">
                  <span className="text-sm">{howLong}</span>
                  <div className="p-6 flex flex-col gap-6 rounded-lg bg-gray-700">
                    <div className="grid grid-cols-[98px_1fr] gap-6">
                      <BookImage
                        alt={rating.book.name}
                        src={rating.book.coverUrl}
                      />

                      <div className="flex flex-col justify-between px-1">
                        <h2 className="text-gray-100 text-title-sm">
                          {rating.book.name} <br />
                          <span className="text-gray-400 text-sm">
                            {rating.book.author}
                          </span>
                        </h2>

                        <RatingStars value={rating.rate} />
                      </div>
                    </div>

                    <p className="text-sm">{rating.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 rounded-[10px]">
          <Avatar
            size="lg"
            alt={currentProfile.name}
            src={currentProfile.avatarUrl}
          />

          <div className="flex flex-col items-center">
            <h1 className="mt-5 text-gray-100 text-center text-title-md">
              {currentProfile.name}
            </h1>
            <span className="text-gray-400 text-sm text-center">
              {`membro desde ${memberAt}`}
            </span>
          </div>

          <div className="w-8 h-1 rounded-full bg-horizontal-gradient my-8"></div>

          <div className="py-5 px-14 flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <BookOpen size={32} className="fill-green-100" />

              <div className="flex flex-col flex-1">
                <span className="text-gray-200 text-title-xs">
                  {currentProfile.pagesReadCount}
                </span>
                <span className="text-gray-300 text-sm">Páginas lidas</span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Books size={32} className="fill-green-100" />

              <div className="flex flex-col flex-1">
                <span className="text-gray-200 text-title-xs">
                  {currentProfile.ratings.length}
                </span>
                <span className="text-gray-300 text-sm">Livros avaliados</span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <UserList size={32} className="fill-green-100" />

              <div className="flex flex-col flex-1">
                <span className="text-gray-200 text-title-xs">
                  {currentProfile.authorsReadCount}
                </span>
                <span className="text-gray-300 text-sm">Atores lidos</span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <BookmarkSimple size={32} className="fill-green-100" />

              <div className="flex flex-col flex-1">
                <span className="text-gray-200 text-title-xs">Computação</span>
                <span className="text-gray-300 text-sm">
                  Categoria mais lida
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
