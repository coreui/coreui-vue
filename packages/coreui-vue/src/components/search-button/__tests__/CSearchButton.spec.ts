import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { CSearchButton as Component } from '../../../index'

const ComponentName = 'CSearchButton'

const originalPlatform = window.navigator.platform

const mockMacOS = () =>
  Object.defineProperty(window.navigator, 'platform', {
    configurable: true,
    value: 'MacIntel',
  })

mockMacOS()

beforeEach(() => {
  mockMacOS()
})

afterEach(() => {
  Object.defineProperty(window.navigator, 'platform', {
    configurable: true,
    value: originalPlatform,
  })
})

describe(`Loads and display ${ComponentName} component`, () => {
  const wrapper = mount(Component)

  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('contain base class', () => {
    expect(wrapper.classes('search-button')).toBe(true)
  })
  it('emit click and trigger on click', () => {
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
    expect(wrapper.emitted('trigger')).toHaveLength(1)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  const wrapper = mount(Component, {
    propsData: {
      placeholder: 'Command palette',
      shortcut: 'meta+k,ctrl+k',
    },
    attrs: {
      class: 'bazinga',
    },
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('contain custom classes and placeholder', () => {
    expect(wrapper.classes('search-button')).toBe(true)
    expect(wrapper.classes('bazinga')).toBe(true)
    expect(wrapper.find('.search-button-placeholder').text()).toBe('Command palette')
  })
  it('renders the platform-preferred shortcut keys', () => {
    const keys = wrapper.findAll('.search-button-key').map((key) => key.text())
    expect(keys).toEqual(['⌘', 'K'])
  })
})

describe(`${ComponentName} keyboard behavior`, () => {
  it('emits trigger on matching shortcut but not click', async () => {
    const wrapper = mount(Component, {
      propsData: { shortcut: 'meta+k,ctrl+k' },
      attachTo: document.body,
    })

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
    await nextTick()

    expect(wrapper.emitted('trigger')).toHaveLength(1)
    expect(wrapper.emitted('click')).toBeUndefined()
    wrapper.unmount()
  })

  it('ignores plain typing in editable fields', async () => {
    const input = document.createElement('input')
    document.body.append(input)
    const wrapper = mount(Component, {
      propsData: { shortcut: 'k' },
      attachTo: document.body,
    })

    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', bubbles: true }))
    await nextTick()

    expect(wrapper.emitted('trigger')).toBeUndefined()
    wrapper.unmount()
    input.remove()
  })

  it('highlights active shortcut keys while pressed', async () => {
    const wrapper = mount(Component, {
      propsData: { shortcut: 'meta+k,ctrl+k' },
      attachTo: document.body,
    })

    const metaKey = () => wrapper.find('[data-coreui-search-button-key="⌘"]')
    const finalKey = () => wrapper.find('[data-coreui-search-button-key="K"]')

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Meta', metaKey: true }))
    await nextTick()
    expect(metaKey().classes('active')).toBe(true)

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
    await nextTick()
    expect(metaKey().classes('active')).toBe(true)
    expect(finalKey().classes('active')).toBe(true)

    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'k' }))
    await nextTick()
    expect(metaKey().classes('active')).toBe(false)
    expect(finalKey().classes('active')).toBe(false)

    wrapper.unmount()
  })
})
