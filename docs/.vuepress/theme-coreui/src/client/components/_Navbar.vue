<template>
  <header ref="navbar" class="navbar">
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

    <span ref="siteBrand">
      <RouterLink :to="siteBrandLink">
        <img
          v-if="siteBrandLogo"
          class="logo"
          :src="withBase(siteBrandLogo)"
          :alt="siteBrandTitle"
        />

        <span v-if="siteBrandTitle" class="site-name" :class="{ 'can-hide': siteBrandLogo }">
          {{ siteBrandTitle }}
        </span>
      </RouterLink>
    </span>

    <div class="navbar-links-wrapper" :style="linksWrapperStyle">
      <slot name="before" />

      <NavbarLinks class="can-hide" />

      <slot name="after" />

      <ul class="header-nav ms-auto">
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://community.coreui.io/?_ga=2.213357020.913677526.1627929383-1335655475.1610982176"
            target="_blank"
            rel="noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              class="icon icon-xl"
            >
              <path
                fill="var(--ci-primary-color, currentColor)"
                d="M16.135 0c8.75 0 15.865 7.313 15.865 15.995s-7.104 15.99-15.865 15.99l-16.135 0.016v-16.281c0-8.677 7.375-15.719 16.135-15.719zM16.292 6.083c-3.458-0.005-6.661 1.802-8.448 4.76-1.776 2.943-1.849 6.609-0.198 9.625l-1.781 5.677 6.396-1.432c3.656 1.635 7.953 0.901 10.844-1.854 2.896-2.734 3.818-6.969 2.318-10.661-1.51-3.703-5.12-6.12-9.12-6.115z"
              ></path>
            </svg>
          </a>
        </li>
        <a class="nav-link" href="https://github.com/coreui/coreui-vue/" target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            class="icon icon-xl"
          >
            <path
              fill="var(--ci-primary-color, currentColor)"
              d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
            ></path>
          </svg>
        </a>

        <li class="nav-item">
          <a class="nav-link" href="https://twitter.com/core_ui" target="_blank" rel="noopener">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              class="icon icon-xl"
            >
              <path
                fill="var(--ci-primary-color, currentColor)"
                d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
      <a
        class="btn btn-outline-primary d-lg-inline-block my-2 my-md-0 ms-md-3"
        href="/vue/docs/4.0/getting-started/introduction.html"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon me-2" viewBox="0 0 512 512">
          <polygon
            fill="var(--ci-primary-color, currentColor)"
            points="272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744"
            class="ci-primary"
          ></polygon>
          <path
            fill="var(--ci-primary-color, currentColor)"
            d="M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z"
            class="ci-primary"
          ></path>
        </svg>
        Download
      </a>
      <a class="btn btn-primary d-lg-inline-block my-2 my-md-0 ms-md-3" href="/pro/vue/">
        Get CoreUI PRO
      </a>

      <!-- <ToggleDarkModeButton v-if="enableDarkMode" /> -->

      <NavbarSearch />
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouteLocale, useSiteLocaleData, withBase } from '@vuepress/client'
import { useThemeLocaleData } from '../composables'
import NavbarLinks from './_NavbarLinks.vue'
import ToggleDarkModeButton from './ToggleDarkModeButton.vue'
import ToggleSidebarButton from './_ToggleSidebarButton.vue'

defineEmits(['toggle-sidebar'])

const routeLocale = useRouteLocale()
const siteLocale = useSiteLocaleData()
const themeLocale = useThemeLocaleData()

const navbar = ref<HTMLElement | null>(null)
const siteBrand = ref<HTMLElement | null>(null)
const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value)
const siteBrandLogo = computed(() => themeLocale.value.logo)
const siteBrandTitle = computed(() => siteLocale.value.title)
const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})
const enableDarkMode = computed(() => themeLocale.value.darkMode)

// avoid overlapping of long title and long navbar links
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719
  const navbarHorizontalPadding =
    getCssValue(navbar.value, 'paddingLeft') + getCssValue(navbar.value, 'paddingRight')
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
      linksWrapperMaxWidth.value = 0
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth - navbarHorizontalPadding - (siteBrand.value?.offsetWidth || 0)
    }
  }
  handleLinksWrapWidth()
  window.addEventListener('resize', handleLinksWrapWidth, false)
  window.addEventListener('orientationchange', handleLinksWrapWidth, false)
})

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[property]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}
</script>
