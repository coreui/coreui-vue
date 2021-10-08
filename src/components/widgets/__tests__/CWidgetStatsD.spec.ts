import { mount } from '@vue/test-utils'
import { CWidgetStatsD as Component } from '../../../index'

const ComponentName = 'CWidgetStatsD'

const defaultWrapper = mount(Component, {
  propsData: {
    color: 'warning',
    values: [
      { title: 'aa', value: 'bb' },
      { title: 'cc', value: 'dd' },
    ],
  },
  slots: {
    icon: 'icon',
    chart: 'chart',
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
