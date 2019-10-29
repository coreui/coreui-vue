import { mount } from '@vue/test-utils'
import Component from '../CNav'
import CNavItem from '../CNavItem'


const ComponentName = 'CNav'
const wrapper = mount(Component, {
  propsData: {
    variant: 'tabs',
  },
  slots: {
    default: 'CNav items'
  }
})

// const disabledNavItem = { render(h) {
//   return h(CNavItem, { props: { disabled: true }  })
// }}

const customWrapper = mount(Component, {
  propsData: {
    fill: true,
    justified: true,
    variant: 'pills',
    vertical: true,
    inCard: true
  },
  slots: {
    default: [CNavItem, CNavItem, CNavItem, CNavItem]
  }
})
const items = customWrapper.findAll('.nav-item')

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('activate item on click', () => {
    const items = customWrapper.findAll('.nav-item')
    items.at(1).trigger('click')
    expect(items.at(1).vm.isActive).toBe(true)
  })
  it('activate item on click', () => {
    items.at(1).trigger('click')
    expect(items.at(1).vm.isActive).toBe(true)
    const third = items.at(3).vm

    items.at(3).setProps({ disabled: true })
    items.at(3).trigger('click')
    expect(items.at(3).vm.isActive).toBe(false)
  })
  // it('do not change state when clicked on disabled item', () => {

  // })
})
