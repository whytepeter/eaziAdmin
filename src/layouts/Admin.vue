<template>
  <div
    class="admin-layout pb-20 md:pb-6 bg-background h-screen overflow-auto"
    :class="{ collapsed: sidebarCollapsed === true }"
  >
    <Sidebar />
    <div class="relative">
      <AdminNavbar class="px-8" />
      <div class="w-full p-4 sm:px-8 sm:py-6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script setup>
import AdminNavbar from '@/components/Navbars/AdminNavbar.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'

import { computed } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'

const store = useDashboardStore()

const sidebarCollapsed = computed(() => store.sidebarCollapsed)
</script>

<style scopped lang="scss">
.admin-layout {
  --sidebar-width: 260px;
  transition: width 0.3s ease-in-out;
}

.admin-layout.collapsed {
  --sidebar-width: 105px;
}

@media (min-width: 640px) {
  .admin-layout {
    padding-left: var(--sidebar-width);
    /* transition: padding 0.3s ease-in-out; */
  }
}
</style>
