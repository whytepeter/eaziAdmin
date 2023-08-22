//store can be defined similar to the composition API setup, but it doesn't work as expected.
import { defineStore } from 'pinia'
import { MUTATE, QUERY } from '../api/index.js'

export const useDataStore = defineStore('main', {
  state: () => ({
    name: 'Eazipay',
    isLoggedIn: true,
    listRoles: null,
    adminLogs: null,
    adminUsers: null,
    user: null,

    loans: null,
    loanReport: null,
    loanActivities: null,
    blackListedCompanies: null,

    reconciliationBalance: null,
    reconciliationList: null,
    statements: null,
    companyTransactions: null,

    payrollReceipt: null,
    complianceReceipt: null,
    chargeReceipt: null
  }),

  getters: {
    getUser: (state) => state.user && state.user.data && state.user.data.admin,
    getAdminLogs: (state) =>
      state.adminLogs && state.adminLogs.data ? state.adminLogs.data.activities : [],
    getAllRoles: (state) =>
      state.listRoles && state.listRoles.data ? state.listRoles.data.roles : [],
    getAdminByRole: (state) => (roleId) => {
      const admins = state.adminUsers && state.adminUsers.data ? state.adminUsers.data.admin : []
      const arr = admins.filter((user) => user.roles.some((role) => role._id === roleId))
      return arr ? arr : []
    },
    getAdminUsers: (state) =>
      state.adminUsers && state.adminUsers.data ? state.adminUsers.data.admin : [],

    getLoanActivities: (state) =>
      state.loanActivities && state.loanActivities.data ? state.loanActivities.data : [],
    getBlackListed: (state) =>
      state.blackListedCompanies && state.blackListedCompanies.data
        ? state.blackListedCompanies.data.companies
        : [],
    getLoanReport: (state) => state.loanReport,
    getAllLoans: (state) => (state.loans && state.loans.data ? state.loans.data : []),
    getLoanById: (state) => (id) => {
      return state.loans.data.find((el) => el._id === id)
    },

    getReconciliation: (state) =>
      state.reconciliationList && state.reconciliationList.data
        ? state.reconciliationList.data.docs
        : [],
    getStatements: (state) =>
      state.statements && state.statements.data ? state.statements.data.docs : [],
    getReconciliationBalance: (state) =>
      state.reconciliationBalance && state.reconciliationBalance.data
        ? state.reconciliationBalance.data
        : {},
    getCompanyTransactions: (state) =>
      state.companyTransactions && state.companyTransactions.data
        ? state.companyTransactions.data.docs
        : {},

    getPayrollReceipt: (state) =>
      state.payrollReceipt && state.payrollReceipt.data ? state.payrollReceipt.data.docs : [],
    getComplianceReceipt: (state) =>
      state.complianceReceipt && state.complianceReceipt.data
        ? state.complianceReceipt.data.docs
        : [],
    getChargeReceipt: (state) =>
      state.chargeReceipt && state.chargeReceipt.data ? state.chargeReceipt.data.docs : []
  },

  actions: {
    mutate({ endpoint, data, service }) {
      return MUTATE(endpoint, data, service)
    },

    query({ endpoint, payload, service, storeKey }) {
      return QUERY(endpoint, payload, service, storeKey)
        .then((res) => {
          this[storeKey] = res
          return res
        })
        .catch(() => {})
    }
  },
  persist: true
})
