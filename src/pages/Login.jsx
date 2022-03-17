import { Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from 'store/actions/user'
import { clearRedirectOption } from 'store/actions/common'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loginedRedirectUrl, loginedRedirectType } = useSelector(state => state.common)

  const doLogin = () => {
    return new Promise(() => {
      dispatch(setToken('dhauhdaiushau1232132dsad'))
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
      dispatch(clearRedirectOption())
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