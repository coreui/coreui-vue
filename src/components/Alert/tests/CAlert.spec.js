import { mount } from '@vue/test-utils'
import Component from "../CAlert";
import CButtonClose from "../../Button/CButtonClose";
import Vue from 'vue'

Vue.component('CButtonClose', CButtonClose)

const ComponentName = 'CAlert'
const defaultWrapper = mount(Component, {
  propsData: {
    show: true,
    dismissible: true
  },
  slots: {
    default: 'Dismissible Alert!'
  }
})

const customWrapper = mount(Component, {
  propsData: {
    show: true,
    fade: true,
    dismissible: true,
    variant: 'success'
  },
  slots: {
    default: 'Dismissible Alert!'
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
