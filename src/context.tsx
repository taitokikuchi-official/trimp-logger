import { useContext, createContext } from 'react'

export const ContextObject: any = createContext(null)

export const Context = () => {
  return useContext(ContextObject)
}