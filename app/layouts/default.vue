<script lang="ts" setup>
useAuthStatus()
</script>

<template>
  <div class="h-vh flex font-roboto md:container">
    <!-- <layout-sidebar /> -->
    <layout-vertical-navigation />

    <slot />
  </div>
</template>
