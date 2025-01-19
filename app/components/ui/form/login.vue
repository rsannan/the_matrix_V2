<script setup lang="ts">
import * as v from 'valibot'

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(6, 'Must be at least 6 characters')),
})

const state = reactive({
  email: '',
  password: '',
})
const { refresh } = await useFetch('/api/auth/sign-up', {
  method: 'POST',
  body: state,
  immediate: false,
  watch: false,
})
async function onSubmit(event) {
  // Do something with event.data\
  console.log('From submit function', event)
  await refresh()
}
</script>

<template>
  <div class="min-h-100 rounded-lg bg-white px-4 py-5 md:min-w-100 dark:bg-gray-900 sm:p-6">
    <UForm :schema="v.safeParser(schema)" :state="state" class="pt-10 space-y-8" @submit.prevent="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <div class="flex items-center justify-center py-5">
        <UButton
          class="w-1/3"
          icon="i-ph-note-pencil"
          type="submit"
          label="Submit"
        />
      </div>
    </UForm>
  </div>
</template>
