import { mount } from '@vue/test-utils'
import { CDropdownToggle as Component } from '../../../index'
import { ref } from 'vue'
const ComponentName = 'CDropdownToggle'

const defaultWrapper = mount(Component, {
  propsData: {
    active: true,
    disabled: true,
    variant: 'outline',
    color: 'warning',
    size: 'lg',
    shape: 'rounded-pill',
    split: true,
  },
  slots: {
    default: 'Default slot',
  },
  global: {
    provide: {
      dropdownToggleRef: ref(),
      variant: 'input-group',
      visible: ref(true),
      toggleMenu: function () {
        return true
      },
    },
  },
})

const customWrapper = mount(Component, {
  propsData: {
    active: true,
    color: 'warning',
    caret: false,
    disabled: true,
    shape: 'rounded-pill',
    size: 'lg',
    split: true,
    variant: 'outline',
  },
  slots: {
    default: 'Default slot',
  },
  global: {
    provide: {
      dropdownToggleRef: ref(),
      variant: 'nav-item',
      visible: ref(true),
      toggleMenu: function () {
        return true
      },
    },
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
    expect(defaultWrapper.classes('btn')).toBe(true)
    expect(defaultWrapper.classes('dropdown-toggle')).toBe(true)
    expect(defaultWrapper.classes('show')).toBe(true)
    expect(defaultWrapper.classes('btn-outline-warning')).toBe(true)
    expect(defaultWrapper.classes('btn-lg')).toBe(true)
    expect(defaultWrapper.classes('rounded-pill')).toBe(true)
    expect(defaultWrapper.classes('active')).toBe(true)
    expect(defaultWrapper.classes('disabled')).toBe(true)
    expect(defaultWrapper.attributes('disabled')).toBe('')
    expect(defaultWrapper.find('span').classes('visually-hidden')).toBe(true)
    expect(defaultWrapper.find('span').text()).toContain('Toggle Dropdown')
  })
  /*
    TODO: Make this click test work
  it('check on click event', () => {
    expect(flag).toBe(false)
    defaultWrapper.trigger('click')
    expect(flag).toBe(true)
  })
  */
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('nav-link')).toBe(true)
    expect(customWrapper.classes('dropdown-toggle-split')).toBe(true)
    expect(customWrapper.classes('show')).toBe(true)
    expect(customWrapper.classes('active')).toBe(true)
    expect(customWrapper.classes('disabled')).toBe(true)
    expect(customWrapper.attributes('disabled')).toBe('true')
    expect(customWrapper.attributes('href')).toBe('#')
  })
})
