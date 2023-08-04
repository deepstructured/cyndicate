import React, { FC, ReactNode } from 'react'
import Header from '../../widgets/Header/Header'

interface IProps {
  children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
