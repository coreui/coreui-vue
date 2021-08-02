import { /* computed, */ defineComponent, /* ref, */ h, toRaw, nextTick, reactive } from 'vue'
import { CMultiSelectElement } from './CMultiSelectElement'

const CMultiSelectRenderProps = {
  name: {
    type: String,
    required: false
  },
  form: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },
  value: {
    type: String,
    required: false
  },
  ulClass: {
    type: String,
    required: false
  },
  items: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'div',
    validator(value: string): boolean {
        return ['div', 'select'].includes(value)
    },
  },
  optionsStyle: {
    type: String,
    required: false,
    default: 'checkbox'
  },
}

const CMultiSelectRender = defineComponent({
  name: 'CMultiSelectRender',
  props: CMultiSelectRenderProps,
  emits: ['select-item', 'close-select'],
  setup(props, { emit }) {
    const buildElementBlocks: Function = function (el: any, label:any, flag: boolean) {
      let innerResult: Array<any> = []
      let result:any = ''
      if(typeof el === 'undefined'){
        return ''
      }
      if(flag === true){
        el = toRaw(el)
      }
      if (typeof el.label !== 'undefined') {  //label
        result = h(
          CMultiSelectElement, 
          {  
            ctype: 'c-label',
            label: el.label,
            eltype: props.type,
          }
        )
        return result
      }
      if (flag === true) {  //root
        /*
        if (props.type === 'select'){
          innerResult.push(buildElementBlocks({
            text: 'Select...',
            value: '',
            visible: true,
            eltype: props.type,
            selected: false,
          }, null, false))
        }
        */
        for (let i = 0; i < el.options.length; i++) {
          innerResult.push(buildElementBlocks(el.options[i], null, false))
        }
        result = h(
          CMultiSelectElement, 
          {
            ctype: 'root',
            ulClass: props.ulClass,
            eltype: props.type,
            name: props.name,
            form: props.form
          },
          { default: innerResult }
        )
      } else if (typeof el.options !== 'undefined') {  //ul
        for (let i = 0; i < el.options.length; i++) {
          innerResult.push(buildElementBlocks(el.options[i], null, false))
        }
        result = h(
          CMultiSelectElement, 
          {
            ctype: 'ul',
            eltype: props.type,
          }, 
          { default: innerResult }
        )
      } else {   //li
        result = h(
          CMultiSelectElement,
          {
            ctype: 'li',
            text: el.text,
            value: el.value,
            visible: el.visible,
            eltype: props.type,
            selected: el.selected,
            disabled: el.disabled,
            optionsStyle: props.optionsStyle,
            onSelectitem: function (textAndValue: any) {
              emit('select-item', textAndValue)
            },
            onCloseselect: function () {
              emit('close-select')
            }
          }
        )
      }
      return result
    }
    return () => buildElementBlocks(props.items.array[0], null, true)
  }
})

export { CMultiSelectRender }
