import { mount } from '@vue/test-utils'
import Component from '../CModal'

const ComponentName = 'CModal'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    visible: true,
    centered: true,
    title: 'modal title',
    size: 'lg',
    variant: 'success',
    borderVariant: 'success',
    noFade: true,
    noBackdrop: true,
    noCloseOnBackdrop: true,
    noFooter: true,
    addModalClasses: 'additional-modal-class',
    addDialogClasses: 'additional-dialog-class',
    addContentClasses: 'additional-content-class'
  },
  slots: {
    default: 'CModal body'
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
