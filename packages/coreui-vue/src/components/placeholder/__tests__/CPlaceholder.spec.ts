import { shallowMount } from '@vue/test-utils'
import { CPlaceholder as Component } from './../../'

const ComponentName = 'CPlaceholder'
const wrapper = shallowMount(Component)
const customWrapper = shallowMount(Component, {
  props: {
    animation: 'glow',
    color: 'secondary',
    size: 'lg',
    sm: 7,
  },
  attrs: {
    class: 'bazinga',
  },
  slots: {
    default: 'Hello World!',
  },
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly with slot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('has a prope class names', () => {
    expect(customWrapper.find('span').classes('bazinga')).toBe(true)
    expect(customWrapper.find('span').classes('bg-secondary')).toBe(true)
    expect(customWrapper.find('span').classes('col-sm-7')).toBe(true)
    expect(customWrapper.find('span').classes('placeholder-glow')).toBe(true)
    expect(customWrapper.find('span').classes('placeholder-lg')).toBe(true)
  })
  it('default slot contains text', () => {
    expect(customWrapper.text()).toBe('Hello World!')
  })
})
