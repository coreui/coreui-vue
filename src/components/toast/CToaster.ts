import { defineComponent, h } from 'vue'

const CToaster = defineComponent({
  name: 'CToaster',
  props: {
    /**
     * Describes the placement of component.
     *
     * @values 'top-start', 'top', 'top-end', 'middle-start', 'middle', 'middle-end', 'bottom-start', 'bottom', 'bottom-end'
     */
    placement: {
      type: String,
      default: undefined,
      require: false,
      validator: (value: string) => {
        return [
          'top-start',
          'top-center',
          'top-end',
          'middle-start',
          'middle-center',
          'middle-end',
          'bottom-start',
          'bottom-center',
          'bottom-end',
        ].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: [
            'toaster toast-container p-3',
            {
              'position-fixed': props.placement,
              'top-0': props.placement && props.placement.includes('top'),
              'top-50 translate-middle-y': props.placement && props.placement.includes('middle'),
              'bottom-0': props.placement && props.placement.includes('bottom'),
              'start-0': props.placement && props.placement.includes('start'),
              'start-50 translate-middle-x': props.placement && props.placement.includes('center'),
              'end-0': props.placement && props.placement.includes('end'),
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CToaster }
