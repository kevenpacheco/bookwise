import { SelectedBookContext } from '@/contexts/SelectedBook'
import { useContext } from 'react'

export function useSelectedBook() {
  const context = useContext(SelectedBookContext)
  if (!context) {
    throw new Error('useSelectedBook must be used within a Provider')
  }
  return context
}
