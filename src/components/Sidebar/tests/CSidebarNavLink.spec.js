import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Component from "../CSidebarNavLink";

const ComponentName = 'CSidebarNavLink'
const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()
const wrapper = shallowMount(Component, { localVue, router })

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  test("should have default props", () => {
    const wrapper = shallowMount(Component, {
      localVue,
      router,
      propsData: {
        name: 'test',
        url: '',
        icon: '',
        badge: {},
        variant: '',
        classes: ''
      }
    })
    expect(wrapper.props().name).toEqual('test')
    expect(wrapper.props().classes).toBe('')
    expect(typeof wrapper.props().badge).toBe('object')
  });
  it('has computed properties', () => {
    expect(typeof Component.computed.classList).toBe('function')
    expect(typeof Component.computed.classIcon).toBe('function')
    expect(typeof Component.computed.linkVariant).toBe('function')
    expect(typeof Component.computed.itemClasses).toBe('function')
    expect(typeof Component.computed.isExternalLink).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('div')).toBe(true)
  })
});
