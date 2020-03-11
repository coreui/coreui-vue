import { mount } from '@vue/test-utils'
import Component from '../CPagination'

const ComponentName = 'CPagination'
const wrapper = mount(Component, {
  slots: {
    'first-button': 'Go to first',
    'previous-button': 'Go to previous',
    'next-button': 'Go to next',
    'last-button': 'Go to last',
  }
})

const customWrapper = mount(Component, {
  propsData: {
    activePage: 9,
    pages: 20,
    size: 'lg',
    align: 'center',
    limit: 7,
    dots: false,
    arrows: false,
    doubleArrows: false
  },

})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('emits update:activePage event when number of pages change', () => {
    customWrapper.setProps({ pages: 6 })
    expect(customWrapper.emitted()['update:activePage'][0]).toMatchObject([6, true])
  })
  it('emits update:activePage event when inactive item is clicked', () => {
    const links = wrapper.findAll('.page-link')
    links.at(2).trigger('click')
    expect(wrapper.emitted()['update:activePage']).not.toBeTruthy()

    links.at(4).trigger('click')
    expect(wrapper.emitted()['update:activePage'][0]).toMatchObject([3, false])
  })
  it('calls focus function when clicked on numeric item', () => {
    const spy = jest.spyOn(wrapper.vm, 'changeFocus')
    const links = wrapper.findAll('.page-link')
    links.at(7).trigger('click')
    expect(spy).not.toBeCalled()
    links.at(4).trigger('click')
    expect(spy).toBeCalled()
  })
})
