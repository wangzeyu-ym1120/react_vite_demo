import { Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loginedRedirectUrl, loginedRedirectType } = useSelector(state => state.common)
  const doLogin = () => {
    return new Promise(() => {
      dispatch({ type: 'setToken', payload: { token: 'sdbjadhj' } })
    
      if (!loginedRedirectUrl) {
        navigate(-1)
        return
      }

      if (loginedRedirectType === 'OUT') {
        window.location = loginedRedirectUrl
        return
      }

      navigate(loginedRedirectUrl, { replace: true })
    })
    .then(() => {
      dispatch({ type: 'clearRedirectOption' })
    })
  }
  
  return (
    <div>
      LOGIN PAGE
      <div>
        <Button color='primary' onClick={ doLogin }>LOGIN</Button>
      </div>
    </div>
  )
}