import { mount } from '@vue/test-utils'
import Component from '../CButton'

const ComponentName = 'CButton'
const defaultWrapper = mount(Component)

let updatePressedEmitted = jest.fn()
const toggleWrapper = mount(Component, {
  context: {
    props: {
      pressed: true,
      type: 'input',
      size: 'lg',
      color: 'info',
      variant: 'outline',
      block: true,
      shape: 'square'
    }
  },
  listeners: {
    'update:pressed': () => { updatePressedEmitted() }
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
      color: 'success',
      variant: 'ghost',
      shape: 'pill'
    }
  },
  listeners: {
    'update:pressed': () => { updatePressedEmitted() }
  },
  slots: {
    default: 'button'
  }
})

// const disabledButton = mount(Component, {
//   attachToDocument: true,
//   context: {
//     props: {
//       disabled: true
//     },
//     attrs: {
//       id: 'disabled'
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
  it('emits update:pressed event if pressed prop and listener is defined', () => {
    routerLinkWrapper.trigger('click')
    expect(updatePressedEmitted).not.toBeCalled()

    toggleWrapper.trigger('click')
    expect(updatePressedEmitted).toBeCalled()
  })
})
