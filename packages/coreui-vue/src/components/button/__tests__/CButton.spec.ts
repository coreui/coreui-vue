import { mount } from '@vue/test-utils'
import { CButton } from '../../'

describe('CButton', () => {
  describe('rendering', () => {
    it('should render a button with the base class', () => {
      const wrapper = mount(CButton)
      expect(wrapper.classes()).toContain('btn')
      expect(wrapper.element.tagName).toBe('BUTTON')
    })

    it('should render its content', () => {
      const wrapper = mount(CButton, { slots: { default: 'Hello World!' } })
      expect(wrapper.text()).toContain('Hello World!')
    })

    it('should apply the color class', () => {
      const wrapper = mount(CButton, { props: { color: 'primary' } })
      expect(wrapper.classes()).toContain('btn-primary')
    })

    it('should apply the variant class', () => {
      const wrapper = mount(CButton, { props: { color: 'warning', variant: 'outline' } })
      expect(wrapper.classes()).toContain('btn-outline-warning')
    })

    it('should apply the size class', () => {
      const wrapper = mount(CButton, { props: { size: 'lg' } })
      expect(wrapper.classes()).toContain('btn-lg')
    })

    it('should apply the shape class', () => {
      const wrapper = mount(CButton, { props: { shape: 'rounded-pill' } })
      expect(wrapper.classes()).toContain('rounded-pill')
    })

    it('should apply a custom class name', () => {
      const wrapper = mount(CButton, { attrs: { class: 'bazinga' } })
      expect(wrapper.classes()).toContain('bazinga')
    })
  })

  describe('states', () => {
    it('should apply the active class', () => {
      const wrapper = mount(CButton, { props: { active: true } })
      expect(wrapper.classes()).toContain('active')
    })

    it('should forward the aria-pressed attribute', () => {
      // toggle buttons opt in to aria-pressed themselves (it is not implied by active)
      const wrapper = mount(CButton, {
        props: { active: true },
        attrs: { 'aria-pressed': 'true' },
      })
      expect(wrapper.attributes('aria-pressed')).toBe('true')
    })

    it('should toggle the active state on click', async () => {
      const wrapper = mount(CButton, { props: { toggle: true } })
      expect(wrapper.classes()).not.toContain('active')
      expect(wrapper.attributes('aria-pressed')).toBe('false')
      await wrapper.trigger('click')
      expect(wrapper.classes()).toContain('active')
      expect(wrapper.attributes('aria-pressed')).toBe('true')
      await wrapper.trigger('click')
      expect(wrapper.classes()).not.toContain('active')
      expect(wrapper.attributes('aria-pressed')).toBe('false')
    })

    it('should seed the toggle state from the active prop', () => {
      const wrapper = mount(CButton, { props: { toggle: true, active: true } })
      expect(wrapper.classes()).toContain('active')
      expect(wrapper.attributes('aria-pressed')).toBe('true')
    })

    it('should prevent the default action on a toggle click', () => {
      const wrapper = mount(CButton, { props: { as: 'a', href: '#', toggle: true } })
      const event = new Event('click', { cancelable: true })
      wrapper.element.dispatchEvent(event)
      expect(event.defaultPrevented).toBe(true)
    })

    it('should be disabled', () => {
      const wrapper = mount(CButton, { props: { disabled: true } })
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('should emit a click event', async () => {
      const wrapper = mount(CButton)
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toHaveLength(1)
    })

    it('should not emit a click event when disabled', async () => {
      const wrapper = mount(CButton, { props: { disabled: true } })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })

  describe('element', () => {
    it('should set the button type', () => {
      const wrapper = mount(CButton)
      expect(wrapper.attributes('type')).toBe('button')
    })

    it('should render as a custom element', () => {
      const wrapper = mount(CButton, { props: { as: 'span' } })
      expect(wrapper.element.tagName).toBe('SPAN')
    })

    it('should render as an input with the button type', () => {
      const wrapper = mount(CButton, {
        props: { as: 'input', type: 'submit' },
        attrs: { value: 'Submit' },
      })
      expect(wrapper.element.tagName).toBe('INPUT')
      expect(wrapper.attributes('type')).toBe('submit')
    })

    it('should render as a link when href is set', () => {
      const wrapper = mount(CButton, { props: { href: '/test' } })
      expect(wrapper.element.tagName).toBe('A')
      expect(wrapper.attributes('href')).toBe('/test')
    })
  })
})
