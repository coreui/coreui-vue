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
          { path: '', name: 'Home', meta: {} },
          { path: '/menu', name: 'Menu', meta: {} },
          { path: '/menu/view', name: 'View', meta: {} } 
        ] 
      }
    },
    propsData: { 
      addLinkClasses: 'test-link-class',
      addLastItemClasses: 'test-last-item-class',
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
