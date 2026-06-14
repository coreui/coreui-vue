import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { CFocusTrap as Component } from '../../../index'

const ComponentName = 'CFocusTrap'

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })

  it('renders the child element from the default slot', () => {
    const wrapper = mount(Component, {
      slots: { default: () => h('div', { class: 'trapped' }, 'Trapped') },
    })
    expect(wrapper.find('.trapped').exists()).toBe(true)
    expect(wrapper.text()).toContain('Trapped')
  })

  it('renders nothing when no slot content is provided', () => {
    const wrapper = mount(Component)
    expect(wrapper.html()).toBe('')
  })

  it('emits activate when mounted active', () => {
    const wrapper = mount(Component, {
      props: { active: true },
      slots: { default: () => h('button', 'Focusable') },
      attachTo: document.body,
    })
    expect(wrapper.emitted('activate')).toBeTruthy()
  })

  it('does not emit activate when inactive', () => {
    const wrapper = mount(Component, {
      props: { active: false },
      slots: { default: () => h('button', 'Focusable') },
      attachTo: document.body,
    })
    expect(wrapper.emitted('activate')).toBeFalsy()
  })
})
