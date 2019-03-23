<template functional>
  <div :class="[data.class, data.staticClass]"
       :style="[data.style, data.staticStyle]"
       role="group"
  >
    <template v-if="props.wrapperClasses">
      <slot name="label"></slot>
      <div :class="props.wrapperClasses">
        <div v-if="props.prependHtml || $slots.prepend" class="input-group-prepend">
          <slot name="prepend">
            <span class="input-group-text" v-html="props.prependHtml"></span>
          </slot>
        </div>
        <slot name="input"></slot>
        <slot name="labelAfterInput"></slot>
        <div v-if="props.appendHtml || $slots.append" class="input-group-append">
          <slot name="append">
            <span class="input-group-text" v-html="props.appendHtml"></span>
          </slot>
        </div>
        <slot name="validFeedback">
          <div v-if="props.validFeedback" :class="props.tooltipFeedback ? 'valid-tooltip' : 'valid-feedback'" v-html="props.validFeedback"></div>
        </slot>
        <slot name="invalidFeedback">
          <div v-if="props.invalidFeedback" :class="props.tooltipFeedback ? 'invalid-tooltip' : 'invalid-feedback'" v-html="props.invalidFeedback"></div>
        </slot>
        <slot name="description">
          <small v-if="props.description" class="form-text text-muted w-100" v-html="props.description"></small>
        </slot>
      </div>
    </template>
    <template v-else>
      <slot name="label"></slot>
      <div v-if="props.prependHtml || $slots.prepend" class="input-group-prepend">
        <slot name="prepend">
          <span class="input-group-text" v-html="props.prependHtml"></span>
        </slot>
      </div>
      <slot name="input"></slot>
      <slot name="labelAfterInput"></slot>
      <div v-if="props.appendHtml || $slots.append" class="input-group-append">
        <slot name="append">
          <span class="input-group-text" v-html="props.appendHtml"></span>
        </slot>
      </div>
      <slot name="validFeedback">
        <div v-if="props.validFeedback" :class="props.tooltipFeedback ? 'valid-tooltip' : 'valid-feedback'" v-html="props.validFeedback"></div>
      </slot>
      <slot name="invalidFeedback">
        <div v-if="props.invalidFeedback" :class="props.tooltipFeedback ? 'invalid-tooltip' : 'invalid-feedback'" v-html="props.invalidFeedback"></div>
      </slot>
      <slot name="description">
        <small v-if="props.description" class="form-text text-muted w-100" v-html="props.description"></small>
      </slot>
    </template>
  </div>
</template>

<script>
import { formGroupProps as props } from './formProps'
export default {
  name: 'CFormGroup',
  inheritAttrs: false,
  props,
  // {
  //   wrapperClasses: [String, Array, Object],
  //   appendHtml: String,
  //   prependHtml: String,
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String
  // },
}
</script>
