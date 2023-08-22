<template>
  <div class="flex items-center gap-2">
    <div class="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-tertiary rounded-full">
      <img :src="data && data.icon" alt="" />
    </div>
    <div class="grow flex flex-col leading-5">
      <span class="text-dark-700 text-sm">{{ data && data.title }}</span>
      <span v-if="data && !data.link" class="">{{ data && data.value }}</span>
      <a v-else target="_blank" :href="data && data.link" class="text-[#359AA0] underline">
        {{ data && data.value }}
      </a>
    </div>

    <CopyIcon
      @click="copyText(data.link)"
      v-if="data && data.copy"
      class="w-5 flex-shrink-0 cursor-pointer"
    />
  </div>
</template>

<script setup>
import CopyIcon from '@/components/icons/CopyIcon.vue'
import { helperFunctions } from '@/composable/helperFunctions'
const { copyText } = helperFunctions

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style></style>
