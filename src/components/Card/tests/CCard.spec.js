import { mount } from '@vue/test-utils'
import Component from '../CCard'
const ComponentName = 'CCard'

const wrapper = mount(Component, {
  context: {
    props: {
      align: 'left',
      variant: 'success',
      textVariant: 'white',
      borderVariant: 'solid',
      headerHtml: 'header',
      footerHtml: 'footer',
      bodyHtml: 'body'
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
      bodyWrapper: true
    }
  },
  slots: {
    default: 'this should be rendered in body wrapper'
  }
})

const noBodyCard = mount(Component, {
  context: {
    props: {
      headerHtml: 'header',
      footerHtml: 'footer'
    }
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
  it('renders correctly with slots', () => {
    expect(noBodyCard.element).toMatchSnapshot()
  })
});
