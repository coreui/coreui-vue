import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { CPopover as Component } from '../../../index'

const ComponentName = 'CPopover'

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

  it('does not render the popover when hidden', () => {
    mount(Component, {
      props: { content: 'Body', title: 'Title' },
      slots: { toggler: () => h('button', 'Toggle') },
      attachTo: document.body,
    })
    expect(document.body.querySelector('.popover')).toBeNull()
  })

  it('renders the popover with title and content when visible', () => {
    const wrapper = mount(Component, {
      props: { content: 'Body', title: 'Title', visible: true },
      slots: { toggler: () => h('button', 'Toggle') },
      attachTo: document.body,
    })

    const popover = document.body.querySelector('.popover')
    expect(popover).not.toBeNull()
    expect(popover?.querySelector('.popover-header')?.textContent).toBe('Title')
    expect(popover?.querySelector('.popover-body')?.textContent).toBe('Body')

    wrapper.unmount()
  })
})
