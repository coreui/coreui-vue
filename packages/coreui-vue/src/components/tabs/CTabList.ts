import { defineComponent, h, ref } from 'vue'
import { getNextActiveElement } from '../../utils'

const CTabList = defineComponent({
  name: 'CTabList',
  props: {
    /**
     * Specify a layout type for component.
     *
     * @values 'fill', 'justified'
     */
    layout: {
      type: String,
      validator: (value: string) => {
        return ['fill', 'justified'].includes(value)
      },
    },
    /**
     * Set the nav variant to tabs or pills.
     *
     * @values 'pills', 'tabs', 'underline', 'underline-border'
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return ['pills', 'tabs', 'underline', 'underline-border'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    const tabListRef = ref<HTMLDivElement>()

    const handleKeydown = (event: KeyboardEvent) => {
      if (
        tabListRef.value &&
        (event.key === 'ArrowDown' ||
          event.key === 'ArrowUp' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowRight' ||
          event.key === 'Home' ||
          event.key === 'End')
      ) {
        event.preventDefault()
        const target = event.target as HTMLElement
        // eslint-disable-next-line unicorn/prefer-spread
        const items: HTMLElement[] = Array.from(
          tabListRef.value.querySelectorAll('.nav-link:not(.disabled):not(:disabled)'),
        )

        let nextActiveElement

        if (event.key === 'Home' || event.key === 'End') {
          nextActiveElement = event.key === 'End' ? items.at(-1) : items[0]
        } else {
          nextActiveElement = getNextActiveElement(
            items,
            target,
            event.key === 'ArrowDown' || event.key === 'ArrowRight',
            true,
          )
        }

        if (nextActiveElement) {
          nextActiveElement.focus({ preventScroll: true })
        }
      }
    }

    return () =>
      h(
        'div',
        {
          class: [
            'nav',
            {
              [`nav-${props.layout}`]: props.layout,
              [`nav-${props.variant}`]: props.variant,
            },
          ],
          role: 'tablist',
          onKeydown: (event) => handleKeydown(event),
          ref: tabListRef,
        },
        slots.default && slots.default(),
      )
  },
})

export { CTabList }
