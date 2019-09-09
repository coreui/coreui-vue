import { mount } from '@vue/test-utils'
import Component from '../CCarousel'
import CCarouselItem from '../CCarouselItem'

const item = {
  render (h) {
    return h(CCarouselItem, { props: { img: '../some-img' } });
  }
}

const ComponentName = 'CCarousel'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    interval: 3000,
    animate: true,
    indicators: true,
    arrows: true,
    indicatorClasses: 'c-carousel-indicators additional-class',
    height: '200'
  },
  slots: {
    default: [item, item, item]
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
  it('arrows are setting active item correctly', () => {
    const nextButton = customWrapper.find('.c-carousel-control-next')
    const prevButton = customWrapper.find('.c-carousel-control-prev')
    const nextArrowClick = () => nextButton.trigger('click')
    const prevArrowClick = () => prevButton.trigger('click')
    const active = () => customWrapper.vm.active

    prevArrowClick()
    expect(active()).toBe(2)

    nextArrowClick()
    expect(active()).toBe(0)

    nextArrowClick()
    expect(active()).toBe(1)

    prevArrowClick()
    expect(active()).toBe(0) 
  })
  it('correctly sets transition', () => {
    const nextButton = customWrapper.find('.c-carousel-control-next')
    const nextArrowClick = () => nextButton.trigger('click')
    customWrapper.setData({ waitingItem: null, transitioning: false })
    jest.useFakeTimers()

    nextArrowClick()
    setTimeout(() => {
      expect(customWrapper.vm.transitioning).toBe(false)
    }, 700)
    jest.runOnlyPendingTimers()

    expect(customWrapper.vm.transitioning).toBe(true)

    // console.log(customWrapper.vm.waitingItem)

    // setTimeout(() => expect(customWrapper.vm.transitioning).toBe(false), 11300) 
 
  })
  it('indicators are setting active item correctly', () => {
    const active = customWrapper.vm.active
    const activeIndicator = customWrapper.find('.c-carousel-indicators').find('.c-active')
    activeIndicator.trigger('click')
    expect(customWrapper.vm.active).toBe(active)
  })
  // it('switches active item automatically', () => {
  //   customWrapper.setData({ transitioning: false })
  //   console.log(customWrapper.vm)
  //   setTimeout(() => console.log(customWrapper.vm.active), 5000)  
  //   jest.runAllTimers()  
  // })
  it('destroys instance correctly', () => {
    customWrapper.destroy()
    expect(customWrapper.currentInterval).not.toBeTruthy()
  })
})
