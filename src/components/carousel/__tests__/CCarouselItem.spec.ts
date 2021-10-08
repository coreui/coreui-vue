import { mount } from '@vue/test-utils'
import { CCarouselItem as Component } from '../../../index'
import { nextTick } from 'vue'

const ComponentName = 'CCarouselItem'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    active: true,
    direction: 'prev',
  },
  slots: {
    default: 'Default slot',
  },
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(defaultWrapper.text()).toContain('Default slot')
    expect(defaultWrapper.classes('carousel-item')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('carousel-item')).toBe(true)
    expect(customWrapper.classes('active')).toBe(true)
    expect(customWrapper.classes('carousel-item-end')).toBe(false)
    expect(customWrapper.classes('carousel-item-prev')).toBe(false)
    customWrapper.setProps({
      active: false,
    })
    expect(customWrapper.classes('carousel-item')).toBe(true)
    expect(customWrapper.classes('active')).toBe(true)
    expect(customWrapper.classes('carousel-item-end')).toBe(false)
    expect(customWrapper.classes('carousel-item-prev')).toBe(false)
    nextTick()
    setTimeout(() => {
      expect(customWrapper.classes('carousel-item')).toBe(true)
      expect(customWrapper.classes('active')).toBe(true)
      expect(customWrapper.classes('carousel-item-end')).toBe(true)
      expect(customWrapper.classes('carousel-item-prev')).toBe(true)
    }, 2)
    customWrapper.setProps({
      active: true,
    })
    expect(customWrapper.classes('carousel-item')).toBe(true)
    expect(customWrapper.classes('active')).toBe(true)
    expect(customWrapper.classes('carousel-item-end')).toBe(false)
    expect(customWrapper.classes('carousel-item-prev')).toBe(false)
    nextTick()
    setTimeout(() => {
      expect(customWrapper.classes('carousel-item')).toBe(true)
      expect(customWrapper.classes('active')).toBe(true)
      expect(customWrapper.classes('carousel-item-end')).toBe(true)
      expect(customWrapper.classes('carousel-item-prev')).toBe(true)
    }, 2)
    //expect(customWrapper.classes('carousel-item-end')).toBe(true)
    //expect(customWrapper.classes('carousel-item-prev')).toBe(true)
  })
})
