import { mount } from '@vue/test-utils'
import Component from '../CPagination'

const ComponentName = 'CPagination'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    activePage: 9,
    pages: 20,
    size: 'lg',
    align: 'center',
    limit: 7,
    hideDots: true,
    hideArrows: true,
    hideDoubleArrows: true,
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
