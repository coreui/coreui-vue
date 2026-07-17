import { ref } from 'vue'

export const useUniqueId = (prefix: string = '') => {
  const ids = ref<string[]>([])

  const getUID = () => {
    let uid: string
    do {
      uid = `${prefix}${Math.floor(Math.random() * 1_000_000)}`
    } while (ids.value.includes(uid))

    ids.value.push(uid)
    return uid
  }

  return {
    getUID,
  }
}
