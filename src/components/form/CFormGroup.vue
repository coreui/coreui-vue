<template>
  <div role="group">
    <template v-if="wrapperClasses">
      <slot name="label"></slot>
      <div :class="wrapperClasses">
        <div
          v-if="prepend || $slots.prepend|| $slots['prepend-content']"
          class="input-group-prepend"
        >
          <slot name="prepend">
            <span class="input-group-text">
              <slot name="prepend-content">{{prepend}}</slot>
            </span>
          </slot>
        </div>
        <slot name="input"></slot>
        <slot name="label-after-input"></slot>
        <div
          v-if="append || $slots.append || $slots['append-content']"
          class="input-group-append"
        >
          <slot name="append">
            <span class="input-group-text">
              <slot name="append-content">{{append}}</slot>
            </span>
          </slot>
        </div>
        <slot name="valid-feedback">
          <div
            v-if="validFeedback"
            :class="tooltipFeedback ? 'valid-tooltip' : 'valid-feedback'"
            v-text="validFeedback"
          ></div>
        </slot>
        <slot name="invalid-feedback">
          <div
            v-if="invalidFeedback"
            :class="tooltipFeedback ? 'invalid-tooltip' : 'invalid-feedback'"
            v-text="invalidFeedback"
          ></div>
        </slot>
        <slot name="description">
          <small
            v-if="description"
            class="form-text text-muted w-100"
            v-text="description"
          ></small>
        </slot>
      </div>
    </template>
    <template v-else>
      <slot name="label"></slot>
      <div
        v-if="prepend || $slots.prepend || $slots['prepend-content']"
        class="input-group-prepend"
      >
        <slot name="prepend">
          <span class="input-group-text">
            <slot name="prepend-content">{{prepend}}</slot>
          </span>
        </slot>
      </div>
      <slot name="input"></slot>
      <slot name="label-after-input"></slot>
      <div
        v-if="append || $slots.append || $slots['append-content']"
        class="input-group-append"
      >
        <slot name="append">
          <span class="input-group-text">
            <slot name="append-content">{{append}}</slot>
          </span>
        </slot>
      </div>
      <slot name="valid-feedback">
        <div
          v-if="validFeedback"
          :class="tooltipFeedback ? 'valid-tooltip' : 'valid-feedback'"
          v-text="validFeedback"
        ></div>
      </slot>
      <slot name="invalid-feedback">
        <div
          v-if="invalidFeedback"
          :class="tooltipFeedback ? 'invalid-tooltip' : 'invalid-feedback'"
          v-text="invalidFeedback"
        ></div>
      </slot>
      <slot name="description">
        <small
          v-if="description"
          class="form-text text-muted w-100"
          v-text="description"
        ></small>
      </slot>
    </template>
  </div>
</template>

<script>
import { formGroupProps as props } from './form-props'
export default {
  name: 'CFormGroup',
  inheritAttrs: false,
  props,
  // {
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,

  //   append: String,
  //   prepend: String,

  //   wrapperClasses: [String, Array, Object],
  // },
}
</script>
