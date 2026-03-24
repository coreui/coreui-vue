import { mount } from '@vue/test-utils'
import { CChip } from '../../../index'

describe('CChip', () => {
  it('has correct name', () => {
    expect(CChip.name).toBe('CChip')
  })

  it('renders with default props', () => {
    const wrapper = mount(CChip, {
      slots: {
        default: 'Test',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toBe('Test')
    expect(wrapper.classes()).toContain('chip')
  })

  it('renders with custom props', () => {
    const wrapper = mount(CChip, {
      props: {
        active: true,
        color: 'primary',
        size: 'lg',
        variant: 'outline',
        clickable: true,
        disabled: true,
      },
      slots: {
        default: 'Test',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.classes()).toContain('active')
    expect(wrapper.classes()).toContain('chip-primary')
    expect(wrapper.classes()).toContain('chip-lg')
    expect(wrapper.classes()).toContain('chip-outline')
    expect(wrapper.classes()).toContain('chip-clickable')
    expect(wrapper.classes()).toContain('disabled')
  })

  it('renders with as prop', () => {
    const wrapper = mount(CChip, {
      props: {
        as: 'button',
      },
      slots: {
        default: 'Button Chip',
      },
    })
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders removable chip with remove button', () => {
    const wrapper = mount(CChip, {
      props: {
        removable: true,
      },
      slots: {
        default: 'Test',
      },
    })
    const removeButton = wrapper.find('.chip-remove')
    expect(removeButton.exists()).toBe(true)
    expect(removeButton.attributes('aria-label')).toBe('Remove')
  })

  it('renders with custom ariaRemoveLabel', () => {
    const wrapper = mount(CChip, {
      props: {
        removable: true,
        ariaRemoveLabel: 'Delete chip',
      },
      slots: {
        default: 'Test',
      },
    })
    const removeButton = wrapper.find('.chip-remove')
    expect(removeButton.attributes('aria-label')).toBe('Delete chip')
  })

  it('emits remove event on remove button click', async () => {
    const wrapper = mount(CChip, {
      props: {
        removable: true,
      },
      slots: {
        default: 'Test',
      },
    })
    const removeButton = wrapper.find('.chip-remove')
    await removeButton.trigger('click')
    expect(wrapper.emitted('remove')).toBeTruthy()
    expect(wrapper.emitted('remove')?.[0]).toBeTruthy()
  })

  it('handles selectable state', async () => {
    const wrapper = mount(CChip, {
      props: {
        selectable: true,
      },
      slots: {
        default: 'Selectable',
      },
    })

    expect(wrapper.attributes('aria-selected')).toBe('false')
    expect(wrapper.classes()).not.toContain('active')

    await wrapper.trigger('click')

    // In uncontrolled mode, check events are emitted
    expect(wrapper.emitted('select')).toBeTruthy()
    expect(wrapper.emitted('selected-change')).toBeTruthy()
    expect(wrapper.emitted('selected-change')?.[0]).toEqual([true, expect.any(Object)])
  })

  it('handles controlled selected state', async () => {
    const wrapper = mount(CChip, {
      props: {
        selectable: true,
        selected: true,
      },
      slots: {
        default: 'Controlled',
      },
    })

    expect(wrapper.classes()).toContain('active')
    expect(wrapper.attributes('aria-selected')).toBe('true')

    await wrapper.trigger('click')

    expect(wrapper.emitted('deselect')).toBeTruthy()
    expect(wrapper.emitted('selected-change')?.[0]).toEqual([false, expect.any(Object)])
  })

  it('emits click event', async () => {
    const wrapper = mount(CChip, {
      slots: {
        default: 'Clickable',
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(CChip, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'Disabled',
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('has tabindex when focusable', () => {
    const wrapper = mount(CChip, {
      props: {
        selectable: true,
      },
      slots: {
        default: 'Focusable',
      },
    })
    expect(wrapper.attributes('tabindex')).toBe('0')
  })

  it('is focusable when removable or selectable', () => {
    const wrapper = mount(CChip, {
      props: {
        removable: true,
      },
      slots: {
        default: 'Focusable',
      },
    })
    expect(wrapper.attributes('tabindex')).toBe('0')
  })

  it('toggles selection on Enter key in controlled mode', async () => {
    let isSelected = false
    const wrapper = mount(CChip, {
      props: {
        selectable: true,
        selected: isSelected,
        'onUpdate:selected': (value: boolean) => {
          isSelected = value
        },
      },
      slots: {
        default: 'Keyboard',
      },
    })

    await wrapper.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('select')).toBeTruthy()
    expect(wrapper.emitted('selected-change')?.[0]).toEqual([true, expect.any(Object)])

    // Update the prop to reflect the change
    await wrapper.setProps({ selected: true })

    await wrapper.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('deselect')).toBeTruthy()
    expect(wrapper.emitted('selected-change')?.[1]).toEqual([false, expect.any(Object)])
  })

  it('toggles selection on Space key', async () => {
    const wrapper = mount(CChip, {
      props: {
        selectable: true,
      },
      slots: {
        default: 'Keyboard',
      },
    })

    await wrapper.trigger('keydown', { key: ' ' })
    expect(wrapper.emitted('select')).toBeTruthy()
  })

  it('emits remove on Delete key', async () => {
    const wrapper = mount(CChip, {
      props: {
        removable: true,
      },
      slots: {
        default: 'Removable',
      },
    })

    await wrapper.trigger('keydown', { key: 'Delete' })
    expect(wrapper.emitted('remove')).toBeTruthy()
  })

  it('emits remove on Backspace key', async () => {
    const wrapper = mount(CChip, {
      props: {
        removable: true,
      },
      slots: {
        default: 'Removable',
      },
    })

    await wrapper.trigger('keydown', { key: 'Backspace' })
    expect(wrapper.emitted('remove')).toBeTruthy()
  })

  it('emits keydown event', async () => {
    const wrapper = mount(CChip, {
      slots: {
        default: 'Test',
      },
    })

    await wrapper.trigger('keydown', { key: 'a' })
    expect(wrapper.emitted('keydown')).toBeTruthy()
  })

  it('has aria-disabled when disabled', () => {
    const wrapper = mount(CChip, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'Disabled',
      },
    })
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('does not toggle selection when disabled', async () => {
    const wrapper = mount(CChip, {
      props: {
        disabled: true,
        selectable: true,
      },
      slots: {
        default: 'Disabled',
      },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('select')).toBeFalsy()
    expect(wrapper.classes()).not.toContain('active')
  })

  it('renders with custom removeIcon', () => {
    const wrapper = mount(CChip, {
      props: {
        removable: true,
        removeIcon: 'X',
      },
      slots: {
        default: 'Custom Icon',
      },
    })
    const removeButton = wrapper.find('.chip-remove')
    expect(removeButton.text()).toBe('X')
  })

  it('applies clickable class when clickable prop is true', () => {
    const wrapper = mount(CChip, {
      props: {
        clickable: true,
      },
      slots: {
        default: 'Clickable',
      },
    })
    expect(wrapper.classes()).toContain('chip-clickable')
  })

  it('applies clickable class when selectable', () => {
    const wrapper = mount(CChip, {
      props: {
        selectable: true,
      },
      slots: {
        default: 'Selectable',
      },
    })
    expect(wrapper.classes()).toContain('chip-clickable')
  })

  it('applies size classes', () => {
    const wrapperSm = mount(CChip, {
      props: {
        size: 'sm',
      },
      slots: {
        default: 'Small',
      },
    })
    expect(wrapperSm.classes()).toContain('chip-sm')

    const wrapperLg = mount(CChip, {
      props: {
        size: 'lg',
      },
      slots: {
        default: 'Large',
      },
    })
    expect(wrapperLg.classes()).toContain('chip-lg')
  })

  it('applies color classes', () => {
    const wrapper = mount(CChip, {
      props: {
        color: 'success',
      },
      slots: {
        default: 'Success',
      },
    })
    expect(wrapper.classes()).toContain('chip-success')
  })
})
