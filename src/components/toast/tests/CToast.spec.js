import { mount } from '@vue/test-utils'
import Component from '../CToast'

const ComponentName = 'CToast'
const wrapper = mount(Component, {
  propsData: {
    show: true,
    fade: false,
    position: 'static'
  }
})

const customWrapper = mount(Component, {
  propsData: {
    show: true,
    position: 'bottom-center',
    header: 'title',
    autohide: 1000,
    color: 'danger'
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
  it('renders correctly custom wrapper', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })

  it('closes by watcher correctly', () => {
    wrapper.setProps({ show: false })
    expect(wrapper.vm.isShowed).toBe(false)
  })
  // it('closes by close button correctly', () => {
  //   wrapper.find('.close').trigger('click')
  //   expect(wrapper.vm.isShowed).toBe(false)
  // })
  it('autohiding works correctly', (done) => {
    setTimeout(() => {
      customWrapper.find('div').trigger('mouseover')
      customWrapper.find('div').trigger('mouseout')
    }, 900)

    setTimeout(() => {
      expect(customWrapper.vm.isShowed).toBe(true)
    }, 1100)

    setTimeout(() => {
      expect(customWrapper.vm.closeTimeout).toBeTruthy()
      expect(customWrapper.vm.isShowed).toBe(false)
      customWrapper.vm.restoreHiddingToast()
      expect(customWrapper.vm.isShowed).toBe(true)
    }, 2000)

    setTimeout(() => {
      expect(customWrapper.emitted()['update:show']).toBeTruthy()
      done()
    }, 4600)


  })
    // it('closes by watcher correctly', () => {
    //   wrapper.vm.$nextTick(() => {
    //     wrapper.find('.close').trigger('click')
    //     expect(wrapper.vm.isShowed).toBe(false)
    //   })
    // })
})
