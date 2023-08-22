<template>
  <div class="flex company-info-card shadow-sm">
    <div class="company-info-icon flex-shrink-0">
      <slot name="icon" />
    </div>
    <div class="flex-1">
      <div class="company-info-label">
        {{ label }}
      </div>
      <div class="company-info-value">
        <slot name="value" />
      </div>
    </div>
    <div class="flex-shrink-0">
      <button class="text-xl">
        <CopyIcon class="w-4" />
      </button>
    </div>
  </div>
</template>

<script setup>
import CopyIcon from '@/components/icons/CopyIcon.vue'
defineProps({
  label: String
})
</script>

<style lang="scss" scoped>
.company-info-card {
  background: white;
  border-radius: 8px;
  padding: 12px 20px;
  gap: 10px;
}

.company-info-icon {
  background: #d9ebcd;
  width: 32px;
  height: 32px;
  display: grid;
  border-radius: 99px;
  place-items: center;
}

.company-info-label {
  color: #515251;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 2px;
}

.company-info-value {
  color: #292a29;

  &:deep a {
    color: #359aa0;
    text-decoration: underline;
  }
}
</style>
