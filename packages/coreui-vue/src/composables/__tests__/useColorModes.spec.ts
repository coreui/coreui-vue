import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { useColorModes } from '../useColorModes'

const setupEnv = () => {
  const addEventListener = vi.fn()
  const removeEventListener = vi.fn()
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockReturnValue({ matches: false, addEventListener, removeEventListener })
  )
  const store: Record<string, string> = {}
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => (key in store ? store[key] : null),
    setItem: (key: string, value: string) => {
      store[key] = String(value)
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      for (const key of Object.keys(store)) {
        delete store[key]
      }
    },
  })
  return { addEventListener, removeEventListener }
}

const Host = defineComponent({
  setup() {
    useColorModes('test-color-scheme')
    return () => null
  },
})

afterEach(() => vi.unstubAllGlobals())

describe('useColorModes', () => {
  it('removes the matchMedia listener when the component unmounts', () => {
    const { addEventListener, removeEventListener } = setupEnv()

    const wrapper = mount(Host)

    expect(addEventListener).toHaveBeenCalledTimes(1)
    const handler = addEventListener.mock.calls[0][1]

    wrapper.unmount()

    expect(removeEventListener).toHaveBeenCalledWith('change', handler)
  })
})
