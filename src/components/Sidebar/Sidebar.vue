<script setup>
import { logout } from '@/api/api'
import { computed } from 'vue'
import MenuLink from './MenuLink.vue'

import HomeFillIcon from './icons/HomeFill.vue'
import HomeOutlineIcon from './icons/HomeOutline.vue'

import LoanOutlineIcon from './icons/LoanOutline.vue'
import LoanFillIcon from './icons/LoanFill.vue'

import FeedbackOutlineIcon from './icons/FeedbackOutline.vue'
import FeedbackFillIcon from './icons/FeedbackFill.vue'

import SettingsOutlineIcon from './icons/SettingsOutline.vue'
import SettingsFillIcon from './icons/SettingsFill.vue'

import CompanyFillIcon from './icons/CompanyFill.vue'
import CompanyOutlineIcon from './icons/CompanyOutline.vue'

import ReportsFillIcon from './icons/ReportsFill.vue'
import ReportsOutlineIcon from './icons/ReportsOutline.vue'

import ReconciliationFillIcon from './icons/ReconciliationFill.vue'
import ReconciliationOutlineIcon from './icons/ReconciliationOutline.vue'

import ReceiptFillIcon from './icons/ReceiptFill.vue'
import ReceiptOutlineIcon from './icons/ReceiptOutline.vue'

import Logo from './Logo.vue'
import LogoCollapsed from './LogoCollapsed.vue'

import UploadArrowRightIcon from './icons/UploadArrowRight.vue'
import UploadArrowLeftIcon from './icons/UploadArrowLeft.vue'
import LogoutIcon from './icons/Logout.vue'

import { useDashboardStore } from '@/stores/dashboard'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()

const dashboardStore = useDashboardStore()

const user = computed(() => store.getUser)
const initials = computed(() => {
  const name = getAdminName.value
  if (name && name !== 'N/A') {
    const arr = name.split(' ')
    const str = `${arr[0].charAt(0).toUpperCase()}${arr[1].charAt(0).toUpperCase()}`
    return str
  } else {
    return 'N/A'
  }
})

const sidebarCollapsed = computed(() => dashboardStore.sidebarCollapsed)

const toggleCollapse = () => {
  dashboardStore.toggleSidebarCollapse()
}

const menuItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: HomeOutlineIcon, activeIcon: HomeFillIcon },
  {
    href: '/admin/company',
    label: 'Company Management',
    icon: CompanyOutlineIcon,
    activeIcon: CompanyFillIcon
  },

  {
    href: '/admin/loan',
    label: 'Loan Management',
    icon: LoanOutlineIcon,
    activeIcon: LoanFillIcon
  },
  {
    href: '/admin/reports',
    label: 'Reports',
    icon: ReportsOutlineIcon,
    activeIcon: ReportsFillIcon
  },
  {
    href: '/admin/reconciliation',
    label: 'Reconciliation',
    icon: ReconciliationOutlineIcon,
    activeIcon: ReconciliationFillIcon
  },

  {
    href: '/admin/receipt',
    label: 'Receipt',
    icon: ReceiptOutlineIcon,
    activeIcon: ReceiptFillIcon
  },
  {
    href: '/admin/settings',
    label: 'Settings',
    icon: SettingsOutlineIcon,
    activeIcon: SettingsFillIcon
  }
]

const closeMobileMenu = () => {
  if (dashboardStore.showMobileMenu) {
    dashboardStore.toggleMobileMenu()
  }
}
</script>

<template>
  <aside
    class="sidebar sidebar-mobile fixed left-0 top-0 bottom-0 bg-white flex flex-col border-r border-gray-200"
    :class="{ open: dashboardStore.showMobileMenu === true }"
  >
    <button class="absolute right-[40px]"></button>
    <div class="h-full flex flex-col w-full relative bg-white">
      <header class="mb-8">
        <div class="relative">
          <LogoCollapsed v-if="sidebarCollapsed" />
          <Logo :collapsed="sidebarCollapsed" v-else />
          <div class="absolute right-0" style="bottom: 20px">
            <button
              class="p-1 rounded-tl-md rounded-bl-md"
              style="background: #f2f1f1"
              @click="toggleCollapse"
            >
              <UploadArrowRightIcon v-if="sidebarCollapsed" />
              <UploadArrowLeftIcon v-else />
            </button>
          </div>
        </div>
      </header>
      <div>
        <ul class="grid gap-2">
          <li v-for="(item, index) of menuItems" :key="`menu-item-${index}`">
            <MenuLink v-bind="item" @menu-click="closeMobileMenu" />
          </li>
        </ul>
      </div>
      <div
        class="px-6 mt-auto pb-10"
        :class="[sidebarCollapsed ? 'flex flex-col items-center' : '']"
      >
        <div class="mb-4">
          <button
            class=""
            @click="
              $router.push({ name: 'AdminLogs' }),
                (dashboardStore.currentPage = 'Admin Activity Log')
            "
          >
            <!-- class="w-8 h-8 flex-shrink-0 rounded-full bg-primary text-white font-bold grid place-items-center" -->
            <div
              :class="!sidebarCollapsed ? 'bg-[#F2F1F1]' : ''"
              class="flex items-center gap-4 text-dark-800 py-2 px-3 rounded-lg"
            >
              <div
                title="Check admin logs"
                class="w-10 h-10 text-sm text-white bg-primary inline-flex items-center justify-center rounded-full"
              >
                <img
                  v-if="user && user.pfp"
                  alt="..."
                  class="w-full h-full object-cover rounded-full align-middle border-none shadow-lg"
                  :src="user && user.pfp"
                />
                <div
                  v-else
                  class="flex items-center justify-center p-2 h-10 w-10 sm:w-11 sm:h-11 text-lg text-white font-medium rounded-full"
                >
                  {{ initials }}
                </div>
              </div>
              <span v-if="!sidebarCollapsed">Check Admin Log</span>
            </div>
          </button>
        </div>

        <button @click="logout" title="logout" class="flex items-center gap-4">
          <span class>
            <LogoutIcon />
          </span>
          <span v-if="!sidebarCollapsed"> Logout </span>
        </button>
      </div>
    </div>
  </aside>
  <div
    @click="dashboardStore.toggleMobileMenu()"
    class="sidebar-overlay fixed top-0 left-0 right-0 bottom-0 bg-black/50"
    :class="{ open: dashboardStore.showMobileMenu === true }"
  ></div>
</template>

<style scoped lang="scss">
.sidebar {
  width: var(--sidebar-width);
  z-index: 20;
  visibility: hidden;
  transform: translateX(-100%);
}

.sidebar-overlay {
  z-index: 15;
  visibility: hidden;
  opacity: 0;
}

@media (max-width: 640px) {
  .sidebar-mobile {
    transition: transform 0.25s ease, visibility 0.25s ease;
  }

  .sidebar-mobile.open {
    visibility: visible;
    transform: translateX(0);
  }

  .sidebar-overlay.open {
    visibility: visible;
    opacity: 1;
    transition: 0.25s;
  }
}

@media (min-width: 640px) {
  .sidebar {
    visibility: visible;
    transform: translateX(0%);
  }
}
</style>
