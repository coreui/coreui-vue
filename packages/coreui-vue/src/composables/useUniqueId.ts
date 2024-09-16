import { ref } from 'vue'

export const useUniqueId = (prefix: string = '') => {
  const ids = ref<string[]>([])

  const getUID = () => {
    do {
      prefix += Math.floor(Math.random() * 1_000_000)
    } while (ids.value.includes(prefix))

    ids.value.push(prefix)
    return prefix
  }

  return {
    getUID,
  }
}
