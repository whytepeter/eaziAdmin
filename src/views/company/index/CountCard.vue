<template>
  <div class="stats-card flex items-center gap-4">
    <div>
      <div class="label">{{ label }}</div>
      <div class="value">{{ value }}</div>
    </div>
    <div>
      <div class="flex items-center mb-1 text-sm text-[#219653]">
        <div class="flex-1 text-center">1%</div>
        <div>
          <ArrowUp />
        </div>
      </div>
      <img src="@/assets/img/small-curve-green.svg?url" />
    </div>
  </div>
</template>

<script setup>
import ArrowUp from '@/assets/icons/arrow-up-tiny.svg'
defineProps({
  label: String,
  value: String
})
</script>

<style lang="scss" scoped>
.stats-card {
  background: #ebfaf1;
  border-radius: 16px;
  padding: 14px 20px;

  .label {
    color: #515251;
    margin-bottom: 2px;
  }

  .value {
    color: #11453b;
    font-weight: 600;
  }
}
</style>
