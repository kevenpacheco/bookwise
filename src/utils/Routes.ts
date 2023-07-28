import { Binoculars, ChartLineUp, User } from '@/components/Icons'

export const routes = [
  {
    pathname: '/dashboard',
    text: 'Início',
    icon: ChartLineUp,
  },
  {
    pathname: '/dashboard/explore',
    text: 'Explorar',
    icon: Binoculars,
  },
  {
    pathname: '/dashboard/profile',
    text: 'Perfil',
    icon: User,
  },
]
