import { defineComponent, h } from "vue"

const CSidebarHeaderProps = {
    /**
     * A string of all className you want applied to the base component.
     */
    className: {
        type: String,
        required: false
    }
}

const CSidebarHeader = defineComponent({
  name: 'CSidebarHeader',
  props: CSidebarHeaderProps,
    setup ( props, { slots }) {
      return () =>  h(
        'div', 
        { class: ['sidebar-header', props.className] },
        slots.default && slots.default()
      )
    }
})

export { CSidebarHeader }