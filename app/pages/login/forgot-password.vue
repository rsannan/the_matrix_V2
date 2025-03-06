<script lang="ts" setup>
import * as v from 'valibot'

definePageMeta({
  layout: 'login',
})

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
})

const state = reactive({
  email: '',
})
const { refresh, status } = await useFetch('/api/auth/reset-password', {
  method: 'POST',
  body: state,
  immediate: false,
  watch: false,
  key: 'forgot-password',
})

const pending = computed(() => status.value === 'pending')

async function onSubmit() {
  console.log('onSubmit', state)
  await refresh()
}
</script>

<template>
  <UCard
    class="w-90% lg:w-35% md:w-60% xl:w-30%"
  >
    <div class="text-center">
      Reset your password
    </div>
    <UForm :schema="v.safeParser(schema)" :state="state" class="w-full pt-10 space-y-8" @submit.prevent="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>
      <div class="flex items-center justify-center py-5">
        <UButton
          class="text-md"
          icon="i-ph-note-pencil"
          type="submit"
          label="Reset Password"
          size="sm"
          block
          :loading="pending"
        />
      </div>
    </UForm>
  </UCard>
</template>
