import Vue from 'vue'
import { createLocalVue } from '@vue/test-utils'
import CoreuiVue from './index.js'

Vue.use(CoreuiVue)

const localVue = new createLocalVue()
localVue.use(CoreuiVue, {
  remove: ['CLink', 'NonExistingComponent']
})

const objectHaveCLink = (VueObject) => {
  return Object.keys(VueObject.options.components).includes('CLink')
}

describe('CoreUI vue plugin', () => {
  it('CLink component exist in basic plugin', () => {
    expect(objectHaveCLink(Vue)).toBe(true)
  })
  it('Plugin with CLink component remove works properly', () => {
    expect(objectHaveCLink(localVue)).toBe(false)
  })
})
