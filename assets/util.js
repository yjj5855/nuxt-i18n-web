

export function replaceRoute (vm, path) {
  if (vm.$i18n.locale === 'zh') {
    vm.$router.replace(path)
  } else {
    vm.$router.replace(`/${vm.$i18n.locale}${path}`)
  }
}

export function isMobile () {

}