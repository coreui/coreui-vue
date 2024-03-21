import { defineComponent, h } from 'vue'

import { CLink } from '../link/CLink'

const CPaginationItem = defineComponent({
  name: 'CPaginationItem',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: Boolean,
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: String,
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: String,
  },
  setup(props, { slots }) {
    return () => {
      const component = props.as ?? (props.active ? 'span' : 'a')
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
                as: component,
                class: ['page-link'],
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
