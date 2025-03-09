<script lang="ts" setup>
const { success, warn, danger } = useAlert()
async function handleSignOut() {
  await signOut()
}
</script>

<template>
  <div>
    <h1>
      Test
    </h1>
    <UButton @click="handleSignOut">
      Sign Out
    </UButton>
    <div class="flex-center gap-4">
      <UButton @click="success('This is a success message', 'Success')">
        Success
      </UButton>
      <UButton @click="warn('This is a warning message', 'Warning')">
        Warn
      </UButton>
      <UButton @click="danger('This is a danger message', 'Danger')">
        Danger
      </UButton>
    </div>
  </div>
</template>
