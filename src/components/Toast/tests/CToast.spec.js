import { mount } from '@vue/test-utils'
import Component from '../CToast'

const ComponentName = 'CToast'
const defaultWrapper = mount(Component)
export const customWrapper = mount(Component, {
  propsData: {
    show: true,
    position: 'top-left',
    titleHtml: 'title',
    noHeader: false,
    autohide: 3000,
    noCloseButton: false,
    noFade: false
  },
  slots: {
    default: 'CToast body'
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
