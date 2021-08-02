import { defineComponent, h } from 'vue'

const CDropdownDivider = defineComponent({
  name: 'CDropdownDivider',
  setup() {
    return () =>
      h('hr', {
        class: 'dropdown-divider',
      })
  },
})

export { CDropdownDivider }
