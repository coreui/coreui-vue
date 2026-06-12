import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { CChipSet, type CChipSetItem } from '../CChipSet'
import { CChip } from '../../chip/CChip'

const set = (props: Record<string, unknown>, values: string[]) =>
  mount(CChipSet, {
    props,
    slots: {
      default: () => values.map((v) => h(CChip, { value: v, key: v }, { default: () => v })),
    },
  })

describe('CChipSet', () => {
  it('has correct name', () => {
    expect(CChipSet.name).toBe('CChipSet')
  })

  it('renders .chip-set', () => {
    const w = set({}, ['a', 'b'])
    expect(w.classes()).toContain('chip-set')
    expect(w.findAll('.chip')).toHaveLength(2)
  })

  it('moves focus between chips with the keyboard', async () => {
    const w = mount(CChipSet, {
      attachTo: document.body,
      props: { selectable: true },
      slots: {
        default: () =>
          ['a', 'b', 'c'].map((v) => h(CChip, { value: v, key: v }, { default: () => v })),
      },
    })
    const chips = w.findAll('.chip')
    ;(chips[0].element as HTMLElement).focus()
    await chips[0].trigger('keydown', { key: 'ArrowRight' })
    expect(document.activeElement).toBe(chips[1].element)
    await chips[1].trigger('keydown', { key: 'End' })
    expect(document.activeElement).toBe(chips[2].element)
    await chips[2].trigger('keydown', { key: 'Home' })
    expect(document.activeElement).toBe(chips[0].element)
    // No cycling past the first chip.
    await chips[0].trigger('keydown', { key: 'ArrowLeft' })
    expect(document.activeElement).toBe(chips[0].element)
    w.unmount()
  })

  it('mirrors arrow keys in RTL', async () => {
    document.documentElement.dir = 'rtl'
    const w = mount(CChipSet, {
      attachTo: document.body,
      props: { selectable: true },
      slots: {
        default: () => ['a', 'b'].map((v) => h(CChip, { value: v, key: v }, { default: () => v })),
      },
    })
    const chips = w.findAll('.chip')
    ;(chips[0].element as HTMLElement).focus()
    // In RTL, ArrowLeft moves to the next chip.
    await chips[0].trigger('keydown', { key: 'ArrowLeft' })
    expect(document.activeElement).toBe(chips[1].element)
    await chips[1].trigger('keydown', { key: 'ArrowRight' })
    expect(document.activeElement).toBe(chips[0].element)
    w.unmount()
    document.documentElement.dir = ''
  })

  it('selectable: click selects (multiple)', async () => {
    const w = set({ selectable: true }, ['a', 'b'])
    const chips = w.findAll('.chip')
    await chips[0].trigger('click')
    await chips[1].trigger('click')
    expect(chips[0].classes()).toContain('active')
    expect(chips[1].classes()).toContain('active')
    expect(w.emitted('update:selected')?.slice(-1)[0]).toEqual([['a', 'b']])
  })

  it('single selection deselects siblings', async () => {
    const w = set({ selectable: true, selectionMode: 'single' }, ['a', 'b'])
    const chips = w.findAll('.chip')
    await chips[0].trigger('click')
    await chips[1].trigger('click')
    expect(chips[0].classes()).not.toContain('active')
    expect(chips[1].classes()).toContain('active')
    expect(w.emitted('update:selected')?.slice(-1)[0]).toEqual([['b']])
  })

  it('controlled v-model', () => {
    const w = set({ selectable: true, selected: ['b'] }, ['a', 'b'])
    const chips = w.findAll('.chip')
    expect(chips[0].classes()).not.toContain('active')
    expect(chips[1].classes()).toContain('active')
  })

  it('filter shows check icon when selected', () => {
    const w = set({ filter: true, selected: ['a'] }, ['a'])
    expect(w.find('.chip-check').exists()).toBe(true)
  })

  it('removable fires remove', async () => {
    const w = set({ removable: true }, ['a', 'b'])
    await w.find('.chip-remove').trigger('click')
    expect(w.emitted('remove')?.[0]).toEqual(['a'])
  })

  it('v-model:chips — emits update:chips without the removed chip', async () => {
    const w = mount(CChipSet, {
      props: { removable: true, chips: ['a', { value: 'b', label: 'B' }] },
    })
    await w.find('.chip-remove').trigger('click')
    expect(w.emitted('remove')?.[0]).toEqual(['a'])
    expect(w.emitted('update:chips')?.[0]).toEqual([[{ value: 'b', label: 'B' }]])
  })

  it('v-model:chips — the set removes the chip once the parent syncs', async () => {
    const w = mount(CChipSet, {
      props: {
        removable: true,
        chips: ['a', 'b'],
        'onUpdate:chips': (next: (string | CChipSetItem)[]) => w.setProps({ chips: next }),
      },
    })
    expect(w.findAll('.chip')).toHaveLength(2)
    await w.find('.chip-remove').trigger('click')
    await w.vm.$nextTick()
    expect(w.findAll('.chip')).toHaveLength(1)
  })

  it('renders chips from the chips prop (strings and objects)', async () => {
    const w = mount(CChipSet, {
      attachTo: document.body,
      props: {
        selectable: true,
        chips: [
          'react',
          { value: 'vue', label: 'Vue' },
          { value: 'ng', label: 'Angular', selectable: false },
        ],
      },
    })
    expect(w.findAll('.chip')).toHaveLength(3)
    expect(w.text()).toContain('Vue')

    const chips = w.findAll('.chip')
    // Per-item override still works with the data-driven API.
    await chips[2].trigger('click')
    expect(chips[2].classes()).not.toContain('active')
    w.unmount()
  })

  it('disabled forwards to chips', () => {
    const w = set({ disabled: true, removable: true }, ['a'])
    expect(w.find('.chip').classes()).toContain('disabled')
    // A disabled chip never gets a remove button (parity with vanilla).
    expect(w.find('.chip-remove').exists()).toBe(false)
  })

  it('lets a chip override set config (opt out of selectable / removable)', async () => {
    const w = mount(CChipSet, {
      props: { selectable: true, removable: true },
      slots: {
        default: () => [
          h(CChip, { value: 'a' }, { default: () => 'A' }),
          h(CChip, { value: 'b', selectable: false, removable: false }, { default: () => 'B' }),
        ],
      },
    })
    const chips = w.findAll('.chip')
    await chips[1].trigger('click')
    expect(chips[1].classes()).not.toContain('active')
    expect(chips[0].find('.chip-remove').exists()).toBe(true)
    expect(chips[1].find('.chip-remove').exists()).toBe(false)
  })
})
