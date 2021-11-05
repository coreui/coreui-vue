import { mount } from '@vue/test-utils'
import { CButton, CToastClose as Component } from '../../../index'

const ComponentName = 'CToastClose'

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
    component: CButton,
  },
  slots: {
    default: 'Default slot',
  },
  global: {
    provide: {
      updateVisible: function () {
        return true
      },
    },
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
    expect(defaultWrapper.classes('btn')).toBe(true)
    expect(defaultWrapper.classes('btn-close')).toBe(true)
  })
  it('event on click', () => {
    defaultWrapper.trigger('click')
    const incrementEvent = defaultWrapper.emitted('close')
    expect(incrementEvent).toHaveLength(1)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    //expect(customWrapper.classes('btn')).toBe(true)
  })
  it('event on click', () => {
    customWrapper.trigger('click')
    const incrementEvent = customWrapper.emitted('close')
    expect(incrementEvent).toHaveLength(1)
  })
})
