<script setup lang="ts">
import * as v from 'valibot'

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

const pending = ref(false)

async function onSubmit() {
  try {
    pending.value = true
    await signUp(state)
    navigateTo('/')
  }
  finally {
    pending.value = false
  }
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
        :loading="pending"
      />
    </div>
  </UForm>
</template>
