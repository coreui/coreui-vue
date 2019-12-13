import { mount } from '@vue/test-utils'
import Component from '../CRenderFunction'

const ComponentName = 'CRenderFunction'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    contentToRender: [
      'div', 
      [
        [
          'div',
          [
            'text',
            { slot: 'slot_name'},
            { slot2: 'no effect object'}
          ] 
        ]
      ]
    ]
  },
  slots: {
    slot_name: 'slot content'
  }
})

const flatWrapper = mount(Component, {
  propsData: {
    flat: true,
    contentToRender: [
      {
        '_name': 'p',
        '_attrs': { class: 'class' },
        someProp: true,
        '_children': [
          '1st level child',
          {
            '_attrs': { class: 'class' },
          }
        ]
      }
    ]
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('not rendering anything without contentToRender', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('renders correctly with flat structure', () => {
    expect(flatWrapper.element).toMatchSnapshot()
  })
})
