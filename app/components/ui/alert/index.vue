<script lang="ts" setup>
const { state, closeAlert } = useAlert()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div
      v-if="state.show"
      class="fixed w-svw md:right-2 md:top-2 md:w-1/3 xl:w-1/4"
    >
      <UAlert
        :title="state.title"
        :description="state.message"
        :icon="state.icon"
        variant="solid"
        :color="state.color"
        :close-button="{ icon: 'i-ph-x', color: 'gray', variant: 'link', padded: false }"
        @close="closeAlert"
      />
    </div>
  </Transition>
</template>
