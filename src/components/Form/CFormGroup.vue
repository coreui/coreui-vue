<template functional>
  <div :class="[data.class, data.staticClass]"
       :style="[data.style, data.staticStyle]"
       role="group"
  >
    <template v-if="props.wrapperClasses">
      <slot name="label"></slot>
      <div :class="props.wrapperClasses">
        <div
          v-if="props.prependHtml || $slots.prepend"
          class="c-input-group-prepend"
        >
          <slot name="prepend">
            <span
              class="c-input-group-text"
              v-html="props.prependHtml"
            ></span>
          </slot>
        </div>
        <slot name="input"></slot>
        <slot name="label-after-input"></slot>
        <div
          v-if="props.appendHtml || $slots.append"
          class="c-input-group-append"
        >
          <slot name="append">
            <span
              class="c-input-group-text"
              v-html="props.appendHtml"
            ></span>
          </slot>
        </div>
        <slot name="valid-feedback">
          <div
            v-if="props.validFeedback"
            :class="props.tooltipFeedback ? 'c-valid-tooltip' : 'c-valid-feedback'"
            v-text="props.validFeedback"
          ></div>
        </slot>
        <slot name="invalid-feedback">
          <div
            v-if="props.invalidFeedback"
            :class="props.tooltipFeedback ? 'c-invalid-tooltip' : 'c-invalid-feedback'"
            v-text="props.invalidFeedback"
          ></div>
        </slot>
        <slot name="description">
          <small
            v-if="props.description"
            class="c-form-text c-text-muted c-w-100"
            v-text="props.description"
          ></small>
        </slot>
      </div>
    </template>
    <template v-else>
      <slot name="label"></slot>
      <div
        v-if="props.prependHtml || $slots.prepend"
        class="c-input-group-prepend"
      >
        <slot name="prepend">
          <span
            class="c-input-group-text"
            v-html="props.prependHtml"
          ></span>
        </slot>
      </div>
      <slot name="input"></slot>
      <slot name="label-after-input"></slot>
      <div
        v-if="props.appendHtml || $slots.append"
        class="c-input-group-append"
      >
        <slot name="append">
          <span
            class="c-input-group-text"
            v-html="props.appendHtml"
          ></span>
        </slot>
      </div>
      <slot name="valid-feedback">
        <div
          v-if="props.validFeedback"
          :class="props.tooltipFeedback ? 'c-valid-tooltip' : 'c-valid-feedback'"
          v-text="props.validFeedback"
        ></div>
      </slot>
      <slot name="invalid-feedback">
        <div
          v-if="props.invalidFeedback"
          :class="props.tooltipFeedback ? 'c-invalid-tooltip' : 'c-invalid-feedback'"
          v-text="props.invalidFeedback"
        ></div>
      </slot>
      <slot name="description">
        <small
          v-if="props.description"
          class="c-form-text c-text-muted c-w-100"
          v-text="props.description"
        ></small>
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

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/forms.scss";
  @import "~@coreui/coreui/scss/partials/input-group.scss";
  @import "~@coreui/coreui/scss/partials/grid.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_sizing.scss";

</style>
