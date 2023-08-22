<!-- todo: give it a better name -->
<template>
  <div>
    <div class="mb-1 flex items-center" :class="[positive ? 'green' : 'red']">
      <div class="flex-1 text-sm text-center">
        <span>{{ value }}%</span>
      </div>
      <span>
        <ArrowUp class="w-4" v-if="positive" />
        <ArrowDown class="w-4" v-else />
      </span>
    </div>
    <div>
      <img v-if="positive" class="w-full" src="@/assets/img/curve-green.svg?url" alt="" />
      <img v-else class="w-full" src="@/assets/img/curve-red.svg?url" alt="" />
    </div>
  </div>
</template>

<script setup>
import ArrowDown from '@/assets/icons/arrow-down-tiny.svg'
import ArrowUp from '@/assets/icons/arrow-up-tiny.svg'

const props = defineProps({
  value: Number
})

const positive = props.value > 0
</script>

<style lang="scss" scoped>
.green {
  color: #219653;
}

.red {
  color: #ef4444;
}
</style>
