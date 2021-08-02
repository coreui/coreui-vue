import { defineComponent, h } from 'vue'

const CForm = defineComponent({
  name: 'CForm',
  props: {
    /**
     * Mark a form as validated. If you set it `true`, all validation styles will be applied to the forms component.
     */
    validated: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'form',
        { class: [{ ['was-validated']: props.validated }] },
        slots.default && slots.default(),
      )
  },
})

export { CForm }
