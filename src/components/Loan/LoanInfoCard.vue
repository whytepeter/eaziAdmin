<template>
  <div
    v-ripple
    class="p-ripple w-full rounded-2xl p-3 gap-2 border flex items-center justify-between gap-2"
    :class="[cardColor.border, cardColor.bg]"
  >
    <div>
      <h6 class="text-dark-800 text-xs whitespace-nowrap">{{ data && data.title }}</h6>
      <span class="text-dark-900 font-bold">{{
        data && data.value && data.value.toLocaleString()
      }}</span>
    </div>
    <div class="w-10 h-10 flex-shrink-0">
      <img :src="data && data.icon" alt="" class="w-full object-contain" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      value: '0',
      type: 'default',
      icon: ''
    })
  }
})

console.log(props.data)

const cardColor = computed(() => {
  const types = {
    default: {
      border: 'border-[#E7E8E7]',
      bg: 'bg-[#F2F1F1]'
    },
    active: {
      border: 'border-[#D3F0FF]',
      bg: 'bg-[#EBF6FC]'
    },
    completed: {
      border: 'border-[#BEF0C9]',
      bg: 'bg-[#E7FBEF]'
    },
    overdue: {
      border: 'border-[#FFD1CE]',
      bg: 'bg-[#FFEDEC]'
    }
  }
  return types[props.data.type]
})
</script>

<style></style>
