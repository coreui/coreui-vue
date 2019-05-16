<template functional>
  <li :class="['c-nav-divider', props.classes]"></li>
</template>

<script>
export default {
  name: 'CSidebarNavDivider',
  props: {
    classes: [String, Array, Object]
  }
}
</script>
