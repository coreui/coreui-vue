<template>
  <p class="text-body-secondary">
    Tight pants next level keffiyeh
    <CLink v-c-tooltip="'Tooltip text'"> you&nbsp;probably </CLink>
    haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
    Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel
    <CLink v-c-tooltip="'Tooltip text'"> have&nbsp;a </CLink>
    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu
    biodiesel williamsburg marfa, four loko mcsweeney''s cleanse vegan chambray. A really ironic
    artisan
    <CLink v-c-tooltip="'Tooltip text'"> whatever&nbsp;keytar </CLink>
    scenester farm-to-table banksy Austin
    <CLink v-c-tooltip="'Tooltip text'"> twitter&nbsp;handle </CLink>
    freegan cred raw denim single-origin coffee viral.
  </p>
</template>

<script setup>
import { CLink } from '@coreui/vue'
const customTooltipStyle = {
  '--cui-tooltip-bg': 'var(--cui-primary)',
}
</script>
