import { mount } from '@vue/test-utils'
import CButton from '../../components/button/CButton'
import CPopover from '../CPopover'
import Vue from 'vue'

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
})

const ComponentName = 'c-popover'

const popover = {
  name: 'c-popover',
  value: { 
    content: 'popover', 
    header: 'header',
    html: false,
    closeOnClickOutside: false,
    trigger: 'hover',
    active: true
  }
}

const modifiersPopover = {
  name: 'c-popover',
  value: { 
    content: 'modifiersPopover',
    active: true,
    appendToBody: true,
  },
  modifiers: {
    click: true,
    hover: true
  }
}

const defaultPopover = {
  name: 'c-popover',
  value: 'defaultPopover'
}

const generateWrapper = (config) => {
  return mount(Vue.extend(
    {
      components: { CButton },
      directives: { CPopover },
      data () {
        return {
          button: true
        }
      },
      mounted () {
        setTimeout(() => this.button = false, 10)
      },
      render (h) {
        const button = h(
          'CButton', 
          {
            props: {
              color: 'success'
            },
            directives: [config]
          }, 
          ['button text']
        )
        const content = this.button ? button : h(false)
        return h(
          'div', 
          [content]
        )
      }
    }
  ))
}

let popoverWrapper = generateWrapper(popover)
const modifiersPopoverWrapper = generateWrapper(modifiersPopover)
const defaultPopoverWrapper = generateWrapper(defaultPopover)

describe(ComponentName, () => {
  it('has a name', () => {
    expect(CPopover.name).toBe(ComponentName)
  })
  it('is rendered when activated initially', () => {
    expect(popoverWrapper.find('.popover-old').isVisible()).toBe(true)
  })

  it('destroys correctly', (done) => {
    setTimeout(() => {
      expect(popoverWrapper.find('.btn').exists()).not.toBe(true)
      done()
    }, 11)
  })

  it('properly unbinds directive when Tooltip instance is false', () => {
    let binding = { def: { _tooltip: false } }
    const unbind = CPopover.unbind
    let error = null
    try {
      unbind(null, binding)
    } catch (e) {
      error = e
    }
    expect(error).toBe(null)
  })
})
