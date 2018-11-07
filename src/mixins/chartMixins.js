import { getColor, deepObjectsMerge } from '@coreui/coreui/dist/js/coreui-utilities'

const generatedLabels = {
  computed:{
    generatedLabels() {
      if(this.labels !== undefined)
        return this.labels
      let labels = [];
      for(let i=1; i<=this.data.length; i++)
        labels.push('')
      return labels
    },
  },
}
const generatedColor = {
  computed:{
    generatedColor(){
      return getColor(this.color)
    },
  },
}
const generatedBorderColor = {
  computed:{
    generatedBorderColor(){
      return getColor(this.borderColor)
    },
  },
}
const generatedPointHoverColor = {
  computed:{
    generatedPointHoverColor () {
     if(this.$options.propsData.pointHoverColor === undefined)
       return this.generatedBorderColor
     return getColor(this.pointHoverColor)
    },
  },
}
const generatedOptions = {
  computed:{
    generatedOptions () {
     if(this.$options.propsData.options !== undefined)
       deepObjectsMerge(this.finalOptions, this.options)
     return this.finalOptions
    },
  },
}
export{
  generatedLabels,
  generatedColor,
  generatedBorderColor,
  generatedPointHoverColor,
  generatedOptions
}
