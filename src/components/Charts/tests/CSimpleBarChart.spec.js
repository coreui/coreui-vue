import Component from "../CSimpleBarChart";
// import { shallowMount } from '@vue/test-utils'

const ComponentName = 'CSimpleBarChart'
// import Vue from 'vue'
// const vm = new Vue(Component1).$mount(document.createElement('div'))
//
// /* eslint-disable no-console */
// console.log(vm.$options);
// /* eslint-enable no-console */

// console.log(typeof Component.props.data.default())
// console.log(typeof Component.props.finalOptions.default())


describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('has default props functions', () => {
    expect(typeof Component.props.finalOptions.default).toBe('function')
    expect(typeof Component.props.data.default).toBe('function')
  })
  it('functions are returning valid default data', () => {
    expect(typeof Component.props.finalOptions.default()).toBe('object')
    expect(typeof Component.props.data.default()).not.toBe('undefined')
  })
});
