import { mount } from '@vue/test-utils'
import { h, withDirectives } from 'vue'
import vCPlaceholder from '../v-c-placeholder'

const renderWithDirective = (value: Record<string, unknown>) =>
  mount({
    render: () => withDirectives(h('span'), [[vCPlaceholder, value]]),
  })

describe('v-c-placeholder directive', () => {
  it('adds the base placeholder class', () => {
    const wrapper = renderWithDirective({})
    expect(wrapper.find('span').classes('placeholder')).toBe(true)
  })

  it('uses the animation variant when provided', () => {
    const wrapper = renderWithDirective({ animation: 'glow' })
    expect(wrapper.find('span').classes('placeholder-glow')).toBe(true)
    expect(wrapper.find('span').classes('placeholder')).toBe(false)
  })

  it('adds responsive column classes from numeric breakpoints', () => {
    const wrapper = renderWithDirective({ xs: 6, md: 4 })
    const classes = wrapper.find('span').classes()
    expect(classes).toContain('col-6')
    expect(classes).toContain('col-md-4')
  })

  it('adds auto column classes from boolean breakpoints', () => {
    const wrapper = renderWithDirective({ lg: true })
    expect(wrapper.find('span').classes()).toContain('col-lg')
  })
})
