import { mount } from '@vue/test-utils'
import Component from '../CDropdown'

const ComponentName = 'CDropdown'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    togglerText: 'Dropdown button',
    show: true,
    disabled: true,
    addMenuClasses: 'additional-menu-class',
    addTogglerClasses: 'additional-toggler-class',
    nav: false,
    noCaret: true,
    variant: 'success',
    size: 'lg',
    split: true,
    offset: 20,
    placement: 'bottom-end',
    noFlip: true,
  },
  slots: {
    default: 'CDropdown subcomponents'
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
