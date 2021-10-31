import { mount } from '@vue/test-utils'
import { CModal as Component } from '../../../index'

const ComponentName = 'CModal'

const defaultWrapper = mount(Component, {
  propsData: {
    fullscreen: true,
    visible: true,
  },
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    alignment: 'center',
    backdrop: false,
    contentClassName: 'bazinga',
    fullscreen: 'lg',
    keyboard: true,
    scrollable: true,
    size: 'lg',
    transition: false,
    visible: true,
  },
  slots: {
    default: 'Default slot',
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
    expect(defaultWrapper.text()).toContain('Default slot')
    expect(defaultWrapper.find('.modal').classes('modal')).toBe(true)
    expect(defaultWrapper.find('.modal').classes('fade')).toBe(true)
    expect(defaultWrapper.find('.modal-dialog').classes('modal-dialog')).toBe(true)
    expect(defaultWrapper.find('.modal-dialog').classes('modal-fullscreen')).toBe(true)
    expect(defaultWrapper.find('.modal-content').classes('modal-content')).toBe(true)
    expect(defaultWrapper.find('.modal-backdrop').classes('modal-backdrop')).toBe(true)
  })
  /*
  it('event on click backdrop', async () => {
    await defaultWrapper.find('.modal-backdrop').trigger('click')
    const incrementEvent = defaultWrapper.emitted('dismiss')
    expect(incrementEvent).toHaveLength(1)
  })
  */
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.find('.modal').classes('modal')).toBe(true)
    expect(customWrapper.find('.modal-dialog').classes('modal-dialog')).toBe(true)
    expect(customWrapper.find('.modal-dialog').classes('modal-dialog-centered')).toBe(true)
    expect(customWrapper.find('.modal-dialog').classes('modal-fullscreen-lg-down')).toBe(true)
    expect(customWrapper.find('.modal-dialog').classes('modal-dialog-scrollable')).toBe(true)
    expect(customWrapper.find('.modal-dialog').classes('modal-lg')).toBe(true)
    expect(customWrapper.find('.modal-content').classes('modal-content')).toBe(true)
    expect(customWrapper.find('.modal-content').classes('bazinga')).toBe(true)
  })
  /*

  TODO: Test keyup and click on backdrop (events are init on transition onAfterEnter)

  it('event on keyup', async () => {
    await nextTick()
    await customWrapper.trigger('keyup', {
      keyCode: 27
    })
    const incrementEvent = customWrapper.emitted('dismiss')
    expect(incrementEvent).toHaveLength(1)
  })
  */
})
