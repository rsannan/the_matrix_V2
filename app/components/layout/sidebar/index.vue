<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { links } from './config'

const breakpoints = useBreakpoints(breakpointsTailwind)
const mobileView = breakpoints.smallerOrEqual('md')
const showSidebar = ref(true)

function handleUnFocus() {
  if (mobileView)
    showSidebar.value = true
}
</script>

<template>
  <layout-sidebar-mobile-bar
    v-if="mobileView && showSidebar"
    :links="links"
    @open="showSidebar = false"
  />
  <layout-sidebar-web-bar
    v-else
    :links="links"
    @un-focus="handleUnFocus"
  />
</template>
