<template>
  <div
    class="w-full sm:w-10/12 mx-auto place-content-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-center gap-2 md:gap-4"
  >
    <LoanInfoCard v-for="(item, i) in data" :key="i" :data="item" />
  </div>
</template>

<script setup>
import defaultIcon from './assets/default.svg?url'
import activeIcon from './assets/active.svg?url'
import completedIcon from './assets/completed.svg?url'
import overdueIcon from './assets/overdue.svg?url'

import LoanInfoCard from '@/components/Loan/LoanInfoCard.vue'
import { computed } from 'vue'

import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query } = store

const loanReport = computed(() => store.getLoanReport)

const data = computed(() => {
  return [
    {
      title: 'Total Loans',
      value: loanReport.value && loanReport.value.totalLoans,
      type: 'default',
      icon: defaultIcon
    },
    {
      title: 'Active Loans',
      value: loanReport.value && loanReport.value.activeLoans,
      type: 'active',
      icon: activeIcon
    },
    {
      title: 'Cleared',
      value: loanReport.value && loanReport.value.clearedLoans,
      type: 'default',
      icon: defaultIcon
    },
    {
      title: 'Completed',
      value: loanReport.value && loanReport.value.completedLoans,
      type: 'completed',
      icon: completedIcon
    },
    {
      title: 'Overdues',
      value: loanReport.value && loanReport.value.overdues,
      type: 'overdue',
      icon: overdueIcon
    }
  ]
})

const queryLoanReport = async (load = true) => {
  try {
    const res = await query({
      endpoint: 'QueryLoanReport',
      storeKey: 'loanReport'
    })

    console.log(res)
  } catch (error) {
    console.log(error.message)
  }
}

queryLoanReport()
</script>

<style></style>
