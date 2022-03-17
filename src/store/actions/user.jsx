export function setToken(data) {
  return async function(dispatch) {
    const token = await pr()
    dispatch({
      type: 'setUserState',
      payload: { 
        token: data
      }
    })
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

function pr() {
  return new Promise((resolve)=>{
    resolve('12321312nnbjdshnjda')
  })
}