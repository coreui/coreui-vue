import { mount } from '@vue/test-utils'
import Component from "../CButtonClose";

const ComponentName = 'CButtonClose'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  attrs: {
    class: 'test2',
    disabled: 'disabled',
    'aria-label': 'test2',
    style: 'color:red'
  },
  slots: {
    default: 'ok'
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
