import { pages } from '../pages'
import { Route } from 'react-router-dom'
import { WithRoutes } from './providers/WithRoutes'
import { WithSmoothScroll } from './providers/WithSmoothScroll'
import { Layout } from './providers/Layout'

const App = () => {
  return (
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
  )
}

export default App
