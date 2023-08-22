<script setup>
import { computed, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useDashboardStore } from '../../stores/dashboard'

const route = useRoute()

const props = defineProps({
  label: String,
  icon: Object,
  activeIcon: Object,
  href: String,
  active: Boolean
})
defineEmits(['menu-click'])

const isActive = computed(() => route.path.includes(props.href))
const dashboardStore = useDashboardStore()

const collapsed = computed(() => dashboardStore.sidebarCollapsed)

const iconComponent = computed(() => {
  if (isActive.value === true && props.activeIcon) {
    return props.activeIcon
  }
  return props.icon
})

watch([isActive], () => {
  if (isActive.value) {
    dashboardStore.currentPage = props.label
  }
})

</script>

<template>
  <div v-if="collapsed" class="flex justify-center">
    <RouterLink @click="$emit('menu-click')" :title="props.label" :to="props.href || '/'"
      class="menu-link-collapsed h-10 w-10 grid place-items-center rounded-full hover:bg-newLimeGreen"
      :class="{ active: isActive === true }">
      <span>
        <slot name="icon">
          <component :is="iconComponent" />
        </slot>
      </span>
    </RouterLink>
  </div>
  <div v-else>
    <RouterLink @click="$emit('menu-click')" :to="props.href || '/'"
      class="menu-link h-10 px-6 flex items-center text-dark-600 border-l-4 border-transparent hover:bg-newLimeGreen"
      :class="{ active: isActive === true }">
      <span class="mr-4 w-6 text-sm inline-grid place-items-center rounded-full">
        <slot name="icon">
          <component :is="iconComponent" />
        </slot>
      </span>
      <span class="text-capitalize text-sm">{{ props.label }}</span>
    </RouterLink>
  </div>
</template>

<style>
.menu-link.active {
  @apply text-primary border-primary font-medium bg-newLimeGreen;
}

.menu-link-collapsed.active {
  @apply bg-newLimeGreen;
}
</style>
