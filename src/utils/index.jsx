export default {
  getUrlSearchProps() {
    let urlProp = {}
    let search = location.search
    search = search.substring(1)
    const props = search.split('&')
    for (let item of props) {
      const currentProp = item.split('=')
      urlProp[currentProp[0]] = currentProp[1]
    }
    return urlProp
  }
}