import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function doFilterRoute(routes) {
  const location = useLocation()
  const navigate = useNavigate()
  const token = useSelector(state => state.userReducer.token)

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
  }, [ location.pathname ])
}

export {
  doFilterRoute
}