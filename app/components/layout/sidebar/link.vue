<script lang="ts" setup>
defineProps<{
  text: string
  icon?: string
  hideText?: boolean
}>()
const emit = defineEmits<{
  action: [action: string]
}>()
</script>

<template>
  <li class="flex cursor-pointer items-center gap-6 rounded-full px-6 hover:bg-zinc-1 hover:text-yellow hover:shadow-md" @click="emit('action', text)">
    <div v-if="icon" :class="`${icon} `" />
    <p v-if="!hideText" class="text-xl">
      {{ startCase(text) }}
    </p>
  </li>
</template>
