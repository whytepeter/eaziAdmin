import { createRouter, createWebHistory } from 'vue-router'
import { useDataStore } from '../stores/data'
import Home from '@/views/Home.vue'
// layouts
import AdminLayout from '@/layouts/Admin.vue'
import Dashboard from '@/views/dashboard/Dashboard.vue'

// routes
import companyRoutes from './company'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/auth/Login/Login.vue')
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register/Register.vue')
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        name: 'Dashboard',
        path: '/admin/dashboard',
        component: Dashboard
      },
      {
        name: 'DashboardTransactions',
        path: '/admin/dashboard/transactions',
        component: () => import('@/views/dashboard/AllTransactions.vue')
      },

      ...companyRoutes,
      {
        name: 'Loan',
        path: '/admin/loan',
        component: () => import('@/views/loan/Index.vue')
      },
      {
        name: 'ViewLoan',
        path: '/admin/loan/:id',
        component: () => import('@/views/loan/ViewLoan.vue')
      },

      {
        name: 'Reports',
        path: '/admin/reports',
        component: () => import('@/views/reports/index.vue'),
        children: [
          { path: '/admin/reports', redirect: '/admin/reports/payroll' },
          {
            name: 'PayrollReport',
            path: '/admin/reports/payroll',
            component: () => import('@/views/reports/PayrollReport/index.vue')
          },
          {
            name: 'LoanReport',
            path: '/admin/reports/loan',
            component: () => import('@/views/reports/LoanReport/index.vue')
          },
          {
            name: 'WalletReport',
            path: '/admin/reports/wallet',
            component: () => import('@/views/reports/WalletReport/index.vue')
          }
        ]
      },

      {
        name: 'Reconciliation',
        path: '/admin/reconciliation',
        component: () => import('@/views/reconciliation/Index.vue')
      },
      {
        name: 'ViewReconciliation',
        path: '/admin/reconciliation/:id',
        component: () => import('@/views/reconciliation/ViewReconciliation.vue')
      },
      {
        name: 'ReconciliationStatement',
        path: '/admin/reconciliation/statement',
        component: () => import('@/views/reconciliation/ViewStatement.vue')
      },

      {
        name: 'Receipt',
        path: '/admin/receipt',
        redirect: '/admin/receipt/payroll',
        component: () => import('@/views/receipt/RecieptLayout.vue'),
        children: [
          {
            name: 'PayrollReceipt',
            path: '/admin/receipt/payroll',
            component: () => import('@/views/receipt/payroll.vue')
          },
          {
            name: 'ComplianceReceipt',
            path: '/admin/receipt/compliance',
            component: () => import('@/views/receipt/compliance.vue')
          },
          {
            name: 'ChargesReceipt',
            path: '/admin/receipt/charges',
            component: () => import('@/views/receipt/charges.vue')
          }
        ]
      },
      {
        name: 'Settings',
        path: '/admin/settings',
        redirect: '/admin/settings/personal_info',
        component: () => import('@/views/settings/SettingsLayout.vue'),
        children: [
          {
            name: 'PersonalInfo',
            path: '/admin/settings/personal_info',
            component: () => import('@/views/settings/personal/Index.vue')
          },
          {
            name: 'Users',
            path: '/admin/settings/users',
            component: () => import('@/views/settings/users/Index.vue')
          },
          {
            name: 'RolesAndPermissions',
            path: '/admin/settings/roles',
            component: () => import('@/views/settings/roles/Index.vue')
          }
        ]
      },
      {
        name: 'AdminLogs',
        path: '/admin/logs',
        component: () => import('@/views/logs/Index.vue')
      }
    ]
  }

  // { path: "/:pathMatch(.*)*", redirect: "/" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const store = useDataStore()

  if (to.meta.requiresAuth && !store.isLoggedIn) {
    next('auth/login')
  } else {
    next()
  }
})

export default router
