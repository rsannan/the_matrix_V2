<script lang="ts" setup>
useAuthStatus()
</script>

<template>
  <div class="relative container mx-auto flex items-center justify-center h-90vh!">
    <ui-alert />
    <slot />
  </div>
</template>
