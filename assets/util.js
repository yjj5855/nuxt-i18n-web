

export function replaceRoute (vm, path) {
  if (vm.$i18n.locale === 'zh') {
    vm.$router.replace(path)
  } else {
    vm.$router.replace(`/${vm.$i18n.locale}${path}`)
  }
}

export function chooseLang (vm, command) {
  if (command === vm.$i18n.locale) {
    return
  }
  const fullPath = vm.$route.fullPath.replace(/^\/[^\/]+/, '')
  switch (command) {
    case 'zh':
      vm.$router.push(fullPath ? fullPath : '/')
      break
    default:
      let full = vm.$route.fullPath
      let paths = full.match(/^\/[^\/]+/)
      if (paths && paths.length > 0) {
        let path = paths[0].replace(/\//, '')
        if (vm.$store.state.locales.indexOf(path) >= 0) {
          vm.$router.push(`/${command}${fullPath}`)
        } else {
          vm.$router.push(`/${command}${full}`)
        }
      } else {
        vm.$router.push(`/${command}${fullPath}`)
      }
      break
  }
}

export function isMobile () {

}