<template>
  <div>
    <ReportHeader title="Payroll Report">
      <template #download>
        <Download />
      </template>
    </ReportHeader>
    <div class="grid grid-cols-2 gap-6 mb-16" id="report">
      <TotalPayrollProcessedChart :data="totalProcessed?.payrollGraphData" :total="totalProcessed?.payrollFigures" />
      <TotalComplianceProcessedChart :data="totalProcessed?.complianceGraphData"
        :total="totalProcessed?.complianceFigures" />
      <div class="card card-white">
        <h3 class="font-normal mb-4">Payroll Subscriptions</h3>
        <SubscriptionChart :data="subscriptionReport" />
        <div class="w-32 bg-blue-200 rounded-lg"></div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-normal">Latest Transactions</h3>
          <div class="w-1/2">
            <SearchInput with-filter />
          </div>
        </div>
        <LatestTransactions :data="recentTransactions" />
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-normal">Payroll List</h3>
        <div class="max-w-md">
          <SearchInput with-filter />
        </div>
      </div>

      <div :class="{ 'opacity-50 pointer-events-none': isLoadingPayrollList }">
        <TablePagination v-model:rowsPerPage="payrollListPagination.limit" v-model:page="payrollListPagination.page"
          :total-pages="payrollList?.pagination?.pageTotal" :total-records="payrollList?.pagination?.totalRecords" />
        <PayrollList :data="payrollList?.docs" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import ReportHeader from '../shared/ReportHeader.vue'
import LatestTransactions from '../shared/LatestTransactions.vue'
import PayrollList from './PayrollList.vue'
import TotalPayrollProcessedChart from './TotalPayrollProcessedChart.vue'
import TotalComplianceProcessedChart from './TotalComplianceProcessedChart.vue'
import Download from './Download.vue'
import SubscriptionChart from './SubscriptionChart.vue'
import { useQuery } from "@/api/useQuery.js"
import TablePagination from '@/components/TablePagination.vue'
import { computed, reactive } from 'vue'

const payrollListPagination = reactive({
  limit: 10,
  page: 1,
})

const listPayrollInput = computed(() => {
  return {
    input: {
      pagination: {
        limit: payrollListPagination.limit,
        page: payrollListPagination.page
      }
    }
  }
})

const { data: payrollList, isLoading: isLoadingPayrollList } = useQuery('ListPayroll', listPayrollInput)


const { data: totalProcessed } = useQuery('ListTotalProcessed', {
  input: {}
})

const { data: subscriptionReport } = useQuery('ListSubscriptionsReport', {
  input: {}
})

const { data: recentTransactions } = useQuery('ListRecentTransactions', {
  input: {}
})



</script>

<style lang="scss" scoped></style>
