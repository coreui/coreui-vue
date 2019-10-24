import { mount } from '@vue/test-utils'
import Component from '../CButtonClose'

const ComponentName = 'CButtonClose'
const defaultWrapper = mount(Component)
const slotWrapper = mount(Component, {
  slots: {
    default: 'slot'
  }
})
const customWrapper = mount(Component, {
  context: {
    props: {
      iconHtml: 'ok',
      buttonClasses: 'custom-class'
    }
  },
  attrs: {
    disabled: 'disabled',
    style: 'color:red'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly with custom iconHtml', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('renders correctly with slot', () => {
    expect(slotWrapper.element).toMatchSnapshot()
  })
})
