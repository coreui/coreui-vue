import { mount } from '@vue/test-utils'
import { CWidgetStatsA as Component } from '../../../index'

const ComponentName = 'CWidgetStatsA'

const defaultWrapper = mount(Component, {
  propsData: {
    color: 'warning',
    title: 'title',
    value: 75,
  },
  slots: {
    action: 'action',
    chart: 'chart',
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
})
