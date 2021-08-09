
import { defineComponent, h } from "vue"

const CWidgetBrandProps = {
    color: {
        type: String,
        require: false
    },
    rightHeader: {
        type: String,
        require: false
    },
    rightFooter: {
        type: String,
        require: false
    },
    leftHeader: {
        type: String,
        require: false
    },
    leftFooter: {
        type: String,
        require: false
    },
    addHeaderClasses: {
        type: [String, Array, Object],
        require: false
    }
}

const CWidgetBrand = defineComponent({
  name: 'CWidgetBrand',
  props: CWidgetBrandProps,
    setup ( props ) {
      return () =>  h(
        'div', 
        { 
            class: 'card'
        },
        h(
            'div',
            {
                class: ['card-header', 'content-center', 'text-white', 'p-0', `bg-${props.color}`, props.addHeaderClasses]
            },
            h(
                'div',
                {
                    class: 'card-body row text-center',
                },
                [
                    h(
                        'div',
                        {
                            class: 'col-6 border-end'
                        },
                        [
                            props.leftHeader && 
                            h(
                                'div',
                                {
                                    class: 'text-value-lg'
                                },
                                props.leftHeader
                            ),
                            props.leftFooter &&
                            h(
                                'div',
                                {
                                    class: 'text-uppercase text-muted small'
                                },
                                props.leftFooter
                            )
                        ]
                    ),
                    h(
                        'div',
                        {
                            class: 'col-6'
                        },
                        [
                            props.rightHeader &&
                            h(
                                'div',
                                {
                                    class: 'text-value-lg'
                                },
                                props.rightHeader
                            ),
                            props.rightFooter &&
                            h(
                                'div',
                                {
                                    class: 'text-uppercase text-muted small'
                                },
                                props.rightFooter
                            )
                        ]
                    )
                ]
            )
        )
      )
    }
})

export { CWidgetBrand }