import { mount } from '@vue/test-utils'
import CButton from '../../components/button/CButton'
import CTooltip from '../CTooltip'
import Vue from 'vue'

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
})

const ComponentName = 'c-tooltip'

const tooltip = {
  name: 'c-tooltip',
  value: { 
    content: 'tooltip', 
    closeOnClickOutside: false,
    trigger: 'hover',
    active: true
  }
}

const modifiersTooltip = {
  name: 'c-tooltip',
  value: { 
    content: 'modifiersTooltip',
    active: true,
    appendToBody: true,
    html: false
  }
}

const defaultTooltip = {
  name: 'c-tooltip',
  value: 'defaultTooltip'
}

const generateWrapper = (config) => {
  return mount(Vue.extend(
    {
      components: { CButton },
      directives: { CTooltip },
      data () {
        return {
          button: true,
          title: 'tooltip 1'
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

let tooltipWrapper = generateWrapper(tooltip)
const modifiersTooltipWrapper = generateWrapper(modifiersTooltip)
const defaultTooltipWrapper = generateWrapper(defaultTooltip)

describe(ComponentName, () => {
  it('has a name', () => {
    expect(CTooltip.name).toBe(ComponentName)
  })
  it('is rendered when activated initially', () => {
    expect(tooltipWrapper.find('.tooltip-old').isVisible()).toBe(true)
  })

  it('should update title content', done => {
    // todo
    const updatedContent = 'Updated tooltip';
    const wrapper = tooltipWrapper.find('button')
    const instance = wrapper.element._c_tooltip;
    expect(
      tooltipWrapper.find('.tooltip-old .tooltip-old-inner').element.textContent
    ).toBe('tooltip');
    instance.updateTitleContent(updatedContent);
    instance.show();
    expect(
      tooltipWrapper.find('.tooltip-old .tooltip-old-inner').element.textContent
    ).toBe(updatedContent);
    instance.hide();
    done();
  });

  it('destroys correctly', (done) => {
    setTimeout(() => {
      expect(tooltipWrapper.find('.btn').exists()).not.toBe(true)
      done()
    }, 11)
  })

  it('properly unbinds directive when Tooltip instance is false', () => {
    let binding = { def: { _tooltip: false } }
    const unbind = CTooltip.unbind
    let error = null
    try {
      unbind(null, binding)
    } catch (e) {
      error = e
    }
    expect(error).toBe(null)
  })
})
