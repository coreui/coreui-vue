<script>
import { mergeData } from 'vue-functional-data-merge'
import pluckProps from '../../utils/pluck-props'
import { assign } from '../../utils/object'
import CLink, { propsFactory as linkPropsFactory } from '../Link/CLink'

const btnProps = {
  block: Boolean,
  pill: Boolean,
  square: Boolean,
  ghost: Boolean,
  size: {
    type: String,
    validator: (value) => ['sm','lg'].indexOf(value) !== -1
  },
  variant: {
    type: String,
    default: 'secondary'
  },
  type: {
    type: String,
    default: 'button'
  },
  pressed: {
    type: Boolean,
    default: null
  },
  textHtml: String
}
export const props = assign(linkPropsFactory(), btnProps)

// Helper functons to minimize runtime memory footprint when lots of buttons on page(TODO: check it)
function isLink (props) {
  return Boolean(props.href || props.to)
}
function isToggle (props) {
  return props.pressed !== null
}

function computeClasses (props) {
  return [
    `btn-${props.variant}`,
    props.pill ? 'btn-pill' : props.square ? 'btn-square' : '',
    {
      [`btn-${props.size}`]: Boolean(props.size),
      [`btn-ghost-${props.variant}`]: props.ghost,
      'btn-block': props.block,
      disabled: props.disabled,
      active: props.pressed
    }
  ]
}

function computePassedProps (props) {
  return isLink(props) ? pluckProps(linkPropsFactory(), props) : null
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
  props: props,
  render (h, { props, data, listeners, children }) {
    const toggle = isToggle(props)
    const isButton = !isLink(props)
    const on = {
      click (e) {
        if (props.disabled && e instanceof Event) {
          e.stopPropagation()
          e.preventDefault()
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send .sync updates to any "pressed" prop (if .sync listeners)
          listeners['update:pressed'](!props.pressed)
        }
      }
    }
    const domProps = children ? '' : { innerHTML: props.textHtml }
    const componentData = {
      staticClass: 'btn',
      class: computeClasses(props),
      props: computePassedProps(props),
      attrs: computeAttrs(props, data, isButton, toggle),
      domProps,
      on
    }
    return h(isButton ? 'button' : CLink , mergeData(data, componentData), children)
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/buttons.scss";
</style>
