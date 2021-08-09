
import { defineComponent, h } from "vue"

const CWidgetDropdownProps = {
    color: {
        type: String,
        require: false
    },
    header: {
        type: String,
        require: false
    },
    text: {
        type: String,
        require: false
    },
}

const CWidgetDropdown = defineComponent({
  name: 'CWidgetDropdown',
  props: CWidgetDropdownProps,
    setup ( props, { slots } ) {
      return () =>  h(
        'div', 
        { 
            class: ['card', 'text-white', `bg-${props.color}`]
        },
        [
            h(
                'div',
                {
                    class: 'card-body pb-0 d-flex justify-content-between'
                },
                [
                    props.header &&
                    h(
                        'div',
                        {
                            class: 'text-value-lg'
                        },
                        props.header
                    ),
                    props.text &&
                    h(
                        'div',
                        {},
                        props.text
                    ),
                    slots.default && slots.default()
                ]
            ),
            slots.footer && slots.footer()
        ]
      )
    }
})

export { CWidgetDropdown }