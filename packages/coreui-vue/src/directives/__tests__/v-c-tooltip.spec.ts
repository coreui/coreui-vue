import { mount } from '@vue/test-utils'
import { h, withDirectives } from 'vue'
import { createPopper } from '@popperjs/core'
import vCTooltip from '../v-c-tooltip'

jest.mock('@popperjs/core', () => ({ createPopper: jest.fn() }))

const mockedCreatePopper = createPopper as jest.Mock

const renderWithDirective = (value: unknown) =>
  mount(
    {
      render: () => withDirectives(h('button', 'Trigger'), [[vCTooltip, value]]),
    },
    { attachTo: document.body }
  )

describe('v-c-tooltip directive', () => {
  afterEach(() => {
    document.body.querySelectorAll('.tooltip').forEach((el) => el.remove())
    mockedCreatePopper.mockClear()
  })

  it('creates a tooltip on hover with content', async () => {
    const wrapper = renderWithDirective({ content: 'Hello', trigger: 'hover' })
    await wrapper.find('button').trigger('mouseenter')

    const tooltip = document.body.querySelector('.tooltip')
    expect(tooltip).not.toBeNull()
    expect(tooltip?.querySelector('.tooltip-inner')?.textContent).toBe('Hello')
    expect(tooltip?.getAttribute('role')).toBe('tooltip')
    expect(mockedCreatePopper).toHaveBeenCalled()
  })

  it('accepts a plain string value as content', async () => {
    const wrapper = renderWithDirective('Just content')
    await wrapper.find('button').trigger('mouseenter')
    expect(document.body.querySelector('.tooltip-inner')?.textContent).toBe('Just content')
  })

  it('hides the tooltip on mouseleave', async () => {
    const wrapper = renderWithDirective({ content: 'Hello', trigger: 'hover' })
    const button = wrapper.find('button')

    await button.trigger('mouseenter')
    document.body.querySelector('.tooltip')?.classList.add('show')

    await button.trigger('mouseleave')
    expect(document.body.querySelector('.tooltip')?.classList.contains('show')).toBe(false)
  })

  it('shows the tooltip on click for the click trigger', async () => {
    const wrapper = renderWithDirective({ content: 'Hello', trigger: 'click' })
    await wrapper.find('button').trigger('click')
    expect(document.body.querySelector('.tooltip')).not.toBeNull()
  })

  it('removes the tooltip element on unmount', async () => {
    const wrapper = renderWithDirective({ content: 'Hello', trigger: 'click' })
    await wrapper.find('button').trigger('click')
    expect(document.body.querySelector('.tooltip')).not.toBeNull()

    wrapper.unmount()
    expect(document.body.querySelector('.tooltip')).toBeNull()
  })
})
