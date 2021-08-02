import { defineComponent, h } from "vue"

const CSidebarBrandProps = {
     /**
     * A string of all className you want applied to the base component.
     */
    className: {
        type: String,
        required: false
    } 
}

const CSidebarBrand = defineComponent({
  name: 'CSidebarBrand',
  props: CSidebarBrandProps,
    setup ( props, { slots }) {
      return () =>  h(
        'div', 
        { class: ['sidebar-brand', props.className] },
        slots.default && slots.default()
      )
    }
})

export { CSidebarBrand }