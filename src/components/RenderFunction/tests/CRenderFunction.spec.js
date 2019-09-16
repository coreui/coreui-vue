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

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
