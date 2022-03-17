const systemState = {
  system: null, // 系统类型
  type: null, // 平台类型
  thirdType: null, // 第三方类型
  thirdAppId: null, // 第三方appId
  aliminiFlag: false, // 支付宝小程序标识
  wxminiFlag: false // 微信小程序标识
}

export default function systemReducer(state = systemState, action) {
  switch(action.type) {
    case 'initSystemType':
      return { ...state, ...action.payload }
    default: 
      return state
  }
}