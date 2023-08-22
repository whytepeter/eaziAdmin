<template>
  <div v-if="type == 'default'" :class="[colorTheme.bg]" class="w-full h-full p-4 rounded-2xl">
    <div class="text-center text-lg font-bold">Credit Report</div>
    <div
      :style="`background: conic-gradient(${colorTheme.chart} ${score * 3.6}deg, #fff 0deg)`"
      class="relative rounded-full w-24 h-24 p-2.5 rounded-full mx-auto my-3"
    >
      <div
        :class="[colorTheme.bg]"
        class="w-full h-full flex flex-col items-center justify-center rounded-full"
      >
        <span class="font-bold text-dark-800">{{ score }}%</span>
        <span class="text-xs -mt-1 capitalize">{{ credit }}</span>
      </div>
    </div>
  </div>
  <div v-else :class="[colorTheme.text]" class="flex items-center gap-2">
    <i class="fas fa-circle"></i>
    <span class="font-bold">Credit Score: {{ score ? score : 'N/A' }}</span>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },

  score: Number
})

const credit = computed(() => {
  if (props.score >= 70) {
    return 'excellent'
  } else if (props.score >= 50) {
    return 'good'
  } else if (props.score <= 49) {
    return 'poor'
  }
})

const colorTheme = computed(() => {
  const colors = {
    excellent: {
      chart: '#219653',
      bg: 'bg-[#F0F7EB]',
      text: 'text-[#219653]'
    },
    good: {
      chart: '#B4A572',
      bg: 'bg-[#FFFCEC]',
      text: 'text-[#B4A572]'
    },
    poor: {
      chart: '#EF4444',
      bg: 'bg-[#FFEDEC]',
      text: 'text-[#EF4444]'
    }
  }
  return colors[credit.value]
})
</script>

<style></style>
