export default [
  {
    name: 'CompanyList',
    path: '/admin/company',
    component: () => import('@/views/company/index/Index.vue')
  },
  {
    name: 'CompanyDetails',
    path: '/admin/company/:company-slug',
    component: () => import('@/views/company/CompanyLayout.vue'),
    children: [
      {
        name: 'CompanyOverview',
        path: '/admin/company/:slug/overview',
        component: () => import('@/views/company/overview/Overview.vue')
      },
      {
        name: 'CompanyAdmins',
        path: '/admin/company/:slug/admins',
        component: () => import('@/views/company/admins/Admins.vue')
      },
      {
        name: 'CompanyDirectors',
        path: '/admin/company/:slug/directors',
        component: () => import('@/views/company/directors/Directors.vue')
      },
      {
        name: 'CompanyEmployees',
        path: '/admin/company/:slug/employees',
        component: () => import('@/views/company/employees/Employees.vue')
      },
      {
        name: 'CompanyWallet',
        path: '/admin/company/:slug/wallet',
        component: () => import('@/views/company/wallet/Wallet.vue')
      },
      {
        name: 'CompanyPayroll',
        path: '/admin/company/:slug/payroll',
        component: () => import('@/views/company/payroll/Payroll.vue')
      },

      {
        name: 'CompanyLoan',
        path: '/admin/company/:slug/loan',
        component: () => import('@/views/company/loan/index.vue')
      },
      {
        name: 'CompanyLoanDetails2',
        path: '/admin/company/:slug/loan/view2/:loanId/',
        component: () => import('@/views/company/loan/single-loan/SecondView.vue')
      },
      {
        name: 'CompanyLoanDetails',
        path: '/admin/company/:slug/loan/view/:loanId/',
        component: () => import('@/views/company/loan/single-loan/index.vue')
      },
      {
        name: 'CompanyDocuments',
        path: '/admin/company/:slug/documents',
        component: () => import('@/views/company/documents/Documents.vue')
      }
    ]
  }
]
