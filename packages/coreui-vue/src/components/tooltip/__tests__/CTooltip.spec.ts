import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { CTooltip as Component } from '../../../index'

const ComponentName = 'CTooltip'

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })

  it('renders the toggler slot', () => {
    const wrapper = mount(Component, {
      slots: { toggler: () => h('button', 'Toggle') },
    })
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.text()).toContain('Toggle')
  })

  it('does not render the tooltip when hidden', () => {
    mount(Component, {
      props: { content: 'Hello' },
      slots: { toggler: () => h('button', 'Toggle') },
      attachTo: document.body,
    })
    expect(document.body.querySelector('.tooltip')).toBeNull()
  })

  it('renders the tooltip with content when visible', () => {
    const wrapper = mount(Component, {
      props: { content: 'Hello', visible: true },
      slots: { toggler: () => h('button', 'Toggle') },
      attachTo: document.body,
    })

    const tooltip = document.body.querySelector('.tooltip')
    expect(tooltip).not.toBeNull()
    expect(tooltip?.querySelector('.tooltip-inner')?.textContent).toBe('Hello')
    expect(tooltip?.getAttribute('role')).toBe('tooltip')

    wrapper.unmount()
  })
})
