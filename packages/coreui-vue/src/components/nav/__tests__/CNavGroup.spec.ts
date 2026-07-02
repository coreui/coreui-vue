import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { CNavGroup as Component, CNavGroup, CNavItem } from '../../../index'
import { CSidebarNav } from '../../sidebar/CSidebarNav'

const ComponentName = 'CNavGroup'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {},
})

const customWrapper = mount(Component, {
  propsData: {
    compact: true,
    visible: true,
  },
  slots: {
    togglerContent: 'togglerContent',
  },
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(defaultWrapper.classes('nav-group')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.find('a').text()).toContain('togglerContent')
    expect(customWrapper.find('a').classes('nav-link')).toBe(true)
    expect(customWrapper.find('a').classes('nav-group-toggle')).toBe(true)
    expect(customWrapper.find('a').attributes('aria-expanded')).toBe('true')
    expect(customWrapper.find('ul').classes('nav-group-items')).toBe(true)
    expect(customWrapper.find('ul').classes('compact')).toBe(true)
    expect(customWrapper.classes('nav-group')).toBe(true)
    expect(customWrapper.classes('show')).toBe(true)
  })
})

describe(`${ComponentName} uncontrolled mode`, () => {
  it('toggles its own visibility and emits on actual change', async () => {
    const wrapper = mount(Component, {
      slots: { togglerContent: 'togglerContent' },
    })

    expect(wrapper.classes('show')).toBe(false)
    expect(wrapper.emitted('visible-change')).toBeUndefined()

    await wrapper.find('.nav-group-toggle').trigger('click')

    expect(wrapper.classes('show')).toBe(true)
    expect(wrapper.emitted('update:visible')).toEqual([[true]])
    expect(wrapper.emitted('visible-change')).toEqual([[true]])

    await wrapper.find('.nav-group-toggle').trigger('click')

    expect(wrapper.classes('show')).toBe(false)
  })

  it('does not emit visible-change on mount', () => {
    const wrapper = mount(Component, {
      slots: { togglerContent: 'togglerContent' },
    })

    expect(wrapper.emitted('visible-change')).toBeUndefined()
  })

  it('treats `visible` without a listener as default-open and stays toggleable', async () => {
    const wrapper = mount(Component, {
      propsData: { visible: true },
      slots: { togglerContent: 'togglerContent' },
    })

    expect(wrapper.classes('show')).toBe(true)

    await wrapper.find('.nav-group-toggle').trigger('click')

    expect(wrapper.classes('show')).toBe(false)
  })
})

const nested = () =>
  mount(CSidebarNav, {
    slots: {
      default: () => [
        h(
          CNavGroup,
          {},
          {
            togglerContent: () => 'A',
            default: () => [
              h(
                CNavGroup,
                {},
                {
                  togglerContent: () => 'B',
                  default: () => [h(CNavItem, { href: '#' }, () => 'item')],
                }
              ),
            ],
          }
        ),
      ],
    },
  })

describe(`${ComponentName} nested groups`, () => {
  it('renders and toggles per level', async () => {
    const wrapper = nested()
    const group = (index: number) => wrapper.findAll('.nav-group')[index]

    expect(group(0).classes('show')).toBe(false)

    await wrapper.findAll('.nav-group-toggle')[0].trigger('click')
    expect(group(0).classes('show')).toBe(true)
    expect(group(1).classes('show')).toBe(false)

    await wrapper.findAll('.nav-group-toggle')[1].trigger('click')
    expect(group(1).classes('show')).toBe(true)

    await wrapper.findAll('.nav-group-toggle')[0].trigger('click')
    expect(group(0).classes('show')).toBe(false)
  })

  it('opening one sibling closes the other (per-level accordion)', async () => {
    const wrapper = mount(CSidebarNav, {
      slots: {
        default: () => [
          h(
            CNavGroup,
            {},
            {
              togglerContent: () => 'A',
              default: () => [h(CNavItem, { href: '#' }, () => 'itemA')],
            }
          ),
          h(
            CNavGroup,
            {},
            {
              togglerContent: () => 'B',
              default: () => [h(CNavItem, { href: '#' }, () => 'itemB')],
            }
          ),
        ],
      },
    })
    const group = (index: number) => wrapper.findAll('.nav-group')[index]

    await wrapper.findAll('.nav-group-toggle')[0].trigger('click')
    expect(group(0).classes('show')).toBe(true)
    expect(group(1).classes('show')).toBe(false)

    await wrapper.findAll('.nav-group-toggle')[1].trigger('click')
    expect(group(1).classes('show')).toBe(true)
    expect(group(0).classes('show')).toBe(false)
  })

  it('an active nav link opens its ancestor groups', async () => {
    const wrapper = mount(CSidebarNav, {
      slots: {
        default: () => [
          h(
            CNavGroup,
            {},
            {
              togglerContent: () => 'A',
              default: () => [
                h(
                  CNavGroup,
                  {},
                  {
                    togglerContent: () => 'B',
                    default: () => [h(CNavItem, { active: true, href: '#' }, () => 'item')],
                  }
                ),
              ],
            }
          ),
        ],
      },
    })

    await nextTick()

    expect(wrapper.findAll('.nav-group')[0].classes('show')).toBe(true)
    expect(wrapper.findAll('.nav-group')[1].classes('show')).toBe(true)
  })
})

describe(`${ComponentName} controlled mode`, () => {
  it('stays open when the parent rejects the collapse (#313)', async () => {
    const onUpdate = vi.fn()
    const wrapper = mount(Component, {
      props: { visible: true, 'onUpdate:visible': onUpdate },
      slots: { togglerContent: 'togglerContent' },
    })

    expect(wrapper.classes('show')).toBe(true)

    await wrapper.find('.nav-group-toggle').trigger('click')

    expect(onUpdate).toHaveBeenCalledWith(false)
    expect(wrapper.classes('show')).toBe(true)
  })

  it('follows the prop when the parent accepts (v-model)', async () => {
    const onUpdate = vi.fn()
    const wrapper = mount(Component, {
      props: { visible: true, 'onUpdate:visible': onUpdate },
      slots: { togglerContent: 'togglerContent' },
    })

    await wrapper.find('.nav-group-toggle').trigger('click')
    expect(onUpdate).toHaveBeenCalledWith(false)

    await wrapper.setProps({ visible: false })

    expect(wrapper.emitted('visible-change')).toContainEqual([false])
    expect(wrapper.classes('show')).toBe(false)
  })
})
