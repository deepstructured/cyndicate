import { pages } from '../pages'
import { Route } from 'react-router-dom'
import { WithRoutes } from './providers/WithRoutes'
import { WithSmoothScroll } from './providers/WithSmoothScroll'
import { Layout } from './providers/Layout'
import { MainContext } from './providers/MainContext'
import { useState } from 'react'

const App = () => {
  const [pageLoaded, setPageLoaded] = useState<boolean>(false)

  return (
    <MainContext.Provider
      value={{
        pageLoaded,
        setPageLoaded,
      }}
    >
      <WithRoutes>
        {pages.map((page) => (
          <Route
            path={page.path}
            element={
              <Layout>
                <WithSmoothScroll>{page.element}</WithSmoothScroll>
              </Layout>
            }
            key={page.path}
          ></Route>
        ))}
      </WithRoutes>
    </MainContext.Provider>
  )
}

export default App
