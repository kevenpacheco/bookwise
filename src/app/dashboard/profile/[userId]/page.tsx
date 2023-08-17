import { Avatar } from '@/components/Avatar'
import { BookOpen, BookmarkSimple, Books, UserList } from '@/components/Icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { api } from '@/lib/axios'
import { IUser, IReview } from '@/@types'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { ProfileHeader } from './components/ProfileHeader'
import { ProfileRatings } from './components/ProfileRatings'

dayjs.extend(relativeTime)

interface ProfileData extends IUser {
  pagesReadCount: number
  authorsReadCount: number
  mostReadCategory: string
  ratings: Omit<IReview, 'user'>[]
}

interface ProfilePage {
  params: {
    userId: string
  }
}

export default async function Profile({ params }: ProfilePage) {
  const { userId } = params

  const { data: currentProfile } = await api.get<ProfileData>(
    `/users/${userId}`,
  )

  if (!currentProfile) {
    return redirect('/dashboard')
  }

  const memberAt = dayjs(currentProfile.createdAt).get('y')

  const session = await getServerSession(authOptions)

  const hasUser = currentProfile.id === session?.user.id

  return (
    <>
      <ProfileHeader hasUser={hasUser} />

      <div className="grid grid-cols-[1fr_308px] items-start gap-16">
        <ProfileRatings data={currentProfile.ratings} />

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
                <span className="text-gray-200 text-title-xs">
                  {currentProfile.mostReadCategory}
                </span>
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
