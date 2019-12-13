import { mount, createLocalVue } from '@vue/test-utils'
import CLink from '../CLink'
import VueRouter from 'vue-router'

const ComponentName = 'CLink'
const wrapper = mount(CLink)


const localVue = new createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

let triggerLink = jest.fn()
const click = () => { triggerLink() }

const App = localVue.extend({
  router,
  components: { CLink },
  render (h) {
    return h('main', {}, [
      // router-link
      h('CLink', { props: { to: '/a' }, nativeOn: { click } }, ['to-path-a']),
      // regular link
      h('CLink', { props: { href: '/a' }, on: { click } }, ['href-a']),
      // disabled link
      h('CLink', { props: { disabled: true, href: '/a' }, on: { click } }, ['href-a']),
      //no click additional behavior
      h('CLink', { props: { href: '/a' } }, ['href-a'])
    ])
  }
})

const customWrapper = mount(App, { localVue })

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(CLink.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('triggers events properly', () => {
    const links = customWrapper.findAll('a')

    links.at(2).trigger('click')
    links.at(3).trigger('click')  
    expect(triggerLink).not.toBeCalled()

    links.at(0).trigger('click')
    expect(triggerLink).toBeCalled()

    links.at(1).trigger('click')  
    expect(triggerLink).toBeCalledTimes(2)
  })
});
