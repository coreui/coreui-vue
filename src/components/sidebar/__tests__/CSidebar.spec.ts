import { mount } from '@vue/test-utils'
import { CSidebar as Component } from '../../../index'

const ComponentName = 'CSidebar'

const defaultWrapper = mount(Component, {
  propsData: {
      
  },
  slots: {
    default: 'Default slot'
  },
})

const customWrapper = mount(Component, {
  propsData: {
    narrow: true,
    overlaid: true,
    position: 'fixed',
    selfHiding: 'lg',
    size: 'xl',
    unfoldable: true,
    visible: true,
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
    expect(defaultWrapper.classes('sidebar')).toBe(true)
    expect(customWrapper.classes('hide')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  }) 
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('sidebar')).toBe(true)

    expect(customWrapper.classes('sidebar-narrow')).toBe(true)
    expect(customWrapper.classes('sidebar-overlaid')).toBe(true)
    expect(customWrapper.classes('sidebar-fixed')).toBe(true)
    expect(customWrapper.classes('sidebar-self-hiding-lg')).toBe(true)
    expect(customWrapper.classes('sidebar-xl')).toBe(true)
    expect(customWrapper.classes('sidebar-narrow-unfoldable')).toBe(true)
    expect(customWrapper.classes('show')).toBe(true)
  })
})