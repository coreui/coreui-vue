import { mount } from '@vue/test-utils'
import Component from '../CCarousel'

const ComponentName = 'CCarousel'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    interval: 3000,
    animate: true,
    indicators: true,
    arrows: true,
    indicatorClasses: 'c-carousel-indicators2',
    height: '200'
  },
  slots: {
    default: 'CCarouselItem components to render'
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
