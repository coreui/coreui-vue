import { defineComponent, h } from 'vue'

import { CLink } from '../link/CLink'

const CPaginationItem = defineComponent({
  name: 'CPaginationItem',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: {
      type: Boolean,
      required: false,
    },
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      required: false,
    },
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: {
      type: String,
      default: undefined,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () => {
      const component = props.component ? props.component : props.active ? 'span' : 'a'
      return h(
        'li',
        {
          class: [
            'page-item',
            {
              ['active']: props.active,
              ['disabled']: props.disabled,
            },
          ],
          ...(props.active && { active: props.active, 'aria-current': 'page' }),
        },
        component === 'a'
          ? h(
              CLink,
              {
                class: ['page-link'],
                component: component,
                href: props.href,
              },
              {
                default: () => slots.default && slots.default(),
              },
            )
          : h(component, { class: ['page-link'] }, slots.default && slots.default()),
      )
    }
  },
})

export { CPaginationItem }
