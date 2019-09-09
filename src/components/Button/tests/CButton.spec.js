import { mount } from '@vue/test-utils'
import Component from '../CButton'

const ComponentName = 'CButton'
const defaultWrapper = mount(Component)

let pressedState = true
const toggleWrapper = mount(Component, {
  context: {
    props: {
      pressed: pressedState,
      type: 'input',
      size: 'lg',
      variant: 'info',
      outline: true,
      ghost: true,
      block: true,
      square: true
    }
  },
  listeners: {
    'update:pressed': () => { pressedState = !pressedState }
  },
  slots: {
    default: 'button'
  }
})
const routerLinkWrapper = mount(Component, {
  context: {
    props: {
      to: '/dashboard',
      size: 'sm',
      variant: 'success',
      ghost: true,
      pill: true
    }
  },
  slots: {
    default: 'button'
  }
})

// const disabledButton = mount(Component, {
//   context: {
//     props: {
//       disabled: true
//     }
//   },
//   slots: {
//     default: 'button'
//   }
// })

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly router link button', () => {
    expect(routerLinkWrapper.element).toMatchSnapshot()
  })
  it('renders correctly toggle button', () => {
    expect(toggleWrapper.element).toMatchSnapshot()
  })
  it('changes pressed state', () => {
    toggleWrapper.trigger('click')
    expect(pressedState).toBe(false)
  })
  // it('disabled', () => {
  //   disabledButton.trigger('click')
  // })
})
