import { defineComponent, h } from "vue"


const CSidebarProps = {
     /**
     * A string of all className you want applied to the base component.
     */
      className: {
        type: String,
        required: false
    },
    // hide?: boolean
    narrow: {
        type: Boolean,
        required: false
    },
    /**
        * Method called before the hide animation has started.
        */
    //onHide?: () => void,
    /**
        * Method called before the show animation has started.
        */
    //onShow?: () => void,

    overlaid: {
        type: String,
        required: false
    },
    position: {
        type: String,
        validator: function(value:string) {
            return ['fixed','sticky'].includes(value)
        }
    },
    selfHiding: {
        validator: function(value:any) {
            if(typeof value === 'string'){
                return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(value)
            }else if( typeof value === 'boolean' ){
                return true
            }else{
                return false
            }
        }   
    },
    show: {
        type: String,
        required: false
    },
    unfoldable: {
        type: String,
        required: false
    }    
}

const CSidebar = defineComponent({
  name: 'CSidebar',
  props: CSidebarProps,
    setup ( props, { slots }) {
      return () =>  h(
        'div', 
        { 
            class: [
                'sidebar',
                {
                  'sidebar-narrow': props.narrow,
                  'sidebar-overlaid': props.overlaid,
                  [`sidebar-${props.position}`]: props.position,
                  [`sidebar-self-hiding${typeof props.selfHiding !== 'boolean' && '-' + props.selfHiding}`]: props.selfHiding,
                  'sidebar-narrow-unfoldable': props.unfoldable,
                  'show': props.show,
                },
                props.className,
            ],
        },
        slots.default && slots.default()
      )
    }
})

export { CSidebar }