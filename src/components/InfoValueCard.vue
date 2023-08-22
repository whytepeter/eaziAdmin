<template>
  <div class="info-card" :class="[`info-card-${fill}`]">
    <div>
      <div class="info-label">{{ label }}</div>
      <div class="info-value">{{ value }}</div>
    </div>
    <div class="w-8 h-8 rounded-full bg-white inline-grid place-items-center">
      <slot name="icon" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  fill: String,
  value: [Number, String]
})
</script>

<style lang="scss" scoped>
.info-card {
  padding: 12px 16px;
  display: flex;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f1f1;
  border: 1px solid #e7e8e7;

  &-blue {
    background: #ebf6fc;
    border: 1px solid #d3f0ff;
  }

  &-green {
    background: #e7fbef;
    border: 1px solid #e7fbef;
  }

  &-red {
    background: #ffedec;
    border: 1px solid #ffd1ce;
  }
}

.info-label {
  color: #515251;
  letter-spacing: 0.25px;
  margin-bottom: 4px;
  text-transform: capitalize;
}

.info-value {
  color: #292a29;
  font-size: 16px;
  font-weight: 700;
}
</style>
