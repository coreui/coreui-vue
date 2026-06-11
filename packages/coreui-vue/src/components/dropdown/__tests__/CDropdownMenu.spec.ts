import { mount } from '@vue/test-utils'
import { CDropdownMenu as Component } from '../../../index'
import { ref } from 'vue'

const ComponentName = 'CDropdownMenu'

const config = {
  alignment: { lg: 'end' },
  dark: false,
  popper: true,
  teleport: false,
}

const customConfig = {
  alignment: { lg: 'end' },
  dark: true,
  popper: false,
  teleport: false,
}

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
  global: {
    provide: {
      config: config,
      dropdownMenuRef: ref(),
      visible: ref(false),
    },
  },
})

const customWrapper = mount(Component, {
  propsData: {
    as: 'ul',
  },
  slots: {
    default: 'Default slot',
  },
  global: {
    provide: {
      config: customConfig,
      dropdownMenuRef: ref(),
      visible: ref(true),
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
    expect(defaultWrapper.text()).toContain('Default slot')
    const menu = defaultWrapper.find('.dropdown-menu')
    expect(menu.classes('dropdown-menu')).toBe(true)
    expect(menu.attributes('data-coreui-theme')).toBeUndefined()
    expect(menu.classes('show')).toBe(false)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.find('li').text()).toContain('Default slot')
    const menu = customWrapper.find('.dropdown-menu')
    expect(menu.classes('dropdown-menu')).toBe(true)
    expect(menu.attributes('data-coreui-theme')).toBe('dark')
    expect(menu.classes('show')).toBe(true)
    expect(menu.attributes('data-coreui-popper')).toBe('static')
  })
})
