import { mount } from '@vue/test-utils'
import { CImage as Component } from '../../../index'

const ComponentName = 'CImage'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {},
})

const customWrapper = mount(Component, {
  propsData: {
    align: 'end',
    fluid: true,
    rounded: true,
    thumbnail: true,
  },
  slots: {},
})

const customWrapperTwo = mount(Component, {
  propsData: {
    align: 'center',
  },
  slots: {},
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.html()).toMatchSnapshot()
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.classes('float-end')).toBe(true)
    expect(customWrapper.classes('img-fluid')).toBe(true)
    expect(customWrapper.classes('rounded')).toBe(true)
    expect(customWrapper.classes('img-thumbnail')).toBe(true)
  })
})

describe(`Customize (two) ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapperTwo.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapperTwo.classes('d-block')).toBe(true)
    expect(customWrapperTwo.classes('mx-auto')).toBe(true)
  })
})
