import { FC, ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import Header from '../../widgets/Header/Header'
import Footer from '../../widgets/Footer/Footer'
import { MainContext } from './MainContext'
import { Menu } from '../../widgets/Menu/Menu'
import { useLocation } from 'react-router-dom'
import { WithScrollSmoother } from './WithScrollSmoother'
import { Cursor } from '../../shared/Cursor/Cursor'
import { Preloader } from '../../widgets/Preloader/Preloader'
import { Modal } from '../../shared/Popup/Modal'

interface IProps {
  children: ReactNode
  withPreloader: boolean
}

export const Layout: FC<IProps> = ({ children, withPreloader }) => {
  const [currentPage, setCurrentPage] = useState<string>('')
  const [pageLoaded, setPageLoaded] = useState<boolean>(
    withPreloader ? false : true
  )
  const [headerLoaded, setHeaderLoaded] = useState<boolean>(false)
  const [activeScreen, setActiveScreen] = useState<number>(0)
  const [direction, setDirection] = useState<string>('')
  const [menuActive, setMenuActive] = useState<boolean>(false)

  const [modalActive, setModalActive] = useState<boolean>(false)

  const [hash, setHash] = useState<string>('')

  const location = useLocation()

  if (location.hash && hash === '') {
    setHash(location.hash)
  }

  return (
    <MainContext.Provider
      value={{
        activeScreen,
        setActiveScreen,
        direction,
        setDirection,
        pageLoaded,
        setPageLoaded,
        menuActive,
        setMenuActive,
        currentPage,
        setCurrentPage,
        hash,
        setHash,
        modalActive,
        setModalActive,
        headerLoaded,
        setHeaderLoaded,
      }}
    >
      <Menu />
      <Modal
        title="Join Our Community"
        text="Receive Token & Product Launch Updates & News!"
        links={[
          {
            title: 'Instagram',
            link: 'https://www.instagram.com/cyndicate.io/',
            icon: '/images/Socials/1.svg',
          },
          {
            title: 'Discord',
            link: 'Cyndicate.io',
            icon: '/images/Socials/2.svg',
          },
          {
            title: 'Twitter',
            link: 'https://twitter.com/DAOCyndicate',
            icon: '/images/Socials/3.svg',
          },
        ]}
      />
      {withPreloader && <Preloader />}
      {window.innerWidth > 768 && <Cursor />}
      <Header />
      <WithScrollSmoother>
        {children}
        <Footer />
      </WithScrollSmoother>
    </MainContext.Provider>
  )
}
