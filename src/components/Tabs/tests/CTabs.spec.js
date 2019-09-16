import { mount } from '@vue/test-utils'
import CTabs from '../CTabs'
import CTab from '../CTab'
import Vue from 'vue'

const ComponentName = 'CTabs'
const defaultWrapper = mount(CTabs)

// export const customWrapper = mount(Component, {
//   propsData: {
//     fill: true,
//     justified: true,
//     pills: true,
//     noFade: false,
//     vertical: true,
//     addNavWrapperClasses: 'additional-nav-wrapper-class',
//     addNavClasses: 'additional-nav-class',
//     addTabsWrapperClasses: 'additional-tabs-wrapper-class',
//     addTabsClasses: 'additional-tabs-class',
//     addTabClasses: 'additional-tab-class'
//   },
//   slots: {
//     default: [CTab, CTab, customTab]
//   }
// })

const App = Vue.extend({
  components: { CTabs, CTab },
  render (h) {
    return h(
      'CTabs', 
      {
        props: {
          fill: true,
          justified: true,
          pills: true,
          noFade: false,
          vertical: { navs: 'c-col-sm-3', content: 'c-col-sm-9' },
          addNavWrapperClasses: 'additional-nav-wrapper-class',
          addNavClasses: 'additional-nav-class',
          addTabsWrapperClasses: 'additional-tabs-wrapper-class',
          addTabsClasses: 'additional-tabs-class',
          addTabClasses: 'additional-tab-class'
        }
      }, 
      [
        h('CTab', { props: { active: true, titleHtml: 'tab1' }}, ['tab1 content']),
        h('CTab', { props: { titleHtml: 'tab2' }}, ['tab2 content']),
        h('CTab', { props: { titleHtml: 'tab3' }}),
        h(
          'CTab',
          { props: { disabled: true }, scopedSlots: { title: () => 'tab 4' }},
          ['disabled tab']
        ),
        h(
          'div',
          {},
          ['ignored element']
        )
      ]
    )
  }
})

const customWrapper = mount(App)

describe(ComponentName, () => {
  it('has a name', () => {
    expect(CTabs.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('do not change tab on click when disabled', () => {
    const tabs = customWrapper.findAll('.c-nav-item')
    tabs.at(3).trigger('click')
    expect(customWrapper.find('.c-tab-pane').text()).toBe('tab1 content')
  })
  it('changes tab on click', () => {
    const tabs = customWrapper.findAll('.c-nav-item')
    tabs.at(2).trigger('click')
    expect(customWrapper.find('.c-tab-pane').text()).toBe('')
  })
  it('properly changes vertical classes', () => {
    defaultWrapper.setProps({ vertical: true })
    expect(defaultWrapper.vm.gridClasses.navs).toBe('c-col-sm-4')
  })
})
