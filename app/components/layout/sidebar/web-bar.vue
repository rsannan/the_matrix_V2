<script lang="ts" setup>
import { handleActionClick } from './config'

defineProps<{
  links: { text: string, icon?: string }[]
}>()
const emit = defineEmits(['unFocus'])
const target = useTemplateRef('target')
onClickOutside(target, () => emit('unFocus'))
</script>

<template>
  <div ref="target" class="z-50 min-w-1/6 p-4">
    <nuxt-img class="w-90%" src="/logo.png" />
    <hr class="border-zinc-1 border-solid">
    <ul class="flex flex-col gap-6 p-4">
      <layout-sidebar-link
        v-for="(link, index) in links"
        :key="index"
        :text="link.text"
        :icon="link.icon"
        @action="handleActionClick"
      />
    </ul>
  </div>
</template>
