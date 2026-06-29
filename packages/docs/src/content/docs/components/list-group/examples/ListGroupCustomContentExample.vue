<template>
  <CListGroup>
    <CListGroupItem as="a" href="#" active>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.
      </p>
      <small>Donec id elit non mi porta.</small>
    </CListGroupItem>
    <CListGroupItem as="a" href="#">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.
      </p>
      <small class="text-body-secondary">Donec id elit non mi porta.</small>
    </CListGroupItem>
    <CListGroupItem as="a" href="#">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
        blandit.
      </p>
      <small class="text-body-secondary">Donec id elit non mi porta.</small>
    </CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
