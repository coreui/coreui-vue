import { mount } from '@vue/test-utils'
import CButton from '../../components/button/CButton'
import CEmitRootEvent from '../CEmitRootEvent'
import Vue from 'vue'


const ComponentName = 'c-emit-root-event'

const noEventDirective = {
  name: 'c-emit-root-event',
  value: 'event value'
}

const directive = {
  name: 'c-emit-root-event',
  value: 'event value',
  arg: 'event-name'
}

const modifiersDirective = {
  name: 'c-emit-root-event',
  value: 'event value',
  arg: 'event-name',
  modifiers: {
    mouseover: true
  }
}

const generateWrapper = (config) => {
  return mount(Vue.extend(
    {
      components: { CButton },
      directives: { CEmitRootEvent },
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

let wrapper = generateWrapper(directive)
let wrapperModifiers = generateWrapper(modifiersDirective)
let wrapperNoEventName = generateWrapper(noEventDirective)


describe(ComponentName, () => {
  it('has a name', () => {
    expect(CEmitRootEvent.name).toBe(ComponentName)
  })
  it('is sending correct events on root', () => {
    const eventEmitted = jest.fn(() => {})
    wrapper.vm.$root.$on('event-name', eventEmitted)
    expect(eventEmitted).not.toBeCalled()
    wrapper.find('.btn').trigger('click')
    expect(eventEmitted).toBeCalled()
  })

  it('is sending correct events on root by custom listeners', () => {
    const eventEmitted = jest.fn(() => {})
    wrapperModifiers.vm.$root.$on('event-name', eventEmitted)
    expect(eventEmitted).not.toBeCalled()
    wrapperModifiers.find('.btn').trigger('mouseover')
    expect(eventEmitted).toBeCalled()
  })

  // it('properly unbinds directive when Tooltip instance is false', () => {
  //   let binding = { def: { _tooltip: false } }
  //   const unbind = CPopover.unbind
  //   let error = null
  //   try {
  //     unbind(null, binding)
  //   } catch (e) {
  //     error = e
  //   }
  //   expect(error).toBe(null)
  // })
})
