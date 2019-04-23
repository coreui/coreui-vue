<template functional>
  <li :class="['divider', props.classes]"></li>
</template>

<script>
export default {
  name: 'CSidebarNavDivider',
  props: {
    class: [String, Array, Object]
  }
}
</script>
