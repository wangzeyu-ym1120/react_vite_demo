const userState = {
  token: '' // 用户登录令牌
}

export default function userReducer(state = userState, action) {
  switch(action.type) {
    case 'setToken':
      return { ...state, ...action.payload }
    default: 
      return state
  }
}