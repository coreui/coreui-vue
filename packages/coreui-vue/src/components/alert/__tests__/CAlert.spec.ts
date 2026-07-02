import { mount } from '@vue/test-utils'
import { CAlert } from '../../'

describe('CAlert', () => {
  describe('rendering', () => {
    it('should apply the color class', () => {
      const wrapper = mount(CAlert, { props: { color: 'primary' } })
      expect(wrapper.find('.alert').classes()).toContain('alert-primary')
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

    it('should close an alert', async () => {
      const wrapper = mount(CAlert, { props: { color: 'primary', dismissible: true } })
      await wrapper.find('.btn-close').trigger('click')
      expect(wrapper.emitted('close')).toHaveLength(1)
    })
  })

  describe('visibility', () => {
    it('should not render when visible is false', () => {
      const wrapper = mount(CAlert, { props: { color: 'primary', visible: false } })
      expect(wrapper.find('.alert').exists()).toBe(false)
    })
  })
})
