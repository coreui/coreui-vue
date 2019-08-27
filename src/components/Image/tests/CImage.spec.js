import { mount } from '@vue/test-utils'
import Component from '../CImage'

const ComponentName = 'CImage'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    src: './image-source',
    alt: 'image',
    width: 400,
    height: 200,
    block: true,
    fluidGrow: true,
    rounded: 'right',
    // thumbnail: true,
    align: 'right',
    blankColor: 'red'
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
