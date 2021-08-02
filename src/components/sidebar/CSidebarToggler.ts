import { defineComponent, h } from "vue"

const CSidebarTogglerProps = {
    /**
     * A string of all className you want applied to the base component.
     */
    className: {
        type: String,
        required: false
    }  
}

const CSidebarToggler = defineComponent({
  name: 'CSidebarToggler',
  props: CSidebarTogglerProps,
    setup ( props, { slots }) {  
      return () =>  h(
        'button', 
        { class: ['sidebar-toggler', props.className] },
        slots.default && slots.default()
      )
    }
})

export { CSidebarToggler }