import { defineComponent, h } from 'vue'

const CImage = defineComponent({
  name: 'CImage',
  props: {
    /**
     * Set the horizontal aligment.
     *
     * @values 'start', 'center', 'end'
     */
    align: {
      type: String,
      validator: (value: string) => {
        return ['start', 'center', 'end'].includes(value)
      },
    },
    /**
     * Make image responsive.
     */
    fluid: Boolean,
    /**
     * Make image rounded.
     */
    rounded: Boolean,
    /**
     * Give an image a rounded 1px border appearance.
     */
    thumbnail: Boolean,
  },
  setup(props) {
    return () =>
      h('img', {
        class: [
          {
            [`float-${props.align}`]:
              props.align && (props.align === 'start' || props.align === 'end'),
            'd-block mx-auto': props.align && props.align === 'center',
            'img-fluid': props.fluid,
            rounded: props.rounded,
            'img-thumbnail': props.thumbnail,
          },
        ],
      })
  },
})
export { CImage }
