import { mount } from '@vue/test-utils'
import Component from '../CImgLazy'

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
};

const ComponentName = 'CImgLazy'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    src: 'https://coreui.io/images/favicons/favicon-32x32.png',
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

const notTriggeringEntry = [
  { intersectionRatio: 0 }  
]

const triggeringEntry = [
  { intersectionRatio: 0.1 }  
]

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
  it('properly executes loading watcher', () => {
    customWrapper.vm.watchForLoading(notTriggeringEntry)
    expect(customWrapper.vm.active).toBe(false)
    customWrapper.vm.watchForLoading(triggeringEntry)
    expect(customWrapper.vm.active).toBe(true)
  })
  it('queueing animation observer on loading watcher properly', () => {
    const spy = jest.spyOn(customWrapper.vm, 'queueAnimation')
    
    customWrapper.setProps({noFade: true})
    customWrapper.vm.watchForLoading(triggeringEntry)
    expect(spy).not.toBeCalled()

    customWrapper.setProps({noFade: false, fadeOffset: 600})
    customWrapper.vm.watchForLoading(triggeringEntry)
    customWrapper.vm.$nextTick(() => expect(spy).toBeCalled())
  })
  it('properly executes animation watcher', () => {
    const spy = jest.spyOn(customWrapper.vm, 'queueAnimation')
    spy.mockClear()
    customWrapper.vm.watchForAnimation(notTriggeringEntry)
    expect(spy).not.toBeCalled()
    

    customWrapper.vm.watchForAnimation(triggeringEntry)
    expect(spy).toBeCalled()
  })
  it('animation: do not animate until image is loaded', () => {
    customWrapper.vm.queueAnimation()
    expect(customWrapper.vm.animated).toBe(false)

    customWrapper.vm.$el.onload()
    expect(customWrapper.vm.animated).toBe(true)
  })
  it('animation: animate instantly when image is loaded', () => {
    Object.defineProperty(defaultWrapper.vm.$el, 'complete', {
      get: () => true
    })
    defaultWrapper.vm.queueAnimation()
    expect(defaultWrapper.vm.animated).toBe(true)
  })
  it('unobserve element when destroyed', () => {
    const spy = jest.spyOn(customWrapper.vm.observer, 'unobserve')
    expect(spy).not.toBeCalled()
    customWrapper.destroy()
    expect(spy).toBeCalled()
  })
})
