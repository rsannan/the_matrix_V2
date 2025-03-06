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
  <UForm :schema="v.safeParser(schema)" :state="state" class="w-full pt-10 space-y-8" @submit.prevent="onSubmit">
    <UFormGroup label="Email" name="email" required>
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password" required>
      <UInput v-model="state.password" type="password" />
    </UFormGroup>
    <UFormGroup label="First Name" name="firstName">
      <UInput v-model="state.firstName" />
    </UFormGroup>
    <UFormGroup label="Last Name" name="lastName">
      <UInput v-model="state.lastName" />
    </UFormGroup>
    <div class="flex items-center justify-center py-5">
      <UButton
        class="text-md"
        icon="i-ph-note-pencil"
        type="submit"
        label="Create An Account"
        size="sm"
        block
      />
    </div>
  </UForm>
</template>
