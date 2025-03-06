<script lang="ts" setup>
import * as v from 'valibot'

definePageMeta({
  layout: 'login',
})

const schema = v.object({
  password: v.pipe(v.string(), v.minLength(6, 'Must be at least 6 characters')),
})

const state = reactive({
  password: '',
})

const { refresh, status } = await useFetch('/api/auth/update-password', {
  method: 'POST',
  body: state,
  immediate: false,
  watch: false,
  key: 'update-password',
})

const pending = computed(() => status.value === 'pending')

async function onSubmit() {
  await refresh()
}
</script>

<template>
  <UCard
    class="w-90% lg:w-35% md:w-60% xl:w-30%"
  >
    <div class="text-center">
      Choose a new password
    </div>
    <UForm :schema="v.safeParser(schema)" :state="state" class="w-full pt-10 space-y-8" @submit.prevent="onSubmit">
      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" />
      </UFormGroup>
      <div class="flex items-center justify-center py-5">
        <UButton
          class="text-md"
          icon="i-ph-note-pencil"
          type="submit"
          label="Update Password"
          size="sm"
          block
          :loading="pending"
        />
      </div>
    </UForm>
  </UCard>
</template>
