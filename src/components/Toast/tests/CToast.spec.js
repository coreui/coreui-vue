import { mount } from '@vue/test-utils'
import Component from '../CToast'

const ComponentName = 'CToast'
const wrapper = mount(Component, {
  propsData: {
    show: true,
    noFade: true,
    position: 'static'
  }
})

const customWrapper = mount(Component, {
  propsData: {
    show: true,
    position: 'bottom-center',
    titleHtml: 'title',
    noHeader: false,
    autohide: 10,
    noCloseButton: false
  },
  slots: {
    default: 'CToast body'
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
  it('closes by watcher correctly', () => {
    wrapper.setProps({ show: false })
    wrapper.vm.$nextTick(() => expect(wrapper.vm.isShowed).toBe(false))
  })
  it('closes by watcher correctly', () => {
    wrapper.setProps({ show: false })
    expect(wrapper.vm.isShowed).toBe(false)
  })
  it('closes by close button correctly', () => {
    customWrapper.find('.close').trigger('click')
    expect(customWrapper.vm.isShowed).toBe(false)
  })
  it('autohiding works correctly', (done) => {
    customWrapper.vm.display()
    setTimeout(() => {
      customWrapper.trigger('mouseover')
      customWrapper.trigger('mouseout')
    }, 9)

    setTimeout(() => {
      expect(customWrapper.vm.isShowed).toBe(true)
    }, 18)

    setTimeout(() => {
      expect(customWrapper.vm.isShowed).toBe(false)
      customWrapper.trigger('mouseover')
      customWrapper.trigger('mouseout')
      expect(customWrapper.vm.isShowed).toBe(true)
      done()
    }, 25)
  })
  it('properly changes position', () => {
    const stylesIncludes = (string) => {
      return JSON.stringify(customWrapper.vm.computedStyles).includes(string)
    }

    customWrapper.setProps({ position: 'top-left'})
    expect(stylesIncludes('"top":0')).toBe(true)

    customWrapper.setProps({ position: 'top-full'})
    expect(stylesIncludes('"right":0,"left":0')).toBe(true)
  })
})
