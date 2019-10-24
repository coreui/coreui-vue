import { mount } from '@vue/test-utils'
import Component from '../CToggler'

const ComponentName = 'CToggler'
const wrapper = mount(Component)

const wrapperNavbar = mount(Component, {
  propsData: {
    inNavbar: true
  },
  slots: {
    default: 'icon'
  }
})

const wrapperHeader = mount(Component, {
  propsData: {
    inHeader: true,
    tag: 'div'
  }
})

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly inNavbar', () => {
    expect(wrapperNavbar.element).toMatchSnapshot()
  })
  it('renders correctly inHeader', () => {
    expect(wrapperHeader.element).toMatchSnapshot()
  })
})
