import { mount } from '@vue/test-utils'
import { CToastHeader as Component } from '../../../index'

const ComponentName = 'CToastHeader'

const updateVisible = (v: boolean) => {
  return v
}

const defaultWrapper = mount(Component, {
  global: {
    provide: {
      updateVisible: updateVisible,
    },
  },
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    closeButton: true,
  },
  slots: {
    default: 'Default slot',
  },
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(defaultWrapper.text()).toContain('Default slot')
    expect(defaultWrapper.classes('toast-header')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('toast-header')).toBe(true)
    expect(customWrapper.find('button').classes('btn')).toBe(true)
    expect(customWrapper.find('button').classes('btn-close')).toBe(true)
  })
})
