import React, { useState } from 'react'
import { UserContext } from './UserContext'

const UserContextProvider = ({children}) => {
    const [Data, setData] = useState('')
  return (
    <UserContext.Provider value={{Data,setData}}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider