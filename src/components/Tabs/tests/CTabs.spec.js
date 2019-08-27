import { mount } from '@vue/test-utils'
import Component from '../CTabs'
import CTab from '../CTab'

const ComponentName = 'CTabs'
const defaultWrapper = mount(Component)
export const customWrapper = mount(Component, {
  propsData: {
    fill: true,
    justified: true,
    pills: true,
    noFade: false,
    vertical: true,
    addNavWrapperClasses: 'additional-nav-wrapper-class',
    addNavClasses: 'additional-nav-class',
    addTabsWrapperClasses: 'additional-tabs-wrapper-class',
    addTabsClasses: 'additional-tabs-class',
    addTabClasses: 'additional-tab-class'
  },
  slots: {
    default: [CTab, CTab, CTab]
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
