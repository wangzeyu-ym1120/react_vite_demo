import Home from 'pages/Home'
import About from 'pages/About'
import Login from 'pages/Login'
import Default from 'pages/404'

export default[
  {
    path: '/',
    element: <Home />,
    meta: {
      loginAuth: true,
      thirdAuth: true
    }
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/about',
    element: <About />,
    meta: {
      loginAuth: true,
      thirdAuth: true
    }
  },
  {
    path: '/404',
    element: <Default />
  }
]