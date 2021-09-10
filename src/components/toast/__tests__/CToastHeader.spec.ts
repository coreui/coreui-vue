import { mount } from '@vue/test-utils'
import { CToastHeader as Component } from '../../../index'

const ComponentName = 'CToastHeader'

const defaultWrapper = mount(Component, {
  propsData: {
      
  },
  slots: {
    default: 'Default slot'
  },
})

const customWrapper = mount(Component, {
  propsData: {
    close: true
  },
  slots: {
    default: 'Default slot'
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
  it('event on click close button', () => {             // TODO: CToastClose emiting "dismiss" but CToastHeader waiting for "onClose"
    customWrapper.find('.btn-close').trigger('click')
    const incrementEvent = customWrapper.emitted('close')
    expect(incrementEvent).toHaveLength(1)
  })
})