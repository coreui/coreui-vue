import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: String,
  imgSrc: String,
  imgAlt: String,
  imgTop: Boolean,
  imgBottom: Boolean,
  imgLeft:  Boolean,
  imgRight: Boolean,
  imgHeight: String,
  imgWidth: String,
  imgFluid: Boolean
}

export default {
  functional: true,
  name: 'CCardImg',
  props,
  render (h, {props, data}) {
    let staticClass = 'card-img'
    if (props.imgTop)
      staticClass += '-top'
    else if (props.imgRight)
      staticClass += '-right'
    else if (props.imgBottom)
      staticClass += '-bottom'
    else if (props.imgLeft)
      staticClass += '-left'

    return h(
      props.tag || 'img',
      mergeData(data, {
        staticClass,
        class: {'img-fluid': props.imgFluid},
        attrs: {src: props.imgSrc, alt: props.imgAlt, height: props.imgHeight, width: props.imgWidth}
      })
    )
  }
}
