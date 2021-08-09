
import { defineComponent, h } from "vue"

import { CProgress } from '../progress/CProgress'

const CWidgetProgressProps = {
    header: {
        type: String,
        require: false
    },
    text: {
        type: String,
        require: false
    },
    footer: {
        type: String,
        require: false
    },
    color: {
        type: String,
        require: false
    },
    inverse: {
        type: Boolean,
        require: false,
    },
    value: {
      type: Number,
      default: 25,
      require: false
    }
}

const CWidgetProgress = defineComponent({
  name: 'CWidgetProgress',
  props: CWidgetProgressProps,
    setup ( props, { slots } ) {
      return () =>  h(
        'div', 
        { 
            class: [props.inverse ? `card text-white bg-${props.color}` : 'card']
        },
        h(
            'div',
            {
                class: 'card-body'
            },
            [
                props.header &&
                h(
                    'div',
                    {
                        class: 'h4 m-0'
                    },
                    props.header
                ),
                props.text &&
                h(
                    'div',
                    {},
                    props.text
                ),
                slots.default ? slots.default() :
                h(
                    CProgress,
                    {
                        color: !props.inverse ? props.color : '',
                        value: props.value,
                        class: [ 
                            props.inverse ? 'progress-white' : '', 
                            'progress-xs',
                            'my-3',
                            'mb-0'
                        ]
                    }
                ),
                props.footer &&
                h(
                    'small',
                    {
                        class: 'text-muted'
                    },
                    props.footer
                )
            ]
        )
      )
    }
})

export { CWidgetProgress }