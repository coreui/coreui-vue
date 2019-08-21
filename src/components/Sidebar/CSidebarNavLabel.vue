<template>
  <li class="c-nav-item c-hidden-cn">
    <a class="c-nav-label" v-bind="url ? { href:url } : {}">
      <slot>
        <i v-if="icon" :class="icon"></i>
        {{name}}
      </slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'CSidebarNavLabel',
  props: {
    name: String,
    url: String,
    icon: String,
  }
}
</script>
