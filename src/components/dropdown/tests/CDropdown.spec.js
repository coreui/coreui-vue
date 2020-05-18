import { mount, createLocalVue } from '@vue/test-utils'
import {
  CDropdown,
  CDropdownItem,
  CDropdownHeader,
  CDropdownDivider
} from '../index'
import VueRouter from 'vue-router'

const ComponentName = 'CDropdown'

const localVue = new createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

const dropdownProps = {
  togglerText: 'Dropdown button',
  show: true,
  addMenuClasses: 'additional-menu-class',
  addTogglerClasses: 'additional-toggler-class',
  inNav: false,
  caret: false,
  color: 'success',
  size: 'lg',
  split: true,
  offset: [20, 0],
  placement: 'right-end',
  flip: false
}

const App = localVue.extend({
  router,
  components: {
    CDropdown,
    CDropdownItem,
    CDropdownHeader,
    CDropdownDivider
  },
  render (h) {
    return h('CDropdown', { props: dropdownProps }, [
      h('CDropdownHeader', ['header']),
      h('CDropdownItem', { props: { to: '/buttons' } }, ['Router-link']),
      h('CDropdownDivider'),
      //router link item
      h('CDropdownItem', { props: { to: '/dashboard' } }, ['Router-link'])
    ])
  }
})

const generateAppWrapper =  () => mount(App, { localVue })


const generateWrapper = () => mount(CDropdown, {
  attachToDocument: true,
  propsData: dropdownProps,
  slots: {
    default: [
      CDropdownHeader,
      CDropdownItem,
      CDropdownDivider
    ]
  }
})

const generateNavWrapper =  () => mount(CDropdown, {
  propsData: {
    addMenuClasses: 'additional-menu-class',
    addTogglerClasses: 'additional-toggler-class',
    inNav: true,
    caret: false,
    color: 'success',
    placement: 'left',
    customPopperOptions: {}
  },
  slots: {
    default: 'CDropdown subcomponents',
    toggler: '<div class="toggler">Dropdown button</div>'
  }
})


describe(ComponentName, () => {
  it('has a name', () => {
    expect(CDropdown.name).toMatch(ComponentName)
  })
  it('renders basic wrapper correctly', () => {
    expect(mount(CDropdown).element).toMatchSnapshot()
  })
  it('renders custom wrapper correctly', () => {
    expect(generateWrapper().element).toMatchSnapshot()
  })
  it('renders dropdown with router links correctly', () => {
    expect(generateWrapper().element).toMatchSnapshot()
  })
  it('renders correctly inNav', () => {
    expect(generateNavWrapper().element).toMatchSnapshot()
  })
  it('toggles when show prop is changed', () => {
    const wrapper = generateWrapper()
    expect(wrapper.vm.visible).toBe(true)
    wrapper.setProps({ show: false })
    expect(wrapper.vm.visible).toBe(false)
  })
  it('hide when dropdown item is clicked', () => {
    const wrapper = generateWrapper()
    expect(wrapper.vm.visible).toBe(true)
    wrapper.vm.$children[0].$el.click()
    expect(wrapper.vm.visible).toBe(false)
  })
  it('hide when dropdown item - router link is clicked', () => {
    const wrapper = generateAppWrapper()
    const isVisible = () => wrapper.vm.$children[0].visible
    expect(isVisible()).toBe(true)
    wrapper.findAll('.dropdown-item').at(1).trigger('click')
    expect(isVisible()).toBe(false)
  })
  it('close, but does not open on click when dropdown is disabled', () => {
    const customWrapper = generateWrapper()
    const toggle = () => {
      customWrapper.find('.dropdown-toggle-split').trigger('click')
    }

    expect(customWrapper.vm.visible).toBe(true)
    customWrapper.setProps({
      disabled: true
    })
    toggle()
    expect(customWrapper.vm.visible).toBe(false)
    toggle()
    expect(customWrapper.vm.visible).toBe(false)
  }) 
  it('Closes dropdown on outside click', () => {
    const customWrapper = generateWrapper()

    expect(customWrapper.vm.visible).toBe(true)
    customWrapper.vm.$el.getElementsByClassName('dropdown-menu')[0].click()
    expect(customWrapper.vm.visible).toBe(true)
    document.body.click()
    expect(customWrapper.vm.visible).toBe(false)
  })
  it('opens then toggler is passed by slot', () => {
    const navWrapper = generateNavWrapper()
    const toggle = () => {
      navWrapper.find('.toggler').trigger('click')
    }

    expect(navWrapper.vm.visible).toBe(false)
    toggle()
    expect(navWrapper.vm.visible).toBe(true)
    toggle()
    expect(navWrapper.vm.visible).toBe(false)
  })
})
