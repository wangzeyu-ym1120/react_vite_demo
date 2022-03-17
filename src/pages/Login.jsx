import { Button } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loginedRedirectUrl, loginedRedirectType } = useSelector(state => state.commonReducer)
  const doLogin = () => {
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