import { mount } from '@vue/test-utils'
import { CFormControl as Component } from '../CFormControl'

const ComponentName = 'CFormControl'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    className: 'bazinga',
    component: 'input',
    disabled: true,
    plainText: true,
    readonly: true,
    size: 'lg',
    type: 'color',
  },
  slots: {
    default: 'Default slot',
  },
  attrs: {
    attrbazinga: 'attrbazinga',
  },
})

const customWrapperTwo = mount(Component, {
  propsData: {
    component: 'div',
    classNameParent: 'classNameParent',
  },
  slots: {
    default: 'Default slot',
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
    expect(defaultWrapper.classes('form-control')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('form-control-plaintext')).toBe(true)
    expect(customWrapper.classes('form-control-color')).toBe(true)
    expect(customWrapper.classes('bazinga')).toBe(true)
    expect(customWrapper.classes('form-control-lg')).toBe(true)
    expect(customWrapper.attributes('type')).toBe('color')
    expect(customWrapper.attributes('attrbazinga')).toBe('attrbazinga')
  })
})

describe(`Customize (number two) ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapperTwo.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapperTwo.text()).toContain('Default slot')
    expect(customWrapperTwo.classes('classNameParent')).toBe(true)
  })
})
