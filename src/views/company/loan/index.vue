<template>
  <div>
    <div class="grid lg:flex mb-10 gap-6">
      <balance-card class="w-90" label="Wallet Balance" balance="15,067,789.00" />

      <div class="flex-1 grid grid-cols-2 gap-4" v-if="loanReport">
        <info-value-card label="Next Repayment" :value="loanReport.activeLoans"> </info-value-card>
        <info-value-card label="Overdues" :value="loanReport.overdues"> </info-value-card>
        <info-value-card label="Ongoing Loans" value="July 15, 2023"> </info-value-card>
        <info-value-card label="Completed Loans" :value="loanReport.completedLoans"> </info-value-card>
      </div>

      <CreditReport />
    </div>

    <div>
      <TabGroup>
        <TabList class="tab-list">
          <Tab class="tab">Applied Loans</Tab>
          <Tab class="tab">New Request</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LoanTable v-if="loans" :data="loans" />
          </TabPanel>
          <TabPanel>
            <LoanTable second-view />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup>
import InfoValueCard from '@/components/InfoValueCard.vue'
import CreditReport from './CreditReport.vue'
import LoanTable from './LoanTable.vue'
import BalanceCard from '@/components/BalanceCard.vue'
import { TabList, Tab, TabPanels, TabPanel, TabGroup } from '@headlessui/vue'
import { useQuery } from '@/api/useQuery'
import { useRoute } from 'vue-router'

const route = useRoute()
const companyId = route.params.slug

const { data: loanReport = {} } = useQuery('QueryLoanReport')

const { data: loans } = useQuery('ListLoans', {
  filter: {
    companyId
  },
  paging: {
    limit: 10,
    skip: 0
  }
})

</script>

<style></style>

<style lang="scss">
.tab-group {}

.tab-list {
  display: flex;
  gap: 30px;
  margin-bottom: 34px;

  .tab {
    outline: none;
    color: #494949;
    font-size: 24px;
    padding-bottom: 5px;
    line-height: 32px;
    position: relative;
    border-bottom: 3px solid transparent;

    &[aria-selected='true'] {
      border-bottom-color: #494949;
    }
  }
}
</style>
