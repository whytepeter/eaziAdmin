<template>
  <div class="relative">
    <i @click="$emit('open')" class="pi pi-ellipsis-v text-dark-400 cursor-pointer"></i>

    <div
      v-if="isOpen"
      class="w-[170px] z-20 absolute text-sm top-0 right-0 bg-white shadow-md rounded-xl overflow-hidden flex flex-col py-2 px-3"
    >
      <div
        v-for="(link, i) in menuItems"
        :key="`menu-${i}`"
        @click="link.action"
        class="flex items-center text-dark-800 cursor-pointer justify-between gap-4 px-4 py-2 px-1 rounded-lg hover:bg-[#f2f1f1]"
      >
        <span>{{ link.title }}</span>
        <span class="flex-shrink-0">
          <img :src="link.icon" alt="" />
        </span>
      </div>
    </div>
  </div>

  <div
    @click="$emit('close')"
    :class="!isOpen ? 'pointer-events-none' : ''"
    class="bg-transparent fixed inset-0"
  ></div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },

  menuItems: {
    type: Array,
    default: () => ({})
  }
})

defineEmits(['open', 'close'])
</script>

<style></style>
