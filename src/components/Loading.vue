<template>
  <div v-if="error"></div>
  <div v-else-if="!data" class="py-10 grid place-items-center">
    <Spinner />
  </div>
  <slot v-else />
</template>

<script setup>
import Spinner from './Spinner.vue';

defineProps({
  data: Object,
  error: { type: Object, default: null },
  isLoading: Boolean
})
</script>

<style lang="scss" scoped>
.spinner {
  height: 25px;
  width: 25px;
  border: 1.4px solid green;
  border-top-color: transparent;
  animation: spin 0.35s linear infinite;
  border-radius: 99px;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
