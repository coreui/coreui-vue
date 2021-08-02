import { 
  defineComponent,
  h, 
  onMounted, 
  reactive, 
  withDirectives, 
  nextTick, 
  ref, 
  Ref,
  watch,
} from 'vue'
import { CClickaway } from '../../directives'
import { CMultiSelectRender } from './CMultiSelectRender'

const CMultiSelectProps = {
  /**
   * A string of all className you want applied to the base component.
   */
  className: {
    type: String,
    default: '',
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  form: {
    type: String,
    required: false,
  },
  selected: {
    type: Array,
    required: false,
  },
  search: {
    type: Boolean,
    required: false,
    default: false
  },
  select: {
    type: String,
    required: false,
    default: 'div',
    validator(value: string): boolean {
        return ['div', 'select'].includes(value)
    }
  },
  options: {
    type: [Boolean, Array],
    required: false,
    default: false
  },
  optionsMaxHeight: {
    type: [Number, String],
    required: false,
    default: 'auto'
  },
  optionsStyle: { 
    type: String,
    required: false,
    default: 'checkbox'
  },
  multiple: {
    type: Boolean,
    default: true,
    required: false,
  },
  searchNoResultsLabel: {
    type: String,
    default: 'no items',
    required: false,
  },
  placeholder: {
    type: String,
    default: 'Select...',
    required: false,
  },
  selectionType: {
    type: String,
    default: 'tag',
    required: false,
    validator(value: string): boolean {
      return ['tag', 'counter', 'text'].includes(value)
    },
  },
  selectionTypeCounterText: {
    type: String,
    default: 'item(s) selected',
    required: false,
  },
  cleaner: {
    type: Boolean,
    required: false,
    default: true,
  },
  selectAll: {
    type: Boolean,
    required: false,
    default: true
  },
  selectAllLabel: {
    type: String,
    required: false,
    default: 'Select all options'
  }
}

const CMultiSelect = defineComponent({
  name: 'CMultiSelect',
  props: CMultiSelectProps,
  emits: ['update'],
  setup(props, { slots, emit }) {

    const MULI_SELECT_GROUP = 'CMultiSelectGroup'
    const MULI_SELECT_GROUP_LABEL = 'CMultiSelectGroupLabel'
    const MULI_SELECT_GROUP_OPTION = 'CMultiSelectGroupOption'


    let selected: any = []
    let optionsStructure: any = []
    let optionsStructureNew: any = reactive({array: []})
    let visible: any = reactive({ value: true })
    let ulClass: any = reactive({ value: 'hide' })
    let multi: any = reactive({ value: props.multiple })
    let optionsNotEmpty: any = reactive({value: true})
    let selectedItems: any = reactive({value: []})
    let lastSelected: any = {}
    let searchInput: string = ''
    let searchValue: string = ''
    let singleChar: boolean = false
    let inputPlaceholder: any = reactive({value: props.placeholder})
    const inputRef = ref() as Ref<HTMLElement>


    const ulShow = function () {
      ulClass.value = ''
      visible.value = true
      inputRef.value.focus()
    }

    const ulShowOnClick = function (event: any) {
      if (event.target !== event.currentTarget) {
        ulClass.value = ''
        visible.value = true
        inputRef.value.focus()
      }
    }
    
    const newSlotStructure: Function = function (slot: any, deep: number) {
      let childrenText: any = ''
      let value: string = ''
      let text: string = ''
      let selected: boolean = false
      let disabled: boolean = false
      for (let i = 0; i < slot.length; i++) {
        if (typeof slot[i].type.name == 'undefined') {
          continue
        }
        if (slot[i].type.name === MULI_SELECT_GROUP) {
          text = ''
          putInRightPlace(text, text, 'ul', deep, false, false)
          newSlotStructure(slot[i].children.default(), deep + 1)
        } else if (slot[i].type.name === MULI_SELECT_GROUP_LABEL) {
          childrenText = slot[i].children.default()
          if(typeof childrenText[0].children !== 'undefined'){
            text = childrenText[0].children.trim()
          }else{
            text = ''
          }
          putInRightPlace(text, text, 'label', deep, false, false)
        } else if ( slot[i].type.name === MULI_SELECT_GROUP_OPTION ) {
          childrenText = slot[i].children.default()
          if(typeof childrenText[0].children !== 'undefined'){
            text = childrenText[0].children.trim()
          }else{
            text = ''
          }
          if(typeof slot[i].props !== 'undefined' && slot[i].props !== null && typeof slot[i].props.value !== 'undefined') {
            value = slot[i].props.value
          }else{
            value = text.trim()
          }
          if(
            typeof slot[i].props !== 'undefined' && 
            slot[i].props !== null && 
            typeof slot[i].props.selected !== 'undefined'
          ){
            selected = true
          }else{
            selected = false
          }
          if(            
            typeof slot[i].props !== 'undefined' && 
            slot[i].props !== null && 
            typeof slot[i].props.disabled !== 'undefined'
          ){
            disabled = true
          }else{
            disabled = false
          }
          putInRightPlace(text, value, 'li', deep, selected, disabled)
        }
      }
      return optionsStructure
    }

    const putInRightPlace: Function = function(text: [number, string], value: [number, string], type: string, deep: number, selectedArr: any, disabled: boolean) {
      let arr1 = optionsStructure
      let z = 0
      let thisSelected = selectedArr
      while (typeof arr1 == 'object') {
        if (z === deep) {
          if (type === 'li') {
            if(thisSelected === true){
              selectedItems.value.push({
                value: value,
                text: text,
                disabled: disabled,
              })
            }
          }
          if (type === 'ul') {
            arr1[arr1.length - 1].options.push({
              options: [],
              visible: true,
            })
          } else if (type === 'label') {
            arr1[arr1.length - 1].options.push({
              label: text,
              visible: true,
            })           
          } else if (thisSelected) {
            arr1[arr1.length - 1].options.push({
              value: value,
              text: text,
              visible: true,
              selected: true,
              disabled: disabled
            })
          } else {
            arr1[arr1.length - 1].options.push({
              value: value,
              text: text,
              visible: true,
              selected: false,
              disabled: disabled
            })
          }
          return true
        } else {
          arr1 = arr1[arr1.length - 1].options
          z++
        }
      }
      return true
    }

    const initialSelectedInner: Function = function (arr1: any, value: string) {
      let a = []
      let result: Array<any> = []
      if (typeof arr1.options !== 'undefined') {
        for (let i = 0; i < arr1.options.length; i++) {
          a = initialSelectedInner(arr1.options[i], value)
          if (typeof a == 'object') {
            result = result.concat(a)
          } else {
            result.push({
              value: value,
              text: a
            })
          }
        }
      }
      if (typeof arr1.text !== 'undefined') {
        if (arr1.value === value) {
          result = arr1.text
        }
      }
      return result
    }

    const initialSelected: Function = function (selected: any) {
      let result: any = []
      if (typeof selected == 'undefined') {
        return 0
      }
      for (let i = 0; i < selected.length; i++) {
        result = initialSelectedInner(optionsStructure[0], selected[i])
        if (typeof result == 'string') {
          selectedItems.value.push({
            value: selected[i],
            text: result
          })
        } else {
          for (let j = 0; j < result.length; j++) {
            selectedItems.value.push(result[j])
          }
        }
      }
      onChangeSelectInner(optionsStructure[0], selectedItems.value)
      return 0
    }
    const onChangeSelectInner: Function = function (arr1: any, selected: Array<any>) {
      if (typeof arr1.options === 'object') {
        for (let i = 0; i < arr1.options.length; i++) {
          onChangeSelectInner(arr1.options[i], selected)
        }
      }
      if (typeof arr1.text != 'undefined') {
        if (typeof arr1.selected == 'undefined') {
          arr1['selected'] = false
        }
        arr1.selected = false
        for (let i = 0; i < selected.length; i++) {
          if (arr1.value === selected[i].value) {
            arr1.selected = true
            break
          }
        }
      }
    }

    const selectedTextsRender: Function = function(){
      const selectedRendered: Array<any> = []
      let text: string = ''
      for(let i = 0; i<selectedItems.value.length; i++){
        if(i !== 0){
          text = `, ${selectedItems.value[i].text}`
        }else{
          text = selectedItems.value[i].text
        }
        selectedRendered.push(
          h(
            'span',
            {},
             `${text}  `
           )
         )
      }
      return selectedRendered    
    }

    const selectedTagsRender: Function = function(){
      const selectedRendered: Array<any> = []
        for(let i = 0; i<selectedItems.value.length; i++){
          selectedRendered.push(
            h(
              'span',
              {
                class: 'form-multi-select-tag'
              },
              [
                selectedItems.value[i].text,
                h(
                  'button',
                  {
                    class: 'form-multi-select-tag-delete close',
                    'aria-label': 'Close',
                    onClick: removeSelected,
                    cdata: selectedItems.value[i].value
                  },
                  h(
                    'span',
                    {
                      'aria-hidden': true,
                      cdata: selectedItems.value[i].value
                    },
                    '×'
                  )
                )
              ]
            )
          )
        }
      return selectedRendered
    }

    const emitSelected: Function = function(){
      let selected: Array<any> = []
      for (let i = 0; i < selectedItems.value.length; i++) {
        selected.push(selectedItems.value[i].value)
      }
      emit('update', selected)      
    }

    const removeSelected: Function = function(toRemove: any){
      selectedItems.value = selectedItems.value.filter(function (el: any) {
        if(el.disabled === false){
          if(typeof toRemove === 'string' || typeof toRemove === 'number'){
            return el.value !== toRemove
          }else{
            return el.value.toString() !== toRemove.target.attributes.cdata.value.toString()
          }
        }else{
          return true
        }
      })
      onChangeSelectInner(optionsStructure[0], selectedItems.value)
      emitSelected()
      updatePlaceholder()
      optionsNotEmpty.value = false
      nextTick(function(){
        optionsNotEmpty.value = true
      })     
    }

    const selectAllOptionsInner: Function = function(arr1: any){
      if (typeof arr1.options === 'object') {
        for (let i = 0; i < arr1.options.length; i++) {
          selectAllOptionsInner(arr1.options[i])
        }
      }
      if (typeof arr1.text != 'undefined') {
        if (typeof arr1.selected == 'undefined' || arr1.selected === false) {
          if(arr1.disabled === false){
            selectedItems.value.push({
              text: arr1.text,
              value: arr1.value,
              disabled: arr1.disabled
            })      
          }
        }
      }      
    }

    const selectAllOptions: Function = function(){
      selectAllOptionsInner(optionsStructure[0])
      emitSelected()
      onChangeSelectInner(optionsStructure[0], selectedItems.value)
      updatePlaceholder()
      optionsNotEmpty.value = false
      nextTick(function(){
        optionsNotEmpty.value = true
      })     
    }

    const removeAllSelectedInner: Function = function(selected: Array<any>){
      let result: Array<any> = []
      for(let i = 0; i<selected.length; i++){
        if(selected[i].disabled === true){
          result.push({
            text: selected[i].text,
            value: selected[i].value,
            disabled: selected[i].disabled
          })
        }
      }
      return result
    }

    const removeAllSelected: Function = function(){
      //selectedItems.value = []
      selectedItems.value = removeAllSelectedInner(selectedItems.value)
      emitSelected()
      onChangeSelectInner(optionsStructure[0], selectedItems.value)
      updatePlaceholder()
      optionsNotEmpty.value = false
      nextTick(function(){
        optionsNotEmpty.value = true
      })
    }

    const onSelectItem: Function = function (item: any) {
      searchInput = ''
      let selected = selectedItems.value.filter(function (el: any) {
        return el.value === item.value
      }).length
      //lastSelected = el
      if (selected === 0) {
        if (multi.value === false) {
          selectedItems.value = []
        }
        if(item.disabled === false){
          selectedItems.value.push({
            text: item.text,
            value: item.value,
            disabled: item.disabled
          })
        }
        emitSelected()  
        onChangeSelectInner(optionsStructure[0], selectedItems.value)
        optionsNotEmpty.value = false
        nextTick(function(){
          optionsNotEmpty.value = true
        })
      } else {
        removeSelected(item.value) 
      }
      // clear search input, show all options
      updatePlaceholder()
      singleChar = true
      //inputRef.value.focus()
      const notEmpty = onSearchChangeInner(optionsStructure[0], '')
      optionsNotEmpty.value = !notEmpty
      nextTick(function(){
        optionsNotEmpty.value = notEmpty
      })
    }
    const onSearchChangeInner: Function = function (arr1: any, thisSearchInput: string) {
      let aEmpty = false
      let result = false
      if (typeof arr1.options === 'object') {
        for (let i = 0; i < arr1.options.length; i++) {
          aEmpty = onSearchChangeInner(arr1.options[i], thisSearchInput)
          if (aEmpty === true) {
            result = true
          }
        }
      }
      if (typeof arr1.text !== 'undefined') {
        if (typeof arr1.visible === 'undefined') {
          arr1['visible'] = true
        }
        if (arr1.text.toLowerCase().includes(thisSearchInput.toLowerCase().trim()) || thisSearchInput === '' || thisSearchInput === ' ') {
          arr1.visible = true
          result = true
        } else {
          arr1.visible = false
        }
      }
      return result
    }
    const onSearchChange: Function = function (element: any) {
      let notEmpty: boolean = false
      //element.key === 'Backspace' && TODO: zrobić tak aby rozpoznawało backspace a nie usuwanie ostatniego znaku
      if (element.currentTarget.value === '' && selectedItems.value.length > 0 && singleChar) {
        selectedItems.value.pop()   
        onChangeSelectInner(optionsStructure[0], selectedItems.value)
        emitSelected()
      }
      if(element.currentTarget.value.length === 0){
        singleChar = true
        element.currentTarget.value = ' '
      }
      notEmpty = onSearchChangeInner(optionsStructure[0], element.currentTarget.value)
      optionsNotEmpty.value = !notEmpty
      nextTick(function(){
        optionsNotEmpty.value = notEmpty
      })
      ulShow()
      setTimeout(function(){
        optionsNotEmpty.value = !notEmpty
        nextTick(function(){
          optionsNotEmpty.value = notEmpty
        })      
      }, 1000) 
    }

    const ulClose: Function = function(){     
      ulClass.value = 'hide'
      visible.value = false
    }

    const handleTabPress: Function = function(e: any) {   // TODO: this not working
      if (e.key === 'Tab' && e.shiftKey) {
        ulClose()
      }
    }
 
    const clickAway: Function = function(el: any){
      if(!el.target.classList.contains('form-multi-select-option')){
        ulClose()   
      }
    }
    
    const updatePlaceholder: Function = function(){
      let thisPlaceholder = null
      if (searchInput.length === 0 && multi.value) {
        thisPlaceholder = props.placeholder
      }
      if (props.selectionType === 'counter' && selectedItems.value.length > 0) {
        thisPlaceholder = `${selectedItems.value.length} ${props.selectionTypeCounterText}`
      }
      inputPlaceholder.value = thisPlaceholder      
    }


    const formatOptionsDataForRenderInner: Function = function(notFormatedData: Array<any>, deep: number){
      let value: any = ''
      let text: any = ''
      let selected: boolean = false
      let disabled: boolean = false
      for(let i = 0; i<notFormatedData.length; i++){
        if(typeof notFormatedData[i].value !== 'undefined' || typeof notFormatedData[i].text !== 'undefined'){  //option
          if(typeof notFormatedData[i].value !== 'undefined' && typeof notFormatedData[i].text !== 'undefined'){
            value = notFormatedData[i].value
            text = notFormatedData[i].text
          }else if(typeof notFormatedData[i].value === 'undefined' && typeof notFormatedData[i].text !== 'undefined'){
            value = notFormatedData[i].text
            text = notFormatedData[i].text
          }else if(typeof notFormatedData[i].value !== 'undefined' && typeof notFormatedData[i].text === 'undefined'){
            value = notFormatedData[i].value
            text = notFormatedData[i].value
          }
          if(typeof notFormatedData[i].selected !== 'undefined'){
            selected = true
          }else{
            selected = false
          }
          if(typeof notFormatedData[i].disabled !== 'undefined'){
            disabled = true
          }else{
            disabled = false
          }         
          putInRightPlace(text, value, 'li', deep, selected, disabled)
        }else if(typeof notFormatedData[i].label !== 'undefined' && typeof notFormatedData[i].options === 'undefined'){ //only label
          putInRightPlace(notFormatedData[i].label, notFormatedData[i].label, 'label', deep, selected, disabled)
        }else if(typeof notFormatedData[i].options !== 'undefined'){           //option-group
          if(typeof notFormatedData[i].label !== 'undefined'){ //label and option-group
            putInRightPlace(notFormatedData[i].label, notFormatedData[i].label, 'label', deep, selected, disabled)
          }
          putInRightPlace('', '', 'ul', deep, selected, disabled)
          formatOptionsDataForRenderInner(notFormatedData[i].options, deep + 1)
        }
      }
    }

    const formatOptionsDataForRender: Function = function(notFormatedData: Array<any>){
      formatOptionsDataForRenderInner(notFormatedData, 0)
    }

    watch(() => props.options, () => {
      selectedItems.value = []
      optionsStructure = [{ options: [] }]
      formatOptionsDataForRender(JSON.parse(JSON.stringify(props.options)))
      optionsStructureNew.array = optionsStructure  
    });

    onMounted(function () {
      selected = []
      optionsStructure = [{ options: [] }]
      multi.value = !!props.multiple
      if (typeof props.options !== 'boolean') {
        //data from options array
        //optionsStructure[0].options = formatOptionsDataForRender(JSON.parse(JSON.stringify(props.options)))
        formatOptionsDataForRender(JSON.parse(JSON.stringify(props.options)))
        optionsStructureNew.array = optionsStructure
      } else if (typeof slots.default !== 'undefined') {
        //data from slot
        if (typeof props.selected !== 'undefined') {
          selected = props.selected
        }
        const myslot = slots.default()
        const promise1 = new Promise((resolve) => {
          newSlotStructure(myslot, 0, selected)
          resolve('done')
        })
        promise1.then(function(){
          nextTick(function(){
            optionsStructureNew.array = optionsStructure
            if (optionsStructureNew.array[0].options.length === 0) {
              optionsNotEmpty.value = false
            }
            selected = selectedItems.value
            selectedItems.value = []
            selectedItems.value = selected 
          })
        })
      }
      /*
      if (typeof props.selected !== 'undefined') {
        initialSelected(props.selected)
      }
      */
    })

    return () => withDirectives(h(
      'div', 
      {},
      [ 
        h(
          CMultiSelectRender,
          {
            onSelectItem: onSelectItem,
            items: optionsStructureNew,
            type: 'select',
            name: props.name,
            form: props.form,
          },
        ),
          h(
            'div',
            {
              class: {
                'form-multi-select': true,
                'form-multi-select-multiple': props.multiple,
                'form-multi-select-selection-tags': props.selectionType === 'tag',
                'show': ulClass.value === ''
              },
              onClick: ulShowOnClick,
            },
            [
              (props.selectionType === 'counter') ? 
              h(
                'span',
                {
                  class: 'form-multi-select-selection',
                  onClick: ulShowOnClick
                },
              ) : 
              (props.selectionType === 'tag') ? 
              h(
                'span',
                {
                  class: 'form-multi-select-selection',
                  onClick: ulShowOnClick
                },
                [
                  selectedTagsRender(),
                ]
              ) : 
              (props.selectionType === 'text') ? 
              h(
                'span',
                {
                  class: 'form-multi-select-selection',
                  onClick: ulShowOnClick
                },
                [
                  selectedTextsRender(),
                ]
              ) : '',
              h(
                'button',
                {
                  class: 'form-multi-select-selection-cleaner',
                  style: (props.cleaner && selectedItems.value.length > 0) ? '' : 'display:none;',
                  onClick: removeAllSelected
                },
              ),
              (props.search) ? 
              h(
                'input',
                {
                  ref: inputRef, 
                  class: 'form-multi-select-search',
                  placeholder: inputPlaceholder.value,  
                  type: 'text',
                  modelValue: searchInput,   
                  onInput: onSearchChange,  
                  onFocus: ulShowOnClick,
                  onKeyDown: handleTabPress 
                }
              ) : '',
              (optionsNotEmpty.value === true) ?
              h(
                'div',
                {
                  class: 'form-multi-select-dropdown',
                  style: `${ulClass.value === 'hide' ? 'display: none;' : ''} 
                    max-height: ${props.optionsMaxHeight}px; 
                    ${props.optionsMaxHeight !== 'auto' ? 'overflow: scroll;' : ''}`
                },
                [ 
                  (props.multiple === true && props.selectAll === true) ?
                  h(
                    'button',
                    {
                      class: 'form-multi-select-all',
                      onClick: selectAllOptions
                    },
                    props.selectAllLabel
                  ) : null,
                  h(
                    CMultiSelectRender,
                    {
                      onSelectItem: onSelectItem,
                      onCloseSelect: ulClose,
                      items: optionsStructureNew,
                      ulClass: ulClass,
                      type: 'div',
                      optionsStyle: props.optionsStyle
                    }
                  )
                ] 
              ) : 
              h(
                'div',
                {
                  class: 'form-multi-select-options'
                },
                h(
                  'div',
                  {
                    class: 'form-multi-select-options-empty'
                  },
                  props.searchNoResultsLabel
                )
              )
            ]
          ) //h
        ] //[
      ), // h
      [
        [CClickaway, clickAway]
      ] 
    )
  }
})






export { CMultiSelect }
