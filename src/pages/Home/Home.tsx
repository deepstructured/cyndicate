import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { HomeContext } from '../../app/providers/HomeContext'
import { HomeScreens } from '../../widgets/Screens/Home'
import { WithFullpage } from '../../app/providers/WithFullpage'
import { MainContext } from '../../app/providers/MainContext'

export const Home = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('home')
  }, [])

  const {
    setActiveScreen,
    setDirection,
    activeScreen,
    setPlayerActive,
    playerActive,
    pageLoaded,
  } = useContext(MainContext)

  return (
    <HomeContext.Provider value={{}}>
      <WithFullpage
        fullpageOptions={{
          credits: {
            enabled: false,
          },
          scrollingSpeed: 1000,
          onLeave: (origin, destination, direction, trigger) => {
            setActiveScreen(destination.index)
            setDirection(direction)
          },
        }}
      >
        <>
          {HomeScreens.map((screen, idx) => (
            <React.Fragment key={idx}>{screen}</React.Fragment>
          ))}
        </>
      </WithFullpage>
    </HomeContext.Provider>
  )
}
