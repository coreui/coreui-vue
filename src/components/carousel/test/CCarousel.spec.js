import { mount } from '@vue/test-utils'
import Component from '../CCarousel'
import CCarouselItem from '../CCarouselItem'

// const props = Object.assign({}, CCarouselItem.props, { active: { default: true}})
// const item = Object.assign({}, CCarouselItem, { props })

const ComponentName = 'CCarousel'
const defaultWrapper = mount(Component)

const createWrapper = () => {
  return mount(Component, {
    propsData: {
      interval: 3000,
      animate: true,
      indicators: true,
      arrows: true,
      indicatorClasses: 'carousel-indicators additional-class',
      height: '200'
    },
    slots: {
      default: ['<CCarouselItem :active="true"/>', CCarouselItem, CCarouselItem]
    },
    stubs: {
      CCarouselItem
    }
  })
}

const customWrapper = createWrapper()
const customWrapper2 = createWrapper()


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
  it('arrows are setting active item correctly', (done) => {
    const nextButton = customWrapper.find('.carousel-control-next')
    const prevButton = customWrapper.find('.carousel-control-prev')
    const nextArrowClick = () => nextButton.trigger('click')
    const prevArrowClick = () => prevButton.trigger('click')
    const active = () => customWrapper.vm.active

    prevArrowClick()
    expect(active()).toBe(2)
    nextArrowClick()
    
    prevArrowClick()

    setTimeout(() => {
      expect(customWrapper.vm.activated).toBe(2) 
      done()
    }, 700)
  })
  it('correctly sets transition', () => {
    const nextButton = customWrapper.find('.carousel-control-next')
    const nextArrowClick = () => nextButton.trigger('click')

    jest.useFakeTimers()
    customWrapper.setData({ transitioning: false })

    nextArrowClick()
    expect(customWrapper.vm.transitioning).toBe(true)
  
    setTimeout(() => {
      expect(customWrapper.vm.transitioning).toBe(false)
    }, 700)
    jest.runOnlyPendingTimers()
 
  })

  it('switches active item automatically', () => {
    const previousActive = customWrapper.vm.active
    jest.useFakeTimers()  
    customWrapper.setData({ transitioning: false })
    setTimeout(() => expect(customWrapper.vm.active).not.toBe(previousActive), 5000)  
    jest.runOnlyPendingTimers()  
  })
  it('indicators are setting active item correctly', () => {
    expect(customWrapper2.vm.active).toBe(0)
    customWrapper2.findAll('li').at(0).trigger('click')
    expect(customWrapper2.vm.active).toBe(0)

    customWrapper2.findAll('li').at(1).trigger('click')
    expect(customWrapper2.vm.active).toBe(1)
  })
  it('destroys instance correctly', () => {
    customWrapper.destroy()
    expect(customWrapper.currentInterval).not.toBeTruthy()
  })
})
