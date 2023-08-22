<template>
  <div>
    <ReportHeader title="Loan Report">
      <template #download>
        <!-- <Download /> -->
      </template>
    </ReportHeader>
    <div class="info-cards flex overflow-auto gap-4 mb-8">
      <InfoValueCard label="total" :value="stats.totalLoans">
        <template #icon>
          <CalendarIcon />
        </template>
      </InfoValueCard>
      <InfoValueCard label="Active" :value="stats.activeLoans" fill="blue">
        <template #icon>
          <LoanIcon />
        </template>
      </InfoValueCard>
      <InfoValueCard label="Completed" value="26,415,998" fill="green">
        <template #icon>
          <CheckDoubleIcon />
        </template>
      </InfoValueCard>
      <InfoValueCard label="cleared" :value="stats.clearedLoans">
        <template #icon>
          <CheckBigIcon />
        </template>
      </InfoValueCard>
      <InfoValueCard label="rejected" value="26,415,998">
        <template #icon>
          <CalendarIcon />
        </template>
      </InfoValueCard>
      <InfoValueCard label="overdues" :value="stats.overdues" fill="red">
        <template #icon>
          <OverdueIcon />
        </template>
      </InfoValueCard>
      <InfoValueCard label="Blacklisted" value="26,415,998">
        <template #icon>
          <CalendarIcon />
        </template>
      </InfoValueCard>
    </div>

    <div class="grid grid-cols-2 gap-6 mb-10">
      <LoanDisbursedChart v-if="disbursed" :data="disbursed" />
      <LoanRevenueChart v-if="revenue" :data="revenue" />
    </div>
    <div>
      {{ loanActivities }}
      <div class="flex mb-4 items-center justify-between">
        <h3 class="font-normal">Loan Transactions</h3>
        <SearchInput with-filter :width-distribution="['70%', '30%']" />
      </div>
      <LoanTransactions />
    </div>
  </div>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import InfoValueCard from '@/components/InfoValueCard.vue'
import ReportHeader from '../shared/ReportHeader.vue'
import LoanDisbursedChart from './LoanDisbursedChart.vue'
import LoanRevenueChart from './LoanRevenueChart.vue'

import LoanTransactions from './LoanTransactions.vue'

// icons
import CheckBigIcon from '@/assets/icons/check-big.svg'
import LoanIcon from '@/assets/icons/loan.svg'
import CheckDoubleIcon from '@/assets/icons/check-double-big.svg'
import CalendarIcon from '@/assets/icons/calendar.svg'
import OverdueIcon from '@/assets/icons/overdue.svg'
import { useQuery } from '@/api/useQuery'
import { computed } from 'vue'
import { formatCurrency } from '@/utils/currency'
// import Download from './Download.vue'

const { data: loanReport } = useQuery('QueryLoanReport')
const { data: loanAnalytics } = useQuery('LoanAnalytics')
const { data: loanActivities } = useQuery('ListLoanActivity')

const revenue = computed(() => {
  if (loanAnalytics.value) {

    const labels = [];
    const datasets = [];

    // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    loanAnalytics.value.forEach(each => {
      let { _id: { month }, loanRevenue } = each

      labels.push(month)
      datasets.push(loanRevenue)
    })

    return { labels, datasets }
  }
  return null
})

const disbursed = computed(() => {
  if (loanAnalytics.value) {

    const labels = []
    const datasets = []


    loanAnalytics.value.forEach(each => {
      let { _id: { month }, loanDisbursed } = each

      labels.push(month)
      datasets.push(loanDisbursed)
    })

    return { labels, datasets }

  }
  return null
})


const stats = computed(() => {

  const {
    totalLoans,
    activeLoans,
    clearedLoans,
    completedLoans,
    overdues
  } = loanReport?.value ?? {}

  return {
    totalLoans: formatCurrency(totalLoans, false),
    activeLoans: formatCurrency(activeLoans, false),
    clearedLoans: formatCurrency(clearedLoans, false),
    completedLoans: formatCurrency(completedLoans, false),
    overdues: formatCurrency(overdues, false)
  }

})
</script>

<style lang="scss" scoped>
.info-cards {
  >* {
    flex-shrink: 0;
    min-width: 180px;
  }
}
</style>
