<template>
  <CSidebar class="border-end" narrow>
    <CSidebarHeader class="border-bottom">
      <CSidebarBrand>
        <svg
          role="img"
          aria-label="CoreUI Logo Signet"
          width="88"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 102 115"
        >
          <g style="fill: currentColor">
            <path
              d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z"
            ></path>
            <path
              d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z"
            ></path>
          </g>
        </svg>
      </CSidebarBrand>
    </CSidebarHeader>
    <CSidebarNav>
      <CTooltip content="Nav item" placement="right">
        <template #toggler="{ id, on }">
          <CNavItem href="#" :aria-describedby="id" v-on="on">
            <CIcon customClassName="nav-icon" :icon="cilSpeedometer" />
          </CNavItem>
        </template>
      </CTooltip>
      <CTooltip content="Nav item" placement="right">
        <template #toggler="{ id, on }">
          <CNavItem href="#" :aria-describedby="id" v-on="on">
            <CIcon customClassName="nav-icon" :icon="cilSpeedometer" />
          </CNavItem>
        </template>
      </CTooltip>
      <CTooltip content="Download" placement="right">
        <template #toggler="{ id, on }">
          <CNavItem href="https://coreui.io" :aria-describedby="id" v-on="on">
            <CIcon customClassName="nav-icon" :icon="cilCloudDownload" />
          </CNavItem>
        </template>
      </CTooltip>
      <CTooltip content="Get CoreUI PRO" placement="right">
        <template #toggler="{ id, on }">
          <CNavItem href="https://coreui.io/pricing/" :aria-describedby="id" v-on="on">
            <CIcon customClassName="nav-icon" :icon="cilCart" />
          </CNavItem>
        </template>
      </CTooltip>
    </CSidebarNav>
  </CSidebar>
</template>

<script setup>
import {
  CNavItem,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CTooltip,
} from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilSpeedometer } from '@coreui/icons'
</script>
