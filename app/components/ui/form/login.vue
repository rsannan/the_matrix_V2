<script setup lang="ts">
import * as v from 'valibot'

const emit = defineEmits(['changeForm'])

const { user, setUser } = useSession()
const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(6, 'Must be at least 6 characters')),
})

const state = reactive({
  email: '',
  password: '',
})
const { data, refresh, status } = await useFetch('/api/auth/login', {
  method: 'POST',
  body: state,
  immediate: false,
  watch: false,
  key: 'user',
})

const pending = computed(() => status.value === 'pending')
async function onSubmit(event) {
  console.log('From submit function', event)
  await refresh()
  setUser(data.value.data)
  console.log('User', user.value)
}

function handleResetPassword() {
  console.log('Reset password')
}

function handleSignUp() {
  emit('changeForm')
  console.log('Sign up')
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
        Login
      </h5>
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <div class="flex items-center justify-center py-5">
        <UButton
          class="min-w-fit px-4 text-center!"
          icon="i-ph-note-pencil"
          type="submit"
          label="Login"
          :loading="pending"
        />
      </div>
      <div class="flex flex-col items-center justify-center gap-4">
        <div>Forgot your password? <span class="text-primary cursor-pointer hover:border-b-2 hover:border-b-emerald hover:border-solid" @click="handleResetPassword">Reset it here</span></div>
        <div>Don't have an account? <span class="text-primary cursor-pointer hover:border-b-2 hover:border-b-emerald hover:border-solid" @click="handleSignUp">Sign Up Here</span></div>
      </div>
    </UForm>
  </div>
</template>
