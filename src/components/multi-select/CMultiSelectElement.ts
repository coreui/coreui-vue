
import { /* computed, */ defineComponent, /* ref, */ h, onMounted, reactive, watch, computed, ref, Ref } from 'vue'


const CMultiSelectElementProps = {
    ctype: { //type of element
        type: String,  
        required: false,
        default: 'li'
    },
    text: { //text
        type: String,
        required: false
    },
    eltype: {  // 'div' | 'select'
        type: String,
        required: false,
        default: 'div',
        validator(value: string): boolean {
            return ['div', 'select'].includes(value)
        },
    },
    value: {
        type: [String, Number],  //TODO: SPRAWDZIĆ CZY TO DOBRY ZAPIS
        required: false,
    },
    visible: {
        type: Boolean,
        required: false,
        default: true
    },
    label: {           
        type: String,
        required: false
    },
    selected: {
        type: Boolean,
        required: false,
        default: false,
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    ulClass: {
        type: Object,
        required: false,
        default: {value: ''}
    },
    name: {
        type: String,
        required: false
    },
    form: {
        type: String,
        required: false
    },
    optionsStyle: {
        type: String,
        required: false,
        default: 'checkbox'
    },
}


const CMultiSelectElement = defineComponent({
  name: 'CMultiSelectElement',
  props: CMultiSelectElementProps,
  emits: ['closeselect', 'selectitem'],
  setup(props, { slots, emit }) {

    const select: any = reactive({value: false})
    const realVisible: any = reactive({value: true})

    const optionRef = ref() as Ref<HTMLElement>

    const emptyGroup: Function = function (el: any) {
        let result = false
        if (el.childElementCount === 1) {
          result = true
        }
        return result
    }
    const lastGroup:Function = function (el: any) {
        let node = el
        let result = false
        for (; ;) {
            node = node.parentElement
            if (typeof node.nextElementSibling != 'undefined' && node.nextElementSibling != null) {
                result = false
                break
            } else {
                if (node.classList.contains('form-multi-select-option') || node.classList.contains('form-multi-select-option-with-checkbox')) {
                    result = true
                    break
                }
            }
        }
        return result
    }
    const handlePressEnter: Function = function(event: any){ 
        if (event.key === 'Enter'){
            emit('selectitem', {value: props.value, text: props.text})
        }
    }
    const handleTabPress: Function = function (e: any) {
        if (!e.shiftKey && e.key === 'Tab') {  
          let node = optionRef.value 
          if (typeof node.nextElementSibling == 'undefined' || node.nextElementSibling == null) {
            if (typeof node.parentElement !== 'undefined' && node.parentElement.classList.contains('form-multi-select-optgroup')) {
              if (lastGroup(node)) {
                emit('closeselect')
              }
            } else {
                emit('closeselect')
            }
          } else {
            if (node.nextElementSibling.className === 'form-multi-select-optgroup' && emptyGroup(node.nextElementSibling)) {
                emit('closeselect')
            }
          }
        }
    }
    const handleClick: Function = function () {
        emit('selectitem', {value: props.value, text: props.text, disabled: props.disabled })
    }

    watch(() => props.visible, (before:any, after:any) => {
        realVisible.value = after !== false;
    });

    onMounted(function () {
        if (typeof props.eltype !== 'undefined' && props.eltype === 'select') {
            select.value = true
        }
        if (props.visible === false) {
            realVisible.value = false
        } 
    })

    return () => (props.ctype === 'li' && realVisible.value && !select.value) ? 
    h(
        'div',
        {
            ref: optionRef,
            class: [
                'form-multi-select-option',
                props.optionsStyle === 'checkbox' ? 'form-multi-select-option-with-checkbox' : null,
                props.selected === true ? 'form-multi-selected' : null,
                props.disabled === true ? 'disabled' : null
            ],
            tabindex: '0',
            onClick: handleClick,
            onKeyUp: handlePressEnter,
            onKeydown: handleTabPress
        },
        props.text
    ) :
    (props.ctype === 'root' && !select.value) ?
    h(
        'div',
        {
            style: props.ulClass.value === 'hide' ? 'display: none;' : '',
            class: 'form-multi-select-options',
        },
        slots.default && slots.default()
    ) :
    (props.ctype === 'c-label' && !select.value) ?
    h(
        'div',
        {
            class: 'form-multi-select-optgroup-label'
        },
        props.label
    ) : 
    (props.ctype === 'ul' && !select.value) ?
    h(
        'div',
        {
            class: 'form-multi-select-optgroup',
        },
        slots.default && slots.default()
    ) :
    (props.ctype === 'li' && realVisible.value && select.value) ?
    h(
        'option',
        {
            selected: props.selected ? 'selected' : null,
            value: props.value,
            onClick: handleClick,
            class: 'form-multi-select-option'
        },
        props.text
    ) : 
    (props.ctype === 'root' && select.value) ?
    h(
        'select',
        {
            form: props.form ? props.form : null,
            name: props.name ? props.name : null,
            class: 'form-multi-select-option',
            multiple: true,
            style: 'display: none;',
            tabindex: '-1'
        },
        slots.default && slots.default()
    ) : 
    (props.ctype === 'ul' && select.value) ? 
    h(
        'optgroup',
        {
            label: props.label,
            class: 'form-multi-select-optgroup'
        },
        slots.default && slots.default()
    ) : ''
  }

})


export { CMultiSelectElement }
