<script setup lang="ts">
import * as v from 'valibot'

const emit = defineEmits(['changeForm'])

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(6, 'Must be at least 6 characters')),
  firstName: v.pipe(v.string()),
  lastName: v.pipe(v.string()),
})

const state = reactive({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
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

function handleLogin() {
  emit('changeForm')
  console.log('Login')
}
</script>

<template>
  <div class="min-h-100 flex rounded-lg bg-white px-4 py-5 md:min-w-100 dark:bg-gray-900 sm:p-6">
    <UForm :schema="v.safeParser(schema)" :state="state" class="w-full pt-10 space-y-8" @submit.prevent="onSubmit">
      <div class="flex-center">
        <NuxtImg
          src="logo.png"
          width="200"
          alt="Logo"
          format="webp"
        />
      </div>
      <h5 class="text-center text-3xl">
        Sign Up
      </h5>
      <UFormGroup label="First Name" name="firstName">
        <UInput v-model="state.firstName" />
      </UFormGroup>
      <UFormGroup label="Last Name" name="lastName">
        <UInput v-model="state.lastName" />
      </UFormGroup>
      <UFormGroup label="Email" name="email" required>
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password" required>
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <div class="flex items-center justify-center py-5">
        <UButton
          class="min-w-fit text-center!"
          icon="i-ph-note-pencil"
          type="submit"
          label="Create An Account"
        />
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div>Already have an account? <span class="text-primary cursor-pointer hover:border-b-2 hover:border-b-emerald hover:border-solid" @click="handleLogin">Login Here</span></div>
      </div>
    </UForm>
  </div>
</template>
