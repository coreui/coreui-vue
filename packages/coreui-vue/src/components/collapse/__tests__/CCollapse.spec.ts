import { mount } from '@vue/test-utils'
import { CCollapse as Component } from '../../../index'

const ComponentName = 'CCollapse'

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })

  it('renders correctly', () => {
    const wrapper = mount(Component, {
      slots: { default: 'Collapsed content' },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the default slot', () => {
    const wrapper = mount(Component, {
      slots: { default: 'Collapsed content' },
    })
    expect(wrapper.text()).toContain('Collapsed content')
  })

  it('is hidden by default', () => {
    const wrapper = mount(Component, {
      slots: { default: 'content' },
    })
    expect(wrapper.find('div').classes('collapse')).toBe(true)
    expect(wrapper.find('div').classes('show')).toBe(false)
  })

  it('is shown when visible is true', () => {
    const wrapper = mount(Component, {
      props: { visible: true },
      slots: { default: 'content' },
    })
    expect(wrapper.find('div').classes('show')).toBe(true)
  })

  it('applies the horizontal class', () => {
    const wrapper = mount(Component, {
      props: { horizontal: true },
      slots: { default: 'content' },
    })
    expect(wrapper.find('div').classes('collapse-horizontal')).toBe(true)
  })
})
