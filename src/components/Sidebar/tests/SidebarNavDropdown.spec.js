import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Component from "../SidebarNavDropdown";

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()


const ComponentName = 'SidebarNavDropdown'
const wrapper = shallowMount(Component, { localVue, router })
// /* eslint-disable no-console */
// console.log("something")

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = shallowMount(Component, {
      localVue,
      router,
      propsData: {
        name: 'test',
        url: '',
        icon: ''
      }
    })
    expect(wrapper.props().name).toEqual('test')
    expect(wrapper.props().url).toBe('')
    expect(wrapper.props().icon).toBe('')
  });
  it('has classIcon computed property', () => {
    expect(typeof Component.computed.classIcon).toBe('function')
  })
  it('has handleClick method', () => {
    expect(typeof Component.methods.handleClick).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('router-link-stub')).toBe(true)
  })
});
