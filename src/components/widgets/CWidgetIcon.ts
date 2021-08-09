
import { defineComponent, h } from "vue"

const CWidgetIconProps = {
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
    iconPadding: {
      type: Boolean,
      default: true,
      require: false
    },
}

const CWidgetIcon = defineComponent({
  name: 'CWidgetIcon',
  props: CWidgetIconProps,
    setup ( props, { slots } ) {
      return () =>  h(
        'div', 
        { 
            class: 'card'
        },
        [
            h(
                'div',
                {
                    class: ['card-body', 'd-flex', 'align-items-center', props.iconPadding ? 'p-3' : 'p-0', `bg-${props.color}`]
                },
                [
                    h(
                        'div',
                        {
                            class: ['mr-3', 'text-white', `bg-${props.color}`, props.iconPadding ? 'p-3' : 'p-4']
                        },
                        slots.default && slots.default()
                    ),
                    h(
                        'div',
                        {},
                        [
                            props.header &&
                            h(
                                'div',
                                {
                                    class: ['text-value', `bg-${props.color}`]
                                },
                                props.header
                            ),
                            props.text && 
                            h(
                                'div',
                                {
                                    class: ['text-muted', 'text-uppercase', 'font-weight-blod', 'small']
                                },
                                props.text
                            )
                        ]
                    )
                ]
            ),
            slots.footer && slots.footer()
        ]
      )
    }
})


export { CWidgetIcon }