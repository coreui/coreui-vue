import { mount } from '@vue/test-utils'
import Component from '../CRow'

const ComponentName = 'CRow'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    form: true,
    tag: 'header',
    gutters: false,
    alignVertical: 'center',
    alignHorizontal: 'start'
  },
  slots: {
    default: 'CRow content'
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
