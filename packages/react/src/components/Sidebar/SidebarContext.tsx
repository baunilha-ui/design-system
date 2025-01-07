'use client'
import { createContext, useCallback, useContext, useState } from 'react'

type SidebarContextType = {
  isOpen: boolean
  toggle: () => void
}

export const SidebarContext = createContext({} as SidebarContextType)

type SidebarProviderProps = {
  children: React.ReactNode
  initialState?: boolean
}

const SidebarProvider = ({
  children,
  initialState = false,
}: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState)

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <SidebarContext.Provider value={{ isOpen, toggle: handleToggle }}>
      {children}
    </SidebarContext.Provider>
  )
}

const useSidebar = () => {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }

  return context
}

export { SidebarProvider, useSidebar }
