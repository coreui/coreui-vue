import { flushPromises, mount } from '@vue/test-utils'
import { CAlert } from '../../'

describe('CAlert', () => {
  describe('rendering', () => {
    it('should apply the color class', () => {
      const wrapper = mount(CAlert, { props: { color: 'primary' } })
      expect(wrapper.find('.alert').classes()).toContain('alert-primary')
    })

    it('should expose role="alert" for assistive technology', () => {
      const wrapper = mount(CAlert, { props: { color: 'primary' } })
      expect(wrapper.find('.alert').attributes('role')).toBe('alert')
    })

    it('should render its content', () => {
      const wrapper = mount(CAlert, {
        props: { color: 'primary' },
        slots: { default: 'Hello World!' },
      })
      expect(wrapper.text()).toContain('Hello World!')
    })

    it('should apply the solid variant classes', () => {
      const wrapper = mount(CAlert, { props: { color: 'secondary', variant: 'solid' } })
      expect(wrapper.find('.alert').classes()).toContain('bg-secondary')
      expect(wrapper.find('.alert').classes()).toContain('text-white')
    })

    it('should apply a custom class name', () => {
      const wrapper = mount(CAlert, {
        props: { color: 'primary' },
        attrs: { class: 'bazinga' },
      })
      expect(wrapper.find('.alert').classes()).toContain('bazinga')
    })
  })

  describe('close', () => {
    it('should render a close button', () => {
      const wrapper = mount(CAlert, { props: { color: 'primary', dismissible: true } })
      expect(wrapper.find('.alert').classes()).toContain('alert-dismissible')
      expect(wrapper.find('.btn-close').exists()).toBe(true)
    })

    it('should set a custom close button label', () => {
      const wrapper = mount(CAlert, {
        props: { color: 'primary', dismissible: true, ariaCloseLabel: 'Zamknij' },
      })
      expect(wrapper.find('.btn-close').attributes('aria-label')).toBe('Zamknij')
    })

    it('should close an alert', async () => {
      const wrapper = mount(CAlert, { props: { color: 'primary', dismissible: true } })
      await wrapper.find('.btn-close').trigger('click')
      expect(wrapper.emitted('close')).toHaveLength(1)
    })

    it('should emit closed after the transition', async () => {
      // <Transition> JS hooks are stubbed out by default and Vue schedules them
      // on an animation frame — disable the stub and run rAF synchronously.
      const raf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
        cb(0)
        return 0
      })
      const wrapper = mount(CAlert, {
        props: { color: 'primary', dismissible: true },
        global: { stubs: { transition: false } },
      })
      // let the appear transition finish before dismissing
      await new Promise((resolve) => setTimeout(resolve, 20))
      await flushPromises()

      await wrapper.find('.btn-close').trigger('click')
      await new Promise((resolve) => setTimeout(resolve, 20))
      await flushPromises()

      expect(wrapper.emitted('closed')).toHaveLength(1)
      raf.mockRestore()
    })
  })

  describe('transition', () => {
    it('should apply the fade class', () => {
      const wrapper = mount(CAlert, { props: { color: 'primary' } })
      expect(wrapper.find('.alert').classes()).toContain('fade')
    })

    it('should not apply the fade class when transition is disabled', () => {
      const wrapper = mount(CAlert, { props: { color: 'primary', transition: false } })
      expect(wrapper.find('.alert').classes()).not.toContain('fade')
    })
  })

  describe('visibility', () => {
    it('should not render when visible is false', () => {
      const wrapper = mount(CAlert, { props: { color: 'primary', visible: false } })
      expect(wrapper.find('.alert').exists()).toBe(false)
    })
  })
})
