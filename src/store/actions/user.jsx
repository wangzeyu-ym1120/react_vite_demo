export function setToken(data) {
  return {
    type: 'setUserState',
    payload: { 
      token: data
    }
  }
}

export function removeToken() {
  return {
    type: 'setUserState',
    payload: { 
      token: ''
    }
  }
}