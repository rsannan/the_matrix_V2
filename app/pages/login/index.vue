<script lang="ts" setup>
definePageMeta({
  layout: 'login',
})

const showLogin = ref(false)
</script>

<template>
  <div>
    <ui-form-login
      v-if="showLogin"
      @change-form="showLogin = false"
    />
    <ui-form-signup
      v-else
      @change-form="(showLogin = true, console.log('Change form outside'))"
    />
  </div>
</template>
