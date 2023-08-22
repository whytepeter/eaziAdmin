<template>
  <MenuItem>
    <div class="flex gap-6 px-4 py-2 rounded-md items-center cursor-pointer hover:bg-gray-100">
      <span class="font-medium">{{ label }}</span>
      <span class="ml-auto">
        <slot name="icon"></slot>
      </span>
    </div>
  </MenuItem>
</template>

<script setup>
import { MenuItem } from '@headlessui/vue'

defineProps({
  label: String
})
</script>

<style lang="scss" scoped>
.menu-item {
}
</style>
