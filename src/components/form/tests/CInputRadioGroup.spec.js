import { mount } from '@vue/test-utils'
import Component from '../CInputRadioGroup'

const ComponentName = 'CInputRadio'
const customWrapper = mount(Component, {
  propsData: {
    name: 'custom',
    options: [
      { value: 'option 1', label: 'label1', props: { id: 'id1' }},
      { value: 'option 2', label: 'label2', props: { description: 'description', id: 'id2' }}
    ],
    checked: 'option 2',
    custom: true
  },
  atts: {
    class: 'add-class'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('assigns name automatically when not passed', () => {
    customWrapper.setProps({
      name: ''
    })
    expect(customWrapper.findAll('input').at(0).attributes().name).not.toBe('')
  })
  it('properly renders input radio from string', () => {
    const currentOptions = customWrapper.vm.options
    customWrapper.setProps({ options: [...currentOptions, 'option 3']})
    expect(customWrapper.findAll('label').at(2).text()).toBe('option 3')
    expect(customWrapper.findAll('input').at(2).attributes().value).toBe('option 3')
  })
  it('renders correctly', () => {
    customWrapper.find('input').setChecked(true)
    expect(customWrapper.emitted()['update:checked']).toBeTruthy()
    expect(customWrapper.emitted()['update:checked'][0][1] instanceof Event).toBeTruthy()
  })
})