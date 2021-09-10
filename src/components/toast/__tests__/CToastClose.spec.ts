import { mount } from '@vue/test-utils'
import { CToastClose as Component } from '../../../index'

const ComponentName = 'CToastClose'

const defaultWrapper = mount(Component, {
  propsData: {
      
  },
  slots: {
    default: 'Default slot'
  },
  global: {
      provide: {
        updateVisible: function(){return true}
      }
  }
})

const customWrapper = mount(Component, {
  propsData: {
    component: 'CButton'
  },
  slots: {
    default: 'Default slot'
  },
  global: {
    provide: {
      updateVisible: function(){return true}
    }
}
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.html()).toMatchSnapshot()
  }) 
  it('contain slots and classes', () => {
    expect(defaultWrapper.classes('btn')).toBe(true)
    expect(defaultWrapper.classes('btn-close')).toBe(true)
  })
  it('event on click', () => {
    defaultWrapper.trigger('click')
    const incrementEvent = defaultWrapper.emitted('dismiss')
    expect(incrementEvent).toHaveLength(1)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  }) 
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    //expect(customWrapper.classes('btn')).toBe(true)
  })
  it('event on click', () => {
    customWrapper.trigger('click')
    const incrementEvent = customWrapper.emitted('dismiss')
    expect(incrementEvent).toHaveLength(1)
  })
})