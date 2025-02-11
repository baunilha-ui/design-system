import { createContext, useContext } from 'react'

type DropdownContextType = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const DropdownContext = createContext({} as DropdownContextType)

type DropdownProviderProps = DropdownContextType & {
  children: React.ReactNode
}

export const DropdownProvider = ({
  children,
  ...rest
}: DropdownProviderProps) => {
  return (
    <DropdownContext.Provider value={{ ...rest }}>
      {children}
    </DropdownContext.Provider>
  )
}

export const useDropdown = () => {
  return useContext(DropdownContext)
}
