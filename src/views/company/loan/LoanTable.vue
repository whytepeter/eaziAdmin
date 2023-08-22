<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-4">
        <SearchInput />
        <FilterSelect />
      </div>

      <div>
        <button class="view-all">View all</button>
      </div>
    </div>

    <DataTable id="loan-table" :value="data" @row-click="openLoanDetails">
      <Column sortable field="companyId.company.companyName" header="Admin Name">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 flex-shrink-0 rounded-full bg-gray-500">
              <img :src="slotProps.data.companyId.company.logo" class="w-10 h-10 rounded-full object-cover" />
            </div>
            <div class="business-name">{{ slotProps.data.companyId.company.companyName }}</div>
          </div>
        </template>
      </Column>
      <Column field="type" header="Loan Type"></Column>
      <Column field="loanAmountApplied" header="Amount"></Column>
      <Column field="durationPeriod" header="Period"></Column>
      <Column sortable field="nextRepayment" header="Next Repayment">
        <template #body="slotProps">
          <div>
            {{ slotProps.data.registered ? 'Registered' : 'Not Registered' }}
          </div>
        </template>
      </Column>
      <Column sortable field="status" header="Loan Status"></Column>
      <Column sortable field="createdAt" header="Application Date"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
import FilterSelect from '@/components/FilterSelect.vue'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

defineProps({
  secondView: Boolean,
  data: Object
})

const route = useRoute()
const companyId = route.params.slug

const openLoanDetails = (row) => {
  const loanId = row.data._id
  router.push({
    name: 'CompanyLoanDetails',
    params: {
      slug: companyId,
      loanId
    }
  })
}
</script>

<style lang="scss" scoped>
.view-all {
  color: #11453b;
  font-weight: 800;
  font-size: 14px;
}
</style>

<style lang="scss">
#business-table {
  font-size: 14px;

  th {
    border: none;
    background: #f2f1f1;
    color: #515251;
    font-weight: 600;
    text-transform: capitalize;
    border-radius: 0;
    padding-top: 20px;
    padding-bottom: 20px;

    &:first-child {
      border-top-left-radius: 16px;
    }

    &:last-child {
      border-top-right-radius: 16px;
    }
  }

  td {
    border: none;
    color: #515251;
    padding-top: 20px;
    padding-bottom: 20px;

    &:first-child {
      border-left: 2px solid #f2f1f1;
    }

    &:last-child {
      border-right: 2px solid #f2f1f1;
    }
  }

  tr:nth-child(2) td {
    background: #fbfbfb;
  }

  .business {
    @apply flex items-center gap-2;
  }

  .business-name {
    color: #292a29;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }

  .business-avatar {
    width: 32px;
    height: 32px;
    border-radius: 99px;
    border: 1px solid #f2f1f1;
  }
}
</style>
