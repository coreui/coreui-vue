import { mount } from '@vue/test-utils'
import { CWidgetStatsB as Component } from '../../../index'

const ComponentName = 'CWidgetStatsB'

const defaultWrapper = mount(Component, {
  propsData: {
    color: 'warning',
    inverse: true,
    progress: {
      color: 'info',
      value: 75,
    },
    text: 'text',
    title: 'title',
    value: 75,
  },
  slots: {},
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.html()).toMatchSnapshot()
  })
})
