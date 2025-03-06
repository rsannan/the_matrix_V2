<script lang="ts" setup>
definePageMeta({
  layout: 'login',
})

const items = [{
  label: 'Login',
  slot: 'login',
}, {
  label: 'Sign up',
  slot: 'signup',
}]
</script>

<template>
  <UCard
    class="w-90% lg:w-35% md:w-60% xl:w-30%"
  >
    <div class="space-y-8">
      <div class="flex-center flex-col gap-4">
        <NuxtImg
          src="logo.png"
          width="200"
          alt="Logo"
          format="webp"
        />
        <span>Sign in to your account or create a new one.</span>
      </div>
      <UTabs :items>
        <template #login>
          <div>
            <ui-form-login />
          </div>
        </template>
        <template #signup>
          <ui-form-signup />
        </template>
      </UTabs>
      <div class="text-center!">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </div>
    </div>
  </UCard>
</template>
