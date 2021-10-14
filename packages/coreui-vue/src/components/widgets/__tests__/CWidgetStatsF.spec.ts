import { mount } from '@vue/test-utils'
import { CWidgetStatsF as Component } from '../../../index'

const ComponentName = 'CWidgetStatsF'

const defaultWrapper = mount(Component, {
  propsData: {
    color: 'warning',
    padding: true,
    title: 'title',
    text: 'text',
    value: 75,
  },
  slots: {
    icon: 'icon',
    default: 'default',
    footer: 'footer',
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
