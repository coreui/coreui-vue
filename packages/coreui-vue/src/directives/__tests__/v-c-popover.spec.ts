import type { Mock } from 'vitest'
import { mount } from '@vue/test-utils'
import { h, withDirectives } from 'vue'
import { createPopper } from '@popperjs/core'
import vCPopover from '../v-c-popover'

vi.mock('@popperjs/core', () => ({ createPopper: vi.fn() }))

const mockedCreatePopper = createPopper as Mock

const renderWithDirective = (value: unknown) =>
  mount(
    {
      render: () => withDirectives(h('button', 'Trigger'), [[vCPopover, value]]),
    },
    { attachTo: document.body }
  )

describe('v-c-popover directive', () => {
  afterEach(() => {
    document.body.querySelectorAll('.popover').forEach((el) => el.remove())
    mockedCreatePopper.mockClear()
  })

  it('creates a popover on click with header and content', async () => {
    const wrapper = renderWithDirective({ header: 'Title', content: 'Body', trigger: 'click' })
    await wrapper.find('button').trigger('click')

    const popover = document.body.querySelector('.popover')
    expect(popover).not.toBeNull()
    expect(popover?.querySelector('.popover-header')?.textContent).toBe('Title')
    expect(popover?.querySelector('.popover-body')?.textContent).toBe('Body')
    expect(mockedCreatePopper).toHaveBeenCalled()
  })

  it('accepts a plain string value as content', async () => {
    const wrapper = renderWithDirective('Just content')
    await wrapper.find('button').trigger('click')
    expect(document.body.querySelector('.popover-body')?.textContent).toBe('Just content')
  })

  it('toggles the popover off on a second click', async () => {
    const wrapper = renderWithDirective({ content: 'Body', trigger: 'click' })
    const button = wrapper.find('button')

    await button.trigger('click')
    const popover = document.body.querySelector('.popover')
    popover?.classList.add('show')

    await button.trigger('click')
    expect(document.body.querySelector('.popover')?.classList.contains('show')).toBe(false)
  })

  it('shows the popover on focus for the focus trigger', async () => {
    const wrapper = renderWithDirective({ content: 'Body', trigger: 'focus' })
    await wrapper.find('button').trigger('focus')
    expect(document.body.querySelector('.popover')).not.toBeNull()
  })

  it('removes the popover element on unmount', async () => {
    const wrapper = renderWithDirective({ content: 'Body', trigger: 'click' })
    await wrapper.find('button').trigger('click')
    expect(document.body.querySelector('.popover')).not.toBeNull()

    wrapper.unmount()
    expect(document.body.querySelector('.popover')).toBeNull()
  })

  it('does not inject markup from header or content (XSS)', async () => {
    const wrapper = renderWithDirective({
      header: '<img src=x onerror="window.__xss=1">',
      content: '<script>window.__xss=1</script>',
      trigger: 'click',
    })
    await wrapper.find('button').trigger('click')

    const popover = document.body.querySelector('.popover')
    expect(popover?.querySelector('img')).toBeNull()
    expect(popover?.querySelector('script')).toBeNull()
    expect(popover?.querySelector('.popover-header')?.textContent).toBe(
      '<img src=x onerror="window.__xss=1">'
    )
    expect(popover?.querySelector('.popover-body')?.textContent).toBe(
      '<script>window.__xss=1</script>'
    )
  })
})
