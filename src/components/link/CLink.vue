<script>
import { mergeData } from 'vue-functional-data-merge'

export function propsFactory () {
  return {
    href: String,
    rel: String,
    target: {
      type: String,
      default: '_self'
    },
    disabled: Boolean,
    active: Boolean,

    //these are router-link component props (default active class changed)
    activeClass: {
      type: String,
      default: 'router-link-active'
    },
    append: Boolean,
    event: {
      type: [String, Array],
      default: 'click'
    },
    exact: Boolean,
    exactActiveClass: {
      type: String,
      default: 'router-link-exact-active'
    },
    replace: Boolean,
    routerTag: {
      type: String,
      default: 'a'
    },
    to: [String, Object]
  }
}

export const props = propsFactory()

function getComputedTag ({to, disabled}, parent) {
  return Boolean(parent.$router) && to && !disabled ? 'router-link' : 'a'
}

function clickHandlerFactory ({ disabled, tag, href, suppliedHandler }) {
  return function onClick (e) {
    if (disabled && e instanceof Event) {
      // Stop event from bubbling up.
      e.stopPropagation()
      // Kill the event loop attached to this specific EventTarget.
      e.stopImmediatePropagation()
    } else if (typeof suppliedHandler === 'function') {
      suppliedHandler(...arguments)
    }

    if ((tag !== 'router-link' && href === '#') || disabled) {
      // Stop scroll-to-top behavior or navigation.
      e.preventDefault()
    }
  }
}

export default {
  functional: true,
  name: 'CLink',
  props,
  render (h, { props, data, parent, children }) {
    const tag = getComputedTag(props, parent)
    const rel = props.target === '_blank' && !props.rel ? 'noopener' : props.rel
    const href = props.href || '#'

    const eventType = tag === 'router-link' ? 'nativeOn' : 'on'
    const suppliedHandler = (data[eventType] || {}).click
    const handlers = { click: clickHandlerFactory(
      { tag, href, disabled: props.disabled, suppliedHandler }
    )}

    const tabindex = data.attrs ? data.attrs.tabindex : null

    const componentData = mergeData(data, {
      class: {
        'disabled': props.disabled,
        'active': props.active
      },
      attrs: {
        rel,
        href,
        target: props.target,
        tabindex: props.disabled ? '-1' : tabindex,
        'aria-disabled': tag === 'a' && props.disabled ? 'true' : null
      },
      props: Object.assign(props, { tag: props.routerTag })
    })

    // If href prop exists on router-link (even undefined or null) it fails working on SSR
    if (tag === 'router-link') {
      delete componentData.attrs.href
    }

    // We want to overwrite any click handler since our callback
    // will invoke the supplied handler if !props.disabled
    componentData[eventType] = Object.assign(componentData[eventType] || {}, handlers)

    return h(tag, componentData, children)
  }
}
</script>
