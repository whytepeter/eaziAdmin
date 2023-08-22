<template>
  <div>
    <section class="grid lg:flex gap-8 mb-20">
      <div class="w-full lg:w-3/12 grid gap-6">
        <accounts-employee-count-chart :data="groupCompanies" />
        <info-value-card label="Most Used Feature" :value="userLog?.mostUsedApi">
          <template #icon>
            <PayrollIcon />
          </template>
        </info-value-card>
        <SessionPerUserChart />
      </div>
      <div class="w-full lg:w-6/12">
        <TabbedSection />
      </div>
      <div class="w-full lg:w-3/12 grid gap-6">
        <product-rating />
        <info-value-card label="Daily Active Users" value="128,953">
          <template #icon>
            <UserCheckIcon />
          </template>
        </info-value-card>
        <registered-account :data="registrationByTypes" />
      </div>
    </section>
    <section>
      <Loading :data="recentTransactions" :error="false">
        <div class="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center">
          <h3>Recent Transactions</h3>
          <div class="ml-auto flex items-center">
            <SearchInput with-filter class="mr-4" />
            <RouterLink :to="{ name: 'DashboardTransactions' }">
              <button class="whitespace-nowrap">View All</button>
            </RouterLink>
          </div>
        </div>
        <TransactionsTable :data="recentTransactions.slice(0, 10)" />
      </Loading>
    </section>

  </div>
</template>

<script setup>
import TransactionsTable from './TransactionsTable.vue'
import TabbedSection from './TabbedSection.vue'
import ProductRating from './ProductRating.vue'
import RegisteredAccount from './RegisteredAccount.vue'
import InfoValueCard from '@/components/InfoValueCard.vue'
import SessionPerUserChart from './SessionPerUserChart.vue'
import AccountsEmployeeCountChart from './AccountsEmployeeCountChart.vue'
import UserCheckIcon from '@/assets/icons/user-check.svg'
import PayrollIcon from '@/assets/icons/payroll-doc.svg'
import { useQuery } from "@/api/useQuery"
import Loading from '@/components/Loading.vue'
import SearchInput from '@/components/SearchInput.vue'

const { data: recentTransactions } = useQuery('RecentTransactions')

const { data: groupCompanies } = useQuery('groupCompanies', {
  input: {
    month: true,
    year: 2023,
    registrationType: {
      "COMPANY": true,
      "PERSONAL": true
    }
  },
})

const { data: userLog } = useQuery('GetUserLog')

const { data: registrationByTypes } = useQuery('ListByRegistrationTypes')


</script>
