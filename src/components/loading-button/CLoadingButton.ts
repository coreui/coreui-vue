import { defineComponent, h } from "vue"
import { CButton } from '../button/CButton'
import { Color } from "../props"

const CLoadingButtonProps = {
    loading: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Toggle the active state for the component.
     */
     active: {
      type: Boolean,
      default: false,    
      required: false
    },
    /**
     * A string of all className you want applied to the base component.
     */
    className: {
      type: String,
      required: false
    },
    /**
    * Sets the color context of the component to one of CoreUI’s themed colors.
    */
    color: Color,
    /**
    * Component used for the root node. Either a string to use a HTML element or a component.
    */
    component: {
      type: String,
      required: false
    },
    /**
     * Toggle the disabled state for the component.
     */
    disabled: {
      type: Boolean,
      required: false
    },
    /**
     * The href attribute specifies the URL of the page the link goes to.
     */
    href: {
      type: String,
      required: false
    },
    /**
     * The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers.
     */
    role: {
      type: String,
      required: false
    },
    /**
     * Select the shape of the component.
     */
    shape: {
      type: String,
      required: false
    },
    /**
     * Size the component small or large.
     */
    size: {
      type: String,
      required: false
    },
    /**
     * Specifies the type of button. Always specify the type attribute for the <button> element.
     * Different browsers may use different default types for the <button> element.
     */
    type: {
      type: String,
      required: false
    },
    /**
     * Set the button variant to an outlined button or a ghost button.
     */
    variant:{
      type: String,
      required: false
    }  
}

const CLoadingButton = defineComponent({
  name: 'CLoadingButton',
  props: CLoadingButtonProps,
    setup ( props, { slots }) {
      return () =>  h(
        CButton, 
        {
          active: props.active,
          className: ['btn-loading', props.className, props.loading ? 'is-loading' : null],
          color: props.color,
          component: props.component,
          disabled: props.disabled,
          href: props.href,
          role: props.role,
          shape: props.shape,
          size: props.size,
          type: props.type,
          variant: props.variant
        },
        slots.default && slots.default()
      )
    }
})

export { CLoadingButton }