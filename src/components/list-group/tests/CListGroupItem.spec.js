import { mount } from '@vue/test-utils'
import Component from '../CListGroupItem'

const ComponentName = 'CListGroupItem'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    tag: 'button',
    action: true,
    color: 'success',
    accent: 'success'
  },
  slots: {
    default: 'CListGroupItem content'
  }
})

const disabledWrapper = mount(Component, {
  propsData: {
    tag: 'button',
    disabled: true
  },
  attrs: {
    type: 'submit'
  },
  slots: {
    default: 'disabled CListGroupItem content'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('renders correctly disabled', () => {
    expect(disabledWrapper.element).toMatchSnapshot()
  })
})
