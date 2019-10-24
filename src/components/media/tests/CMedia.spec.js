import { mount } from '@vue/test-utils'
import Component from '../CMedia'

const ComponentName = 'CMedia'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    addAsideMargin: false,
    addAsideClasses: 'additional-aside-class',
    addBodyClasses: 'additional-body-class',
    asideRight: true,
    asideVerticalPosition: 'stretch'
  },
  slots: {
    default: 'CMedia content'
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
})
