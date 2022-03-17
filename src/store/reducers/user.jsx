const userState = {
  token: '', // 用户登录令牌
  thirdToken: ''
}

export default function userReducer(state = userState, action) {
  switch(action.type) {
    case 'setUserState':
      return { ...state, ...action.payload }
    default: 
      return state
  }
}