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

const pending = ref(false)

async function onSubmit() {
  try {
    pending.value = true
    await resetPassword(state.email)
  }
  finally {
    pending.value = false
  }
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
