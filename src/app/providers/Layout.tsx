import { FC, ReactNode, useContext, useEffect } from 'react'
import Header from '../../widgets/Header/Header'
import { Preloader } from '../../widgets/Preloader/Preloader'
import { MainContext } from './MainContext'

interface IProps {
  children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
  const { pageLoaded, setPageLoaded } = useContext(MainContext)

  useEffect(() => {
    !pageLoaded
      ? (document.body.style.overflow = `hidden`)
      : (document.body.style.overflow = `auto`)
  }, [pageLoaded])

  return (
    <>
      <Preloader />
      <Header />
      {children}
    </>
  )
}
