import { Home } from './Home/Home'
import { PrivacyPolicy } from './PrivacyPolicy/PrivacyPolicy'

export const pages = [
  {
    title: 'Home',
    path: '/',
    element: <Home />,
    withPreloader: true,
  },
  {
    title: 'Privacy Policy',
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
    withPreloader: false,
  },
]
