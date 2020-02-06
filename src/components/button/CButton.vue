<script>
import { mergeData } from 'vue-functional-data-merge'
import { pickByKeys } from '@coreui/utils/src'
import CLink, { propsFactory as linkPropsFactory } from '../link/CLink'

const btnProps = {
  block: Boolean,
  shape: {
    type: String,
    validator: shape => ['','pill', 'square'].includes(shape)
  },
  variant: {
    type: String,
    validator: val => ['', 'ghost', 'outline'].includes(val)
  },
  size: {
    type: String,
    validator: value => ['', 'sm', 'lg'].includes(value)
  },
  color: String,
  type: {
    type: String,
    default: 'button'
  },
  pressed: {
    type: Boolean,
    default: null
  }
}
const props = Object.assign(linkPropsFactory(), btnProps)

// Helper functons to minimize runtime memory footprint when lots of buttons on page(TODO: check it)
function isLink (props) {
  return Boolean(props.href || props.to)
}
function isToggle (props) {
  return props.pressed !== null
}

function computeClasses (props) {
  const outlineSuffix = props.variant === 'outline' ? 'outline-' : ''
  return {
    [`btn-${outlineSuffix}${props.color}`]: props.color,
    [`btn-${props.size}`]: props.size,
    [`btn-ghost-${props.color}`]: props.variant === 'ghost',
    'btn-block': props.block,
    'btn-pill': props.shape === 'pill',
    'btn-square': props.shape === 'square',
    'disabled': props.disabled,
    'active': props.pressed
  }
}

function computePassedProps (props) {
  if (!isLink(props)) {
    return null
  }
  return pickByKeys(props, Object.keys(linkPropsFactory()))
}

function computeAttrs (props, data, isButton, toggle) {
  return {
    type: isButton ? props.type : null,
    // in CLink disabled property works diffrently
    disabled: isButton ? props.disabled : null,
    'aria-pressed': toggle ? String(props.pressed) : null,
    // autocomplete off is needed in toggle mode to prevent some browsers from
    // remembering the previous setting when using the back button.
    autocomplete: toggle ? 'off' : null,
  }
}

export default {
  functional: true,
  name: 'CButton',
  props,
  render (h, { props, data, listeners, children }) {
    const toggle = isToggle(props)
    const isButton = !isLink(props)
    const on = {
      click () {
        if (toggle && listeners && listeners['update:pressed']) {
          // Send .sync updates to "pressed" prop (if .sync listener is set)
          listeners['update:pressed'](!props.pressed)
        }
      }
    }
    const componentData = {
      staticClass: 'btn',
      class: computeClasses(props),
      props: computePassedProps(props),
      attrs: computeAttrs(props, data, isButton, toggle),
      on
    }
    return h(
      isButton ? 'button' : CLink, 
      mergeData(data, componentData), 
      children
    )
  }
}
</script>
