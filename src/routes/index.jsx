import Home from '../pages/Home'
import About from "@/pages/About"
import Default from "pages/404"
import Login from '@/pages/Login'

export default[
  {
    path: '/',
    element: <Home />,
    meta: {
      loginAuth: true
    }
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/404',
    element: <Default />
  }
]