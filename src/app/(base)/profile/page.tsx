import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/Input'
import { PageTitle } from '@/components/PageTitle'
import { RatingStars } from '@/components/RatingStars'
import { BookOpen, BookmarkSimple, Books, UserList } from '@/components/Icons'

export default function Profile() {
  return (
    <>
      <PageTitle />

      <div className="grid grid-cols-[1fr_308px] items-start gap-16">
        <div className="flex flex-col gap-8">
          <Input placeholder="Buscar livro avaliado" />

          <div className="flex flex-col gap-6">
            {Array.from({ length: 7 }).map((_, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-sm">Há 2 dias</span>
                  <div className="p-6 flex flex-col items-start gap-6 rounded-lg bg-gray-700">
                    <div className="flex gap-6">
                      <div className="w-[98px] h-[134px] rounded bg-red-500">
                        Livro
                      </div>

                      <div className="flex flex-col justify-between items-center flex-1 px-1">
                        <h2 className="text-gray-100 text-title-sm">
                          O Hobbit <br />
                          <span className="text-gray-400 text-sm">
                            J.R.R. Tolkien
                          </span>
                        </h2>

                        <RatingStars score={6} />
                      </div>
                    </div>

                    <p className="text-sm">
                      Tristique massa sed enim lacinia odio. Congue ut faucibus
                      nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                      Vitae fringilla ut et suspendisse enim suspendisse vitae.
                      Leo non eget lacus sollicitudin tristique pretium quam.
                      Mollis et luctus amet sed convallis varius massa sagittis.
                      Proin sed proin at leo quis ac sem. Nam donec accumsan
                      curabitur amet tortor quam sit. Bibendum enim sit dui
                      lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut
                      turpis. Aliquam amet integer pellentesque.
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 rounded-[10px]">
          <Avatar size="lg" />

          <div className="flex flex-col items-center">
            <h1 className="mt-5 text-gray-100 text-center text-title-md">
              Cristofer Rosser
            </h1>
            <span className="text-gray-400 text-sm text-center">
              membro desde 2019
            </span>
          </div>

          <div className="w-8 h-1 rounded-full bg-horizontal-gradient my-8"></div>

          <div className="py-5 px-14 flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <BookOpen size={32} className="fill-green-100" />

              <div className="flex flex-col flex-1">
                <span className="text-gray-200 text-title-xs">3855</span>
                <span className="text-gray-300 text-sm">Páginas lidas</span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Books size={32} className="fill-green-100" />

              <div className="flex flex-col flex-1">
                <span className="text-gray-200 text-title-xs">10</span>
                <span className="text-gray-300 text-sm">Livros avaliados</span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <UserList size={32} className="fill-green-100" />

              <div className="flex flex-col flex-1">
                <span className="text-gray-200 text-title-xs">8</span>
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
