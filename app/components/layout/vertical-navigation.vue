<script setup lang="ts">
const colorMode = useColorMode()
const links = [[{

}, {
  label: 'Home',
  icon: 'i-ph-house',
  to: '/',
}, {
  label: 'Notifications',
  icon: 'i-ph-notification',
  to: '/notifications',
}, {
  label: 'Profile',
  icon: 'i-heroicons-user',
  to: '/profile',
}], [{
  label: 'Sign Out',
}]]

console.log('Colormode: ', colorMode)
</script>

<template>
  <!-- add color mode theming here -->
  <UVerticalNavigation
    :links="links"
    :ui="{
      wrapper: 'flex flex-col justify-between h-full p-4 md:w-1/4 ',
      base: 'flex h-full ',
      size: 'text-xl',
      padding: 'p-4',
      ring: 'flex gap-6',
    }"
  />
</template>
