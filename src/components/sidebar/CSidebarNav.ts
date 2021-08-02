import { defineComponent, h } from "vue"

const CSidebarNavProps = {
    /**
     * A string of all className you want applied to the base component.
     */
     className: {
      type: String,
      required: false
  }
}

const CSidebarNav = defineComponent({
  name: 'CSidebarNav',
  props: CSidebarNavProps,
    setup ( props, { slots }) { 
      return () =>  h(
        'ul', 
        { 
          class: ['sidebar-nav', props.className],
        },
        slots.default && slots.default()
      )
    }
})

export { CSidebarNav }