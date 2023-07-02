import { cloneVNode, defineComponent, h, inject, onMounted, PropType, Ref, ref } from 'vue'

import { CButton } from '../button'

import { Color, Shape } from '../../props'
import type { Triggers } from '../../types'

const CDropdownToggle = defineComponent({
  name: 'CDropdownToggle',
  props: {
    /**
     * Toggle the active state for the component.
     */
    active: Boolean,
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Enables pseudo element caret on toggler.
     */
    caret: {
      type: Boolean,
      default: true,
    },
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      default: 'button',
    },
    /**
     * Create a custom toggler which accepts any content.
     */
    custom: Boolean,
    /**
     * Toggle the disabled state for the component.
     */
    disabled: Boolean,
    /**
     * @values 'rounded', 'rounded-top', 'rounded-end', 'rounded-bottom', 'rounded-start', 'rounded-circle', 'rounded-pill', 'rounded-0', 'rounded-1', 'rounded-2', 'rounded-3'
     */
    shape: Shape,
    /**
     * Size the component small or large.
     *
     * @values 'sm', 'lg'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['sm', 'lg'].includes(value)
      },
    },
    /**
     * Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret.
     */
    split: Boolean,
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     *
     * @type 'hover' | 'focus' | 'click'
     */
    trigger: {
      type: String as PropType<Triggers>,
      default: 'click',
    },
    /**
     * Set the button variant to an outlined button or a ghost button.
     *
     * @values 'ghost', 'outline'
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return ['ghost', 'outline'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    const togglerRef = ref()
    const dropdownToggleRef = inject('dropdownToggleRef') as Ref<HTMLElement>
    const dropdownVariant = inject('variant') as string
    const visible = inject('visible') as Ref<boolean>
    const setVisible = inject('setVisible') as (_visible?: boolean) => void

    const className = [
      {
        'dropdown-toggle': props.caret,
        'dropdown-toggle-split': props.split,
        active: props.active,
        disabled: props.disabled,
      },
    ]

    const triggers = {
      ...((props.trigger === 'click' || props.trigger.includes('click')) && {
        onClick: () => {
          if (props.disabled) {
            return
          }

          setVisible()
        },
      }),
      ...((props.trigger === 'focus' || props.trigger.includes('focus')) && {
        onfocus: () => {
          if (props.disabled) {
            return
          }

          setVisible(true)
        },
        onblur: () => {
          if (props.disabled) {
            return
          }
          setVisible(false)
        },
      }),
    }

    onMounted(() => {
      if (togglerRef.value) {
        dropdownToggleRef.value = togglerRef.value.$el
      }
    })

    return () =>
      props.custom
        ? slots.default &&
          slots.default().map((slot) =>
            cloneVNode(slot, {
              ref: (el) => {
                togglerRef.value = el
              },
              ...triggers,
            }),
          )
        : dropdownVariant === 'nav-item'
        ? h(
            'a',
            {
              active: props.active,
              class: [
                'nav-link',
                className,
                {
                  show: visible.value,
                },
              ],
              disabled: props.disabled,
              href: '#',
              ref: dropdownToggleRef,
              ...triggers,
            },
            { default: () => slots.default && slots.default() },
          )
        : h(
            CButton,
            {
              class: [
                className,
                {
                  show: visible.value,
                },
              ],
              active: props.active,
              color: props.color,
              disabled: props.disabled,
              ref: (el) => {
                togglerRef.value = el
              },
              shape: props.shape,
              size: props.size,
              ...triggers,
              ...(props.component === 'button' && { type: 'button' }),
              variant: props.variant,
            },
            () =>
              props.split
                ? h('span', { class: 'visually-hidden' }, 'Toggle Dropdown')
                : slots.default && slots.default(),
          )
  },
})

export { CDropdownToggle }
