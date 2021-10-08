import { mount } from '@vue/test-utils'
import { CWidgetStatsC as Component } from '../../../index'

const ComponentName = 'CWidgetStatsC'

const defaultWrapper = mount(Component, {
  propsData: {
    color: 'warning',
    inverse: true,
    progress: {
      color: 'info',
      value: 75,
    },
    title: 'title',
    value: 75,
  },
  slots: {
    icon: 'icon',
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
