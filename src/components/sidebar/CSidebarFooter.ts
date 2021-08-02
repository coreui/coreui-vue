import { defineComponent, h } from "vue"

const CSidebarFooterProps = {
    /**
     * A string of all className you want applied to the base component.
     */
    className: {
        type: String,
        required: false
    } 
}

const CSidebarFooter = defineComponent({
  name: 'CSidebarFooter',
  props: CSidebarFooterProps,
    setup ( props, { slots }) {
      return () =>  h(
        'div', 
        { class: ['sidebar-footer', props.className] },
        slots.default && slots.default()
      )
    }
})

export { CSidebarFooter }