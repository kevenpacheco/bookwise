'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Avatar } from '@/components/Avatar'
import { SignIn, SignOut } from '@/components/Icons'
import { routes } from '@/utils/Routes'
import logoImg from '@/assets/logo.svg'
import { useSession } from 'next-auth/react'

export function AsideBar() {
  const router = useRouter()
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
          {routes.map(({ icon: Icon, pathname, text }) => {
            if (pathname === '/dashboard/profile' && !isLoggedIn) return null

            return (
              <li key={pathname} className="text-gray-400 py-2">
                <Link
                  href={pathname}
                  data-active={currentPathname === pathname}
                  className="flex items-center gap-3 font-bold hover:text-gray-300 before:content-[''] before:h-6 before:w-1 before:rounded-full data-[active=true]:text-gray-100 data-[active=true]:before:bg-vertical-gradient"
                >
                  <Icon size={24} /> {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {isLoggedIn ? (
        <button
          type="button"
          className="flex items-center gap-3 text-gray-200 font-bold"
        >
          <Avatar size="sm" />{' '}
          <span className="font-normal text-sm">Username</span>{' '}
          <SignOut size={20} className="fill-[#f75A68]" />
        </button>
      ) : (
        <Link
          href="/"
          className="flex items-center gap-3 text-gray-200 font-bold"
        >
          Fazer Login <SignIn size={20} className="fill-green-100" />
        </Link>
      )}
    </aside>
  )
}
