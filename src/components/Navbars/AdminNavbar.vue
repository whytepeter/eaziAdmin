<script setup>
import UserDropdown from '@/components/Dropdowns/UserDropdown.vue'
import NotificationDropdown from '@/components/Dropdowns/NotificationDropdown.vue'

import { useDashboardStore } from '../../stores/dashboard'
import { computed } from 'vue'

const dashStore = useDashboardStore()

const currentPage = computed(() => dashStore.currentPage)
</script>

<template>
  <nav class="flex bg-white py-4 w-full sticky top-0 left-0 z-50">
    <div class="flex gap-4 items-center">
      <button
        class="hambugger self-center"
        :class="{ open: dashStore.showMobileMenu === true }"
        @click="dashStore.toggleMobileMenu()"
      >
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
      </button>
      <h3 class="text-xl font-bold">{{ currentPage }}</h3>
    </div>
    <div class="ml-auto flex">
      <div class="gap-x-4 list-none items-center flex">
        <NotificationDropdown />
        <UserDropdown />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  box-shadow: 0px 4px 8px rgba(170, 170, 170, 0.08);
  z-index: 10;
}

.hambugger {
  @apply grid gap-1;

  @media (min-width: 640px) {
    display: none;
  }

  div {
    height: 3px;
    transition: 0.18s ease;
    @apply bg-primary rounded;
  }

  .line-1 {
    transform-origin: top left;
    width: 34px;
  }

  .line-2 {
    width: 20px;
  }

  .line-3 {
    width: 15px;
    transform-origin: bottom left;
  }
}
</style>
