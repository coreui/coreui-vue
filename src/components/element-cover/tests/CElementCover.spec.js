// cannot do integration test without browser, due to 
// .getBoundingClientRect() always returning 0
import { mount, createLocalVue } from '@vue/test-utils'
import Component from '../CElementCover'

const localVue = new createLocalVue()
const App = localVue.extend({
  components: {
    CElementCover: Component
  },
  render(h) {
    return h('div', {}, [
      h('div', { attrs: { class: 'first' }}),
      h('CElementCover', {
        props: {
          boundaries: [
            {
              sides: ['top', 'left'],
              query: '.first'
            },
            {
              sides: ['bottom'],
              query: 'non-existing'
            },
            {
              sides: ['bottom']
            }
          ]
        }
      })
    ])
  }
})

const customWrapper = mount(App, { localVue })
const defaultWrapper = mount(Component)

const ComponentName = 'CElementCover'

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toBe(ComponentName)
  })
  it('renders correctly with default spinner', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  }) 
  it('renders correctly with custom content', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
