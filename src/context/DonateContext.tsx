/* eslint-disable react-refresh/only-export-components -- context + hook colocation */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

interface DonateContextValue {
  isDonateOpen: boolean
  openDonate: () => void
  closeDonate: () => void
}

const DonateContext = createContext<DonateContextValue | null>(null)

export function DonateProvider({ children }: { children: ReactNode }) {
  const [isDonateOpen, setIsDonateOpen] = useState(false)
  const openDonate = useCallback(() => setIsDonateOpen(true), [])
  const closeDonate = useCallback(() => setIsDonateOpen(false), [])
  const value = useMemo(
    () => ({ isDonateOpen, openDonate, closeDonate }),
    [isDonateOpen, openDonate, closeDonate],
  )
  return <DonateContext.Provider value={value}>{children}</DonateContext.Provider>
}

export function useDonate() {
  const ctx = useContext(DonateContext)
  if (!ctx) throw new Error('useDonate must be used within DonateProvider')
  return ctx
}
