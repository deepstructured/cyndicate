import React, { useState } from 'react'
import { HomeContext } from '../../app/providers/HomeContext'
import { homeScreens } from '../../widgets/Screens'

export const Home = () => {
  const [formSent, setFormSent] = useState<boolean>(false)

  return (
    <HomeContext.Provider
      value={{
        formSent,
        setFormSent,
      }}
    >
      {homeScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </HomeContext.Provider>
  )
}
