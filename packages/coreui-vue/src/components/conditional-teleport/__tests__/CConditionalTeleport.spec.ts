import { mount } from '@vue/test-utils'
import { CConditionalTeleport as Component } from '../../../index'

const ComponentName = 'CConditionalTeleport'

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })

  it('renders the slot inline when teleport is disabled', () => {
    const wrapper = mount(Component, {
      props: { teleport: false },
      slots: { default: '<span class="child">Inline</span>' },
    })
    expect(wrapper.find('.child').exists()).toBe(true)
    expect(wrapper.text()).toContain('Inline')
  })

  it('teleports the slot to the body by default', () => {
    mount(Component, {
      props: { container: document.body },
      slots: { default: '<span class="teleported">Teleported</span>' },
      attachTo: document.body,
    })
    expect(document.body.querySelector('.teleported')).not.toBeNull()
  })
})
