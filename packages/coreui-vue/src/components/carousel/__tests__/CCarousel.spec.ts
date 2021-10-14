import { mount } from '@vue/test-utils'
import { CCarousel as Component } from '../../../index'
//import { CCarouselItem } from '../../../index'

// TODO: Add test with CCarouselItem inside CCarousel

const ComponentName = 'CCarousel'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {},
})

const customWrapper = mount(Component, {
  propsData: {
    controls: true,
    dark: true,
    index: 1,
    indicators: true,
    interval: 3000,
    transition: 'crossfade',
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
  it('contain slots and classes', () => {
    expect(defaultWrapper.classes('carousel')).toBe(true)
    expect(defaultWrapper.classes('slide')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('PreviousNext')
    expect(customWrapper.classes('carousel')).toBe(true)
    expect(customWrapper.classes('slide')).toBe(true)
    expect(customWrapper.classes('carousel-fade')).toBe(true)
    expect(customWrapper.classes('carousel-dark')).toBe(true)
  })
})
