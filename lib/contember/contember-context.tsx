import { createContext, type PropsWithChildren, useContext } from 'react'

export type ContemberContextType = {
  isContember?: boolean
}

const ContemberContext = createContext<ContemberContextType>({
  isContember: false,
})

export const ContemberProvider = (
  props: PropsWithChildren<ContemberContextType>
) => {
  const { isContember, children } = props

  return (
    <ContemberContext.Provider value={{ isContember }}>
      {children}
    </ContemberContext.Provider>
  )
}

export const useContember = () => useContext(ContemberContext)
