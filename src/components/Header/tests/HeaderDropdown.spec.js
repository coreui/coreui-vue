import { shallowMount, mount } from '@vue/test-utils'
import Component from "../HeaderDropdown";
import CDropdown from "../../Dropdown/CDropdown"
import Vue from 'vue'

Vue.component('CDropdown', CDropdown)

const ComponentName = 'HeaderDropdown'
const wrapper = mount(Component)
// /* eslint-disable no-console */

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        right: false,
        noCaret: false
      }
    })
    expect(wrapper.props().right).toBe(false)
    expect(wrapper.props().noCaret).toBe(false)
  });
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.find('span').text()).toBe('dropdown')
    expect(wrapper.find('span').classes()).toContain('text-center')
  })
});
