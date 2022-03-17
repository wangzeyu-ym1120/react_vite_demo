export function setLoginedRedirectUrl(data) {
  return {
    type: 'setCommonState',
    payload: { 
      loginedRedirectUrl: data
    }
  }
}

export function clearRedirectOption() {
  return {
    type: 'setCommonState',
    payload: { 
      loginedRedirectUrl: '',
      loginedRedirectType: 'IN'
    }
  }
}