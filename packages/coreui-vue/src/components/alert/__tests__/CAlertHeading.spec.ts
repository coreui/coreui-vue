import { mount } from '@vue/test-utils'
import { CAlertHeading } from '../../'

describe('CAlertHeading', () => {
  it('should render an alert heading', () => {
    const wrapper = mount(CAlertHeading)
    expect(wrapper.find('.alert-heading').exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('H4')
  })

  it('should render its content', () => {
    const wrapper = mount(CAlertHeading, { slots: { default: 'Hello World!' } })
    expect(wrapper.text()).toContain('Hello World!')
  })

  it('should apply a custom class name', () => {
    const wrapper = mount(CAlertHeading, { attrs: { class: 'bazinga' } })
    expect(wrapper.find('.alert-heading').classes()).toContain('bazinga')
  })

  it('should render as a custom element', () => {
    const wrapper = mount(CAlertHeading, { props: { as: 'h2' } })
    expect(wrapper.element.tagName).toBe('H2')
  })
})
