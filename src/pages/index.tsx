import { PrivacyPolicy } from '../widgets/Screens/PrivacyPolicy/PrivacyPolicy/PrivacyPolicy'
import { Home } from './Home/Home'

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
