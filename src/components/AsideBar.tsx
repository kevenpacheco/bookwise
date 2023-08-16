'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from '@/components/Avatar'
import logoImg from '@/assets/logo.svg'
import { signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@/components/Icons'

export function AsideBar() {
  const currentPathname = usePathname()
  const { data: session } = useSession()

  const isLoggedIn = !!session?.user

  return (
    <aside
      className="h-full px-12 pt-10 pb-6 flex flex-col rounded-xl bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(/aside-background.png)' }}
    >
      <Image src={logoImg} alt="" />

      <nav className="flex-1 mt-16">
        <ul className="flex flex-col gap-4">
          <li className="text-gray-400 py-2">
            <Link
              href="/dashboard"
              data-active={currentPathname === '/dashboard'}
              prefetch
              className="flex items-center gap-3 font-bold hover:text-gray-300 before:content-[''] before:h-6 before:w-1 before:rounded-full data-[active=true]:text-gray-100 data-[active=true]:before:bg-vertical-gradient"
            >
              <ChartLineUp size={24} /> Início
            </Link>
          </li>
          <li className="text-gray-400 py-2">
            <Link
              href="/dashboard/explore"
              data-active={currentPathname === '/dashboard/explore'}
              prefetch
              className="flex items-center gap-3 font-bold hover:text-gray-300 before:content-[''] before:h-6 before:w-1 before:rounded-full data-[active=true]:text-gray-100 data-[active=true]:before:bg-vertical-gradient"
            >
              <Binoculars size={24} /> Explorar
            </Link>
          </li>
          {isLoggedIn && (
            <li className="text-gray-400 py-2">
              <Link
                href={`/dashboard/profile/${session.user.id}`}
                data-active={currentPathname.startsWith('/dashboard/profile')}
                prefetch
                className="flex items-center gap-3 font-bold hover:text-gray-300 before:content-[''] before:h-6 before:w-1 before:rounded-full data-[active=true]:text-gray-100 data-[active=true]:before:bg-vertical-gradient"
              >
                <User size={24} /> Perfil
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {isLoggedIn ? (
        <button
          type="button"
          className="flex items-center gap-3 text-gray-200 font-bold"
          onClick={() => signOut()}
        >
          <Avatar
            size="sm"
            alt={session.user?.name || ''}
            src={session.user?.avatar_url}
          />{' '}
          <span className="font-normal text-sm">{session.user.name}</span>{' '}
          <SignOut size={20} className="fill-[#f75A68]" />
        </button>
      ) : (
        <Link
          href="/"
          prefetch
          className="flex items-center gap-3 text-gray-200 font-bold"
        >
          Fazer Login <SignIn size={20} className="fill-green-100" />
        </Link>
      )}
    </aside>
  )
}
