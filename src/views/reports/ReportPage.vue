<template>
  <div class="grid py-6" :style="computedStyle">
    <header v-if="!!reportTitle" class="flex items-center justify-between mb-8 pl-8">
      <div>
        <img src="@/assets/logo/new-logo-green.svg?url" />
      </div>
      <div class="bg-[#11453B] py-3 pl-8 pr-12 rounded-l-2xl text-white">
        <p class="font-bold text-base mb-1">{{ reportTitle }}</p>
        <p class="text-sm">September 25, 2023</p>
      </div>
    </header>

    <div class="body px-8 mb-8 flex-1">
      <slot />
    </div>

    <footer class="flex-shrink-0 bg-[#F2F1F1] px-8 py-4">
      <div class="flex items-center leading-normal">
        <div>{{ formatedDate }}</div>
        <div class="ml-auto">Page {{ pageNo }} 0f {{ totalPages }}</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import { computed } from 'vue'

const props = defineProps({
  pageNo: Number,
  totalPages: Number,
  reportTitle: String,
  width: {
    type: Number,
    default: 800
  },
  height: {
    type: Number,
    default: undefined
  }
})

const formatedDate = dayjs().format('MMM DD, YYYY')

const computedStyle = computed(() => {
  return {
    width: props.width ? props.width + 'px' : undefined,
    height: props.height ? props.height + 'px' : undefined
  }
})
</script>

<style lang="scss" scoped></style>
