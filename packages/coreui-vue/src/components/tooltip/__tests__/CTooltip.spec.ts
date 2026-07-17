import { flushPromises, mount } from '@vue/test-utils'
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

  it('is dismissed when the Escape key is pressed', async () => {
    const wrapper = mount(Component, {
      props: { content: 'Hello', trigger: 'hover' },
      slots: {
        toggler: (props: { id: string | null; on: Record<string, (event: Event) => void> }) =>
          h(
            'button',
            {
              'aria-describedby': props.id,
              onMouseenter: props.on.mouseenter,
              onMouseleave: props.on.mouseleave,
            },
            'Toggle'
          ),
      },
      attachTo: document.body,
    })

    const button = wrapper.find('button')
    await button.trigger('mouseenter')
    await new Promise((resolve) => setTimeout(resolve))
    await flushPromises()

    expect(button.attributes('aria-describedby')).toBeTruthy()

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await new Promise((resolve) => setTimeout(resolve))
    await flushPromises()

    expect(button.attributes('aria-describedby')).toBeUndefined()

    wrapper.unmount()
  })

  it('is not dismissed when a non-Escape key is pressed', async () => {
    const wrapper = mount(Component, {
      props: { content: 'Hello', trigger: 'hover' },
      slots: {
        toggler: (props: { id: string | null; on: Record<string, (event: Event) => void> }) =>
          h(
            'button',
            {
              'aria-describedby': props.id,
              onMouseenter: props.on.mouseenter,
              onMouseleave: props.on.mouseleave,
            },
            'Toggle'
          ),
      },
      attachTo: document.body,
    })

    const button = wrapper.find('button')
    await button.trigger('mouseenter')
    await new Promise((resolve) => setTimeout(resolve))
    await flushPromises()

    expect(button.attributes('aria-describedby')).toBeTruthy()

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    await new Promise((resolve) => setTimeout(resolve))
    await flushPromises()

    expect(button.attributes('aria-describedby')).toBeTruthy()

    wrapper.unmount()
  })
})
