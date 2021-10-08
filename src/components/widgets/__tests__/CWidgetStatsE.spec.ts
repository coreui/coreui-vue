import { mount } from '@vue/test-utils'
import { CWidgetStatsE as Component } from '../../../index'

const ComponentName = 'CWidgetStatsE'

const defaultWrapper = mount(Component, {
  propsData: {
    title: 'title',
    value: 'value',
  },
  slots: {
    chart: 'chart',
    default: 'default',
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
