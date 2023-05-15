import { pages } from '../pages'
import { Route } from 'react-router-dom'
import { WithRoutes } from './providers/WithRoutes'
import { WithSmoothScroll } from './providers/WithSmoothScroll'

const App = () => {
  return (
    <WithRoutes>
      {pages.map((page) => (
        <Route
          path={page.path}
          element={<WithSmoothScroll>{page.element}</WithSmoothScroll>}
          key={page.path}
        ></Route>
      ))}
    </WithRoutes>
  )
}

export default App
