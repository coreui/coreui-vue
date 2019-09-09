//TODO: the test doesn't set paths correctly in the snapshot
import { mount, createLocalVue } from '@vue/test-utils'
import Component from '../CBreadcrumbRouter'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
const router = new VueRouter()

const ComponentName = 'CBreadcrumbRouter'
const wrapper = mount(
  Component,
  { 
    localVue, 
    router, 
    mocks: {
      $route: { 
        matched: [
          { path: '', meta: { label: 'Home' } },
          { path: '/menu', name: 'Menu' },
          { path: '/menu/view', name: 'View' } 
        ] 
      }
    },
    propsData: { 
      addLinkClasses: 'additional-link-class',
      addLastItemClasses: 'additional-last-item-class',
      addClasses: 'additional-class'
    }
  }
)


describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
});
