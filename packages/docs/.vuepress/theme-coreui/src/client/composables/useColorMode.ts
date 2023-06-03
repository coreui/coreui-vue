import { onMounted, ref, watch } from 'vue'
import type { Ref } from 'vue'

export const useColorMode = (): Ref<string> => {
  const storedTheme = ref()
  const theme = 'coreui-react-docs-theme'

  const getPreferredTheme = (storedTheme: string | undefined) => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = (theme: string) => {
    document.documentElement.dataset.coreuiTheme =
      theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : theme

    const event = new Event('ColorSchemeChange')
    document.documentElement.dispatchEvent(event)
    storedTheme.value = theme

    localStorage.setItem('coreui-react-docs-theme', theme)
  }

  onMounted(() => {
    if (typeof localStorage.getItem(theme) === 'string') {
      storedTheme.value = localStorage.getItem(theme)
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme.value !== 'light' || storedTheme.value !== 'dark') {
        setTheme(getPreferredTheme(storedTheme.value))
      }
    })

    if (typeof localStorage.getItem(theme) === 'string') {
      setTheme(localStorage.getItem(theme) as string)
    }

    watch(storedTheme, setTheme)
  })

  return storedTheme
}
