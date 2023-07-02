import { onBeforeMount, ref, watch } from 'vue'

const getStoredTheme = (localStorageItemName: string) =>
  typeof window !== 'undefined' && localStorage.getItem(localStorageItemName)

const setStoredTheme = (localStorageItemName: string, colorMode: string) =>
  localStorage.setItem(localStorageItemName, colorMode)

const getPreferredColorScheme = (localStorageItemName: string) => {
  if (typeof window === 'undefined') {
    return
  }

  const storedTheme = getStoredTheme(localStorageItemName)

  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = (colorMode: string) => {
  document.documentElement.dataset.coreuiTheme =
    colorMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : colorMode

  const event = new Event('ColorSchemeChange')
  document.documentElement.dispatchEvent(event)
}

export const useColorModes = (localStorageItemName = 'coreui-vue-color-scheme') => {
  const colorMode = ref(getPreferredColorScheme(localStorageItemName))

  watch(colorMode, () => {
    if (colorMode.value) {
      setStoredTheme(localStorageItemName, colorMode.value)
      setTheme(colorMode.value)
    }
  })

  onBeforeMount(() => {
    if (typeof getStoredTheme(localStorageItemName) === 'string' && colorMode.value) {
      setTheme(colorMode.value)
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme(localStorageItemName)
      if (storedTheme !== 'light' && storedTheme !== 'dark' && colorMode.value) {
        setTheme(colorMode.value)
      }
    })
  })

  return {
    colorMode,
    isColorModeSet: () => Boolean(getStoredTheme(localStorageItemName)),
    setColorMode: (mode: string) => {
      colorMode.value = mode
    },
  }
}
