import { mount } from '@vue/test-utils'
import Component from '../CSidebarNavItem'

const ComponentName = 'CSidebarNavItem'
const wrapper = mount(Component, {
  attachToDocument: true,
  propsData: {
    name: 'test link',
    icon: 'cui-settings',
    badge: {
      color: 'success',
      text: 'NEW'
    },
    color: 'success'
  },
  attrs: {
    id: 'link'
  }
})

const wrapperLabel = mount(Component, {
  attachToDocument: true,
  propsData: {
    name: 'test link',
    label: true,
    icon: { name: 'cui-settings' },
    badge: {
      color: 'success',
      text: 'NEW'
    }
  },
  attrs: {
    id: 'link'
  }
})

describe(`${ComponentName}.vue`, () => {
  it('has a name', () => {
    expect(Component.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly in label mode', () => {
    expect(wrapperLabel.element).toMatchSnapshot()
  })
  it('assign correct classes in case of custom icon size', () => {
    wrapperLabel.setProps({ icon: { name: 'cui-settings', size: 'lg' }})
    expect(wrapperLabel.find('svg').classes().join(',')).toBe(
      'c-icon,c-icon-lg,c-sidebar-nav-icon'
    )
  })
})