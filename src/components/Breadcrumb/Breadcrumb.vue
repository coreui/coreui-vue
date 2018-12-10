<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" :key="index" v-for="(routeObject, index) in routeRecords">
      <span class="active" v-if="isLast(index)">{{ getName(routeObject) }}</span>
      <router-link :to="routeObject" v-else>{{ getName(routeObject) }}</router-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    routeRecords: function () {
      return this.list.filter((route) => route.name || route.meta.label)
    }
  },
  methods: {
    getName (item) {
      return item.meta && item.meta.label ? item.meta.label : item.name || null
    },
    isLast (index) {
      return index === this.list.length - 1
    }
  }
}
</script>
