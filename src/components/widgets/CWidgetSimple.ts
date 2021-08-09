import { defineComponent, h } from "vue"

const CWidgetSimpleProps = {
    header: {
        type: String,
        require: false
    },
    text: {
        type: String,
        require: false
    },
}

const CWidgetSimple = defineComponent({
  name: 'CWidgetSimple',
  props: CWidgetSimpleProps,
    setup ( props ) {
      return () =>  h(
        'div', 
        { 
            class: 'card'
        },
        h(
            'div',
            {
                class: 'card-body text-center'
            },
            [
                props.header &&  
                h(
                    'div',
                    {
                        class: 'text-muted small text-uppercase font-weight-bold',
                    },
                    props.header
                ),
                props.text &&
                h(
                    'div',
                    {
                        class: 'h2 py-3'
                    },
                    props.text
                )
            ]
        )
      )
    }
})

export { CWidgetSimple }