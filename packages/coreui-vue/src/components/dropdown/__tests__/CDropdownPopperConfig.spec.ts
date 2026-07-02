import type { Mock } from 'vitest'
import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Options } from '@popperjs/core'
import { CDropdown, CDropdownMenu, CDropdownToggle } from '../../../index'

type PopperConfig = Partial<Options> | ((defaultPopperConfig: Partial<Options>) => Partial<Options>)

vi.mock('@popperjs/core', () => ({
  createPopper: vi.fn(() => ({
    destroy: vi.fn(),
    setOptions: vi.fn(),
    update: vi.fn(),
  })),
}))

const mockedCreatePopper = createPopper as Mock

const mountOpenDropdown = async (popperConfig: PopperConfig) => {
  const wrapper = mount(CDropdown, {
    props: { popperConfig },
    slots: {
      default: () => [h(CDropdownToggle, () => 'Toggle'), h(CDropdownMenu, () => 'Menu')],
    },
  })

  await nextTick()
  await wrapper.setProps({ visible: true })
  await nextTick()

  return wrapper
}

describe('CDropdown popperConfig', () => {
  beforeEach(() => mockedCreatePopper.mockClear())

  it('merges an object popperConfig over the default config', async () => {
    await mountOpenDropdown({ strategy: 'fixed' })

    expect(mockedCreatePopper).toHaveBeenCalled()
    const options = mockedCreatePopper.mock.calls[0][2]
    expect(options.strategy).toBe('fixed')
    expect(options.placement).toBeDefined()
    expect(options.modifiers).toBeDefined()
  })

  it('passes the default config to a function popperConfig and uses its result', async () => {
    const popperConfig = vi.fn((defaultConfig: Partial<Options>) => ({
      ...defaultConfig,
      strategy: 'fixed' as const,
    }))

    await mountOpenDropdown(popperConfig)

    expect(popperConfig).toHaveBeenCalledTimes(1)
    const defaultArg = popperConfig.mock.calls[0][0]
    expect(defaultArg.modifiers).toBeDefined()
    expect(defaultArg.placement).toBeDefined()

    const options = mockedCreatePopper.mock.calls[0][2]
    expect(options.strategy).toBe('fixed')
  })
})
