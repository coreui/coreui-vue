import { mount } from '@vue/test-utils'
import Component from "../CCard";
const ComponentName = 'CCard'

const wrapper = mount(Component, {
  context: {
    props: {
      align: 'left',
      variant: 'success',
      textVariant: 'white',
      borderVariant: 'solid',
      header: 'header',
      footer: 'footer',
      body: 'body'
    }
  }
})
const slotWrapper = mount(Component, {
  context: {
    props: {
      align: 'left',
      variant: 'success',
      textVariant: 'white',
      borderVariant: 'solid',
      header: 'header',
      footer: 'footer',
      body: 'body'
    }
  },
  slots: {
    default: 'this should overwrite body<br>'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly with slots', () => {
    expect(slotWrapper.element).toMatchSnapshot()
  })
});
