import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import doFilterThird from './filterThird'
import { useLocation, useNavigate } from 'react-router-dom'

export default function doFilterRoute(routes) {
  const location = useLocation()
  const navigate = useNavigate()
  const state = useSelector(state => state)
  const { token } = state.user

  useEffect(() => {
    const findResult = routes.find(route => location.pathname === route.path)

    if (!findResult) {
      navigate('/404', { replace: true })
      return
    }

    if (findResult?.meta?.loginAuth && !token) {
      navigate('/login')
      return
    }

    const filterThirdResult = doFilterThird({ route: findResult, state })
    if (!filterThirdResult) {
      navigate('/404', { replace: true })
      return
    }
  }, [ location.pathname ])
}