import { mount } from '@vue/test-utils'
import { CAlertLink } from '../../'

describe('CAlertLink', () => {
  it('should render an alert link', () => {
    const wrapper = mount(CAlertLink)
    expect(wrapper.find('.alert-link').exists()).toBe(true)
    expect(wrapper.element.tagName).toBe('A')
  })

  it('should render its content', () => {
    const wrapper = mount(CAlertLink, { slots: { default: 'Hello World!' } })
    expect(wrapper.text()).toContain('Hello World!')
  })

  it('should apply a custom class name', () => {
    const wrapper = mount(CAlertLink, { attrs: { class: 'bazinga' } })
    expect(wrapper.find('.alert-link').classes()).toContain('bazinga')
  })
})
