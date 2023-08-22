<template>
  <div class="balance-card card">
    <div class="text-sm text-[#DAE9D0] mb-2">{{ label }}</div>
    <div class="flex items-center">
      <div class="mr-2">
        <NairaIcon />
      </div>
      <div class="text-2xl font-bold">{{ balance }}</div>
      <div class="ml-6">
        <NoPreviewIcon />
      </div>
    </div>
  </div>
</template>

<script setup>
import NoPreviewIcon from '@/assets/icons/eye-close.svg'
import NairaIcon from '@/assets/icons/naira.svg'
defineProps({
  balance: String,
  label: String
})
</script>

<style lang="scss" scoped>
.balance-card {
  background-image: url(@/assets/img/waves.svg);
  background-repeat: no-repeat;
  background-position: auto;
  background-color: #11453b;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
