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
    dots: false,
    arrows: false,
    doubleArrows: false
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
  it('emits update:activePage event when number of pages change', () => {
    customWrapper.setProps({ pages: 6 })
    expect(customWrapper.emitted()['update:activePage']).toBeTruthy()
  })
  it('emits update:activePage event when inactive item is clicked', () => {
    const links = defaultWrapper.findAll('.page-link')
    links.at(2).trigger('click')
    expect(defaultWrapper.emitted()['update:activePage']).not.toBeTruthy()

    links.at(4).trigger('click')
    expect(defaultWrapper.emitted()['update:activePage']).toBeTruthy()
  })
})
