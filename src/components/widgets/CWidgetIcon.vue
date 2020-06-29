<template>
  <div class="card">
    <div
      class="card-body d-flex align-items-center"
      :class="iconPadding ? 'p-3' : 'p-0'"
    >
      <div
        class="mr-3 text-white"
        :class="[`bg-${color}`, iconPadding ? 'p-3' : 'p-4']"
      >
        <slot></slot>
      </div>
      <div>
        <div v-if="header" :class="`text-value text-${color}`">
          {{header}}
        </div>
        <div
          v-if="text"
          class="text-muted text-uppercase font-weight-bold small"
        >
          {{text}}
        </div>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'CWidgetIcon',
  props: {
    header: String,
    text: String,
    iconPadding: {
      type: Boolean,
      default: true
    },
    color: String
  }
}
</script>
