import { mount } from '@vue/test-utils'
import { CChipInput } from '../../../index'

describe('CChipInput', () => {
  it('has correct name', () => {
    expect(CChipInput.name).toBe('CChipInput')
  })

  it('renders correctly', () => {
    const wrapper = mount(CChipInput)
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.classes()).toContain('chip-input')
  })

  it('renders with initial defaultValue', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        defaultValue: ['test1', 'test2'],
      },
    })
    await wrapper.vm.$nextTick()
    const chips = wrapper.findAll('.chip')
    expect(chips.length).toBe(2)
    expect(chips[0].text()).toBe('test1')
    expect(chips[1].text()).toBe('test2')
  })

  it('renders with controlled modelValue', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        modelValue: ['chip1', 'chip2', 'chip3'],
      },
    })
    await wrapper.vm.$nextTick()
    const chips = wrapper.findAll('.chip')
    expect(chips.length).toBe(3)
  })

  it('creates chip on Enter key', async () => {
    const wrapper = mount(CChipInput)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('newchip')
    await input.trigger('keydown', { key: 'Enter' })

    expect(wrapper.emitted('add')?.[0]).toEqual(['newchip'])
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['newchip']])
    expect(wrapper.emitted('change')?.[0]).toEqual([['newchip']])
    expect((input.element as HTMLInputElement).value).toBe('')
  })

  it('creates chips on separator', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        separator: ',',
      },
    })
    const input = wrapper.find('input[type="text"]')

    await input.setValue('one,two,three')

    expect(wrapper.emitted('add')?.length).toBe(2)
    expect(wrapper.emitted('add')?.[0]).toEqual(['one'])
    expect(wrapper.emitted('add')?.[1]).toEqual(['two'])
    expect((input.element as HTMLInputElement).value).toBe('three')
  })

  it('respects maxChips limit', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        maxChips: 2,
        modelValue: ['one', 'two'],
      },
    })
    const input = wrapper.find('input[type="text"]')

    await input.setValue('three')
    await input.trigger('keydown', { key: 'Enter' })

    expect(wrapper.emitted('add')).toBeFalsy()
    expect((input.element as HTMLInputElement).value).toBe('three')
  })

  it('removes chip on remove button click', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        modelValue: ['test'],
        removable: true,
      },
    })

    const removeBtn = wrapper.find('.chip-remove')
    await removeBtn.trigger('click')

    expect(wrapper.emitted('remove')?.[0]).toEqual(['test'])
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[]])
  })

  it('does not allow duplicate values', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        modelValue: ['existing'],
      },
    })
    const input = wrapper.find('input[type="text"]')

    await input.setValue('existing')
    await input.trigger('keydown', { key: 'Enter' })

    expect(wrapper.emitted('add')).toBeFalsy()
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('trims and filters empty values', async () => {
    const wrapper = mount(CChipInput)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('  ')
    await input.trigger('keydown', { key: 'Enter' })

    expect(wrapper.emitted('add')).toBeFalsy()
  })

  it('creates chip on blur when createOnBlur is true', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        createOnBlur: true,
      },
    })
    const input = wrapper.find('input[type="text"]')

    await input.setValue('onblur')
    await input.trigger('blur')

    expect(wrapper.emitted('add')?.[0]).toEqual(['onblur'])
  })

  it('does not create chip on blur when createOnBlur is false', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        createOnBlur: false,
      },
    })
    const input = wrapper.find('input[type="text"]')

    await input.setValue('noblur')
    await input.trigger('blur')

    expect(wrapper.emitted('add')).toBeFalsy()
  })

  it('renders with label', () => {
    const wrapper = mount(CChipInput, {
      props: {
        label: 'Tags',
        id: 'tags-input',
      },
    })
    const label = wrapper.find('label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('Tags')
    expect(label.attributes('for')).toBe('tags-input')
  })

  it('renders with placeholder', () => {
    const wrapper = mount(CChipInput, {
      props: {
        placeholder: 'Enter tags',
      },
    })
    const input = wrapper.find('input[type="text"]')
    expect(input.attributes('placeholder')).toBe('Enter tags')
  })

  it('renders hidden input for form submission', () => {
    const wrapper = mount(CChipInput, {
      props: {
        name: 'tags',
        modelValue: ['tag1', 'tag2'],
      },
    })
    const hiddenInput = wrapper.find('input[type="hidden"]')
    expect(hiddenInput.exists()).toBe(true)
    expect(hiddenInput.attributes('name')).toBe('tags')
    expect(hiddenInput.attributes('value')).toBe('tag1,tag2')
  })

  it('applies size classes', () => {
    const wrapperSm = mount(CChipInput, {
      props: {
        size: 'sm',
      },
    })
    expect(wrapperSm.classes()).toContain('chip-input-sm')

    const wrapperLg = mount(CChipInput, {
      props: {
        size: 'lg',
      },
    })
    expect(wrapperLg.classes()).toContain('chip-input-lg')
  })

  it('handles disabled state', () => {
    const wrapper = mount(CChipInput, {
      props: {
        disabled: true,
      },
    })
    const input = wrapper.find('input[type="text"]')
    expect(wrapper.classes()).toContain('disabled')
    expect(input.attributes('disabled')).toBeDefined()
    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('handles readonly state', () => {
    const wrapper = mount(CChipInput, {
      props: {
        readOnly: true,
      },
    })
    const input = wrapper.find('input[type="text"]')
    expect(input.attributes('readonly')).toBeDefined()
    expect(wrapper.attributes('aria-readonly')).toBe('true')
  })

  it('does not add chips when disabled', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        disabled: true,
      },
    })
    const input = wrapper.find('input[type="text"]')

    await input.setValue('test')
    await input.trigger('keydown', { key: 'Enter' })

    expect(wrapper.emitted('add')).toBeFalsy()
  })

  it('does not remove chips when disabled', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        disabled: true,
        modelValue: ['test'],
      },
    })

    const removeBtn = wrapper.find('.chip-remove')
    expect(removeBtn.exists()).toBe(false)
  })

  it('emits input event on text input change', async () => {
    const wrapper = mount(CChipInput)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('typing')

    expect(wrapper.emitted('input')?.[0]).toEqual(['typing'])
  })

  it('handles selectable chips', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        selectable: true,
        modelValue: ['chip1', 'chip2'],
      },
    })

    const chips = wrapper.findAllComponents({ name: 'CChip' })
    expect(chips[0].props('selectable')).toBe(true)
  })

  it('handles paste with separator', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        separator: ',',
      },
    })
    const input = wrapper.find('input[type="text"]')

    // Create a mock clipboard data
    const clipboardData = {
      getData: jest.fn().mockReturnValue('one,two,three'),
    }

    await input.trigger('paste', {
      clipboardData,
    })

    expect(wrapper.emitted('add')?.length).toBe(3)
    expect(wrapper.emitted('add')?.[0]).toEqual(['one'])
    expect(wrapper.emitted('add')?.[1]).toEqual(['two'])
    expect(wrapper.emitted('add')?.[2]).toEqual(['three'])
  })

  it('applies chipClassName as string', async () => {
    const wrapper = mount(CChipInput, {
      props: {
        chipClassName: 'custom-chip',
        modelValue: ['test'],
      },
    })
    await wrapper.vm.$nextTick()
    const chip = wrapper.find('.chip')
    expect(chip.classes()).toContain('custom-chip')
  })

  it('applies chipClassName as function', async () => {
    const classNameFn = (value: string) => `chip-${value}`
    const wrapper = mount(CChipInput, {
      props: {
        chipClassName: classNameFn,
        modelValue: ['primary', 'secondary'],
      },
    })
    await wrapper.vm.$nextTick()
    const chips = wrapper.findAll('.chip')
    expect(chips[0].classes()).toContain('chip-primary')
    expect(chips[1].classes()).toContain('chip-secondary')
  })

  it('focuses input on container click', async () => {
    const wrapper = mount(CChipInput, {
      attachTo: document.body,
    })

    await wrapper.trigger('click')
    const input = wrapper.find('input[type="text"]').element as HTMLInputElement
    expect(document.activeElement).toBe(input)

    wrapper.unmount()
  })

  it('clears input on Escape key', async () => {
    const wrapper = mount(CChipInput)
    const input = wrapper.find('input[type="text"]')

    await input.setValue('test')
    await input.trigger('keydown', { key: 'Escape' })

    expect((input.element as HTMLInputElement).value).toBe('')
  })

  it('focuses input when typing in container', async () => {
    const wrapper = mount(CChipInput, {
      attachTo: document.body,
    })

    await wrapper.trigger('keydown', { key: 'a' })
    const input = wrapper.find('input[type="text"]').element as HTMLInputElement
    expect(document.activeElement).toBe(input)

    wrapper.unmount()
  })

  it('does not show remove buttons when removable is false', () => {
    const wrapper = mount(CChipInput, {
      props: {
        removable: false,
        modelValue: ['test'],
      },
    })
    const removeBtn = wrapper.find('.chip-remove')
    expect(removeBtn.exists()).toBe(false)
  })
})
