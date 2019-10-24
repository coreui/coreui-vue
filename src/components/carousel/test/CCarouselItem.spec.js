import { mount } from '@vue/test-utils'
import Component from '../CCarouselItem'

const ComponentName = 'CCarouselItem'
const wrapper = mount(Component, {
  propsData: {
    image: { src: '../someImagePath' }
  }
})

const customWrapper = mount(Component, {
  propsData: {
    image: '../someImagePath',
    captionHeader: 'header',
    captionFooter: 'footer'
  },
  slots: {
    default: 'CCarouselItem'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
