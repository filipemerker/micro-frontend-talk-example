import React, { createContext, useState } from 'react'

export const UserContext = createContext()
const { Provider } = UserContext

const initialState = {}

export const ContextProvider = (props) => {
  const [ user, setUser ] = useState(initialState)

  return <Provider value={[user, setUser]}>{props.children}</Provider>
}