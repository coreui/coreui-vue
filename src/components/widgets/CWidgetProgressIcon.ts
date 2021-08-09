
import { defineComponent, h } from "vue"

import { CProgress } from '../progress/CProgress'

const CWidgetProgressIconProps = {
    header: {
        type: String,
        require: false
    },
    text: {
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

const CWidgetProgressIcon = defineComponent({
  name: 'CWidgetProgressIcon',
  props: CWidgetProgressIconProps,
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
                slots.default && 
                h(
                    'div',
                    {
                        class: 'h1 text-muted text-right mb-4'
                    },
                    slots.default()
                ),
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
                    'small',
                    {
                        class: 'text-muted text-uppercase font-weight-bold'
                    },
                    props.text
                ),
                slots.progress ? slots.progress() :
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
                )
            ]
        )
      )
    }
})

export { CWidgetProgressIcon }