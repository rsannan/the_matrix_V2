<script lang="ts" setup>
useAuthStatus()
</script>

<template>
  <div class="relative h-vh flex font-roboto md:container">
    <!-- <layout-sidebar /> -->
    <layout-vertical-navigation />
    <ui-alert />
    <slot />
  </div>
</template>
