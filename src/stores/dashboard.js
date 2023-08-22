import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    showMobileMenu: false,
    sidebarCollapsed: true,
    currentPage:''
  }),

  actions: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },

    toggleSidebarCollapse() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    }
  }
})
