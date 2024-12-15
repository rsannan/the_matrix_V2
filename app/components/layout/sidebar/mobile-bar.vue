<script lang="ts" setup>
import { handleActionClick } from './config'

defineProps<{
  links: { text: string, icon?: string }[]
}>()
const emit = defineEmits(['open'])
</script>

<template>
  <div class="z-50 w-10 flex flex-col items-center p-4">
    <div class="i-ph-list text-2xl" @click="emit('open')" />
    <hr class="border-zinc-1 border-solid">
    <ul class="flex flex-col gap-6 p-4">
      <layout-sidebar-link
        v-for="(link, index) in links"
        :key="index"
        :text="link.text"
        :icon="link.icon"
        :hide-text="true"
        @action="handleActionClick"
      />
    </ul>
  </div>
</template>
