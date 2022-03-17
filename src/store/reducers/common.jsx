const commonState = {
  loginedRedirectUrl: '', // 登录完成后跳转地址
  loginedRedirectType: 'IN', // 登录完成后跳转的方式（项目内IN，项目外OUT）,默认为IN
}

export default function commonReducer(state = commonState, action) {
  switch(action.type) {
    case 'setCommonState':
      return { ...state, ...action.payload }
    default: 
      return state
  }
}