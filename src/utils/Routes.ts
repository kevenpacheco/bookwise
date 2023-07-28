import { Binoculars, ChartLineUp, User } from '@/components/Icons'

export const routes = [
  {
    pathname: '/',
    text: 'Início',
    icon: ChartLineUp,
  },
  {
    pathname: '/explore',
    text: 'Explorar',
    icon: Binoculars,
  },
  {
    pathname: '/profile',
    text: 'Perfil',
    icon: User,
  },
]
