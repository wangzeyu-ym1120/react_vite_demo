import utils from 'utils'

export default function doFilterThird({ route, state }) {
  const { thirdType } = state.system
  const { thirdToken } = state.user
  if (!route?.meta?.thirdAuth || thirdToken || !thirdType) {
    return true
  }

  if (thirdType === 'wx') {
    const authResult = doWxAuth()
    return authResult
  }

  if (thirdType === 'ali') {
    const authResult = doAliAuth()
    return authResult
  }

  return false
}

function doWxAuth() {
  const code = utils.getUrlSearchProps().code
  if (code) {
    return true
  }
}
function doAliAuth() {
  return true
}