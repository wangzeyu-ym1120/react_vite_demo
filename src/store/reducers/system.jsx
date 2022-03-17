const systemState = {
  system: '', // 系统类型
  type: '', // 平台类型
  thirdType: '', // 第三方应用类型
  thirdAppId: '', // 第三方应用appId
  aliminiFlag: false, // 支付宝小程序标识
  wxminiFlag: false // 微信小程序标识
}

export default function systemReducer(state = systemState, action) {
  switch(action.type) {
    case 'setSystemState':
      return { ...state, ...action.payload }
    default: 
      return state
  }
}