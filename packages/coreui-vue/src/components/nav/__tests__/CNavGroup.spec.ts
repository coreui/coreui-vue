import { mount } from '@vue/test-utils'
import { CNavGroup as Component } from '../../../index'

const ComponentName = 'CNavGroup'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {},
})

const customWrapper = mount(Component, {
  propsData: {
    compact: true,
    visible: true,
  },
  slots: {
    togglerContent: 'togglerContent',
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
    expect(defaultWrapper.classes('nav-group')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.find('a').text()).toContain('togglerContent')
    expect(customWrapper.find('a').classes('nav-link')).toBe(true)
    expect(customWrapper.find('a').classes('nav-group-toggle')).toBe(true)
    expect(customWrapper.find('a').attributes('aria-expanded')).toBe('true')
    expect(customWrapper.find('ul').classes('nav-group-items')).toBe(true)
    expect(customWrapper.find('ul').classes('compact')).toBe(true)
    expect(customWrapper.classes('nav-group')).toBe(true)
  })
})

describe(`${ComponentName} uncontrolled mode`, () => {
  it('toggles its own visibility and emits on actual change', async () => {
    const wrapper = mount(Component, {
      slots: { togglerContent: 'togglerContent' },
    })

    expect(wrapper.find('.nav-group-items').exists()).toBe(false)
    expect(wrapper.emitted('visible-change')).toBeUndefined()

    await wrapper.find('.nav-group-toggle').trigger('click')

    expect(wrapper.find('.nav-group-items').exists()).toBe(true)
    expect(wrapper.emitted('update:visible')).toEqual([[true]])
    expect(wrapper.emitted('visible-change')).toEqual([[true]])

    await wrapper.find('.nav-group-toggle').trigger('click')

    expect(wrapper.find('.nav-group-items').exists()).toBe(false)
    expect(wrapper.emitted('update:visible')).toEqual([[true], [false]])
    expect(wrapper.emitted('visible-change')).toEqual([[true], [false]])
  })

  it('does not emit visible-change on mount', () => {
    const wrapper = mount(Component, {
      slots: { togglerContent: 'togglerContent' },
    })

    expect(wrapper.emitted('visible-change')).toBeUndefined()
  })
})

describe(`${ComponentName} controlled mode`, () => {
  it('keeps the group open when the parent rejects the collapse (#313)', async () => {
    const wrapper = mount(Component, {
      propsData: { visible: true },
      slots: { togglerContent: 'togglerContent' },
    })

    expect(wrapper.find('.nav-group-items').exists()).toBe(true)

    // Parent keeps `visible` at `true` (rejects the collapse).
    await wrapper.find('.nav-group-toggle').trigger('click')

    // Intent is emitted, but internal state is not mutated.
    expect(wrapper.emitted('update:visible')).toEqual([[false]])
    expect(wrapper.emitted('visible-change')).toBeUndefined()
    expect(wrapper.find('.nav-group-items').exists()).toBe(true)
    expect(wrapper.classes('show')).toBe(true)
  })

  it('follows the prop and emits visible-change when the parent accepts (v-model)', async () => {
    const wrapper = mount(Component, {
      propsData: { visible: true },
      slots: { togglerContent: 'togglerContent' },
    })

    await wrapper.find('.nav-group-toggle').trigger('click')
    expect(wrapper.emitted('update:visible')).toEqual([[false]])

    // Parent updates the prop in response (v-model).
    await wrapper.setProps({ visible: false })

    expect(wrapper.emitted('visible-change')).toEqual([[false]])
    expect(wrapper.find('.nav-group-items').exists()).toBe(false)
  })
})
