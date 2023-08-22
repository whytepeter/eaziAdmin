<template>
  <div>
    <Loading :data="payrollData" :error="false">
      <div v-if="payrollData" class="grid lg:grid-cols-3 gap-6 mb-10">

        <div class="card payroll-card green">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text">Total Payroll</h3>
            <!-- <div class="text">February 5, 2023</div> -->
          </div>
          <div class="flex gap-2">
            <div class="info-item w-4/12">
              <div class="label">Total salaries</div>
              <div class="value">{{ formatCurrency(payrollTotals[0]?.totalSalaries) }}</div>
            </div>
            <div class="info-item w-8/12">
              <div class="label">Total employees paid</div>
              <div class="value flex gap-2 items-center">
                <div>
                  <NairaIcon class="" />
                </div>
                {{ payrollTotals[0]?.totalEmployeesPaid }}
              </div>
            </div>
          </div>
        </div>

        <div class="card payroll-card">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text">Total Compliance</h3>
            <!-- <div class="text">February 5, 2023</div> -->
          </div>
          <div class="flex gap-2">
            <div class="info-item w-4/12">
              <div class="label">Total salaries</div>
              <div class="value">{{ formatCurrency(payrollTotals[1].totalCompliance) }}</div>
            </div>
            <div class="info-item w-8/12">
              <div class="label">Total employees paid</div>
              <div class="value flex gap-2 items-center">
                <div>
                  <NairaIcon class="" />
                </div>
                {{ payrollTotals[1].noOfCompliance }}
              </div>
            </div>
          </div>
        </div>

        <div class="card payroll-card">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text">Last payroll month</h3>
            <div class="text">{{ payrollTotals[2].lastPayrollMonth }}</div>
          </div>

          <!-- <div class="flex gap-2">
            <div class="info-item w-4/12">
              <div class="label">Total salaries</div>
              <div class="value">{{  payrollTotals[1].totalCompliance }}</div>
            </div>
            <div class="info-item w-8/12">
              <div class="label">Total employees paird</div>
              <div class="value flex gap-2 items-center">
                <div>
                  <NairaIcon class="" />
                </div>
               {{ payrollTotals[1].noOfCompliance }}
              </div>
            </div>
          </div> -->

        </div>




        <!-- <PayrollCard theme="green" title="Total Payroll" />
        <PayrollCard title="Last Payroll Month" />
        <PayrollCard title="Compliance Remitted" /> -->
      </div>

      <div class="flex flex-wrap gap-4 items-center justify-between mb-12">
        <h3 class="font-normal">Payroll Transactions</h3>
        <div class="flex gap-4">
          <SearchInput />
          <FilterSelect />
        </div>

        <div>
          <easiButton>New Payroll Action</easiButton>
        </div>
      </div>

      <PayrollTransactionsTable :data="payrollData.payrollRecords" />

    </Loading>
  </div>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'
// import PayrollCard from './PayrollCard.vue'
import FilterSelect from '@/components/FilterSelect.vue'
import PayrollTransactionsTable from './PayrollTransactionsTable.vue'
import { useQuery } from '@/api/useQuery'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Loading from '@/components/Loading.vue'
import { formatCurrency } from "@/utils/currency"

const route = useRoute()
const companyId = route.params.slug

console.log({ companyId })

const { data: payrollData } = useQuery('PayrollDashboard', { companyId: companyId })

const payrollTotals = computed(() => {
  if (payrollData.value) {
    let { payrollTotals } = payrollData.value
    return payrollTotals
  }
  return []
})

</script>

<style lang="scss" scoped>
.payroll-card {
  background: #F2F1F1;
  border: 1px solid #E7E8E7;
  padding: 15px 20px 20px;

  .text {
    color: #515251;
    letter-spacing: 0.25px;
    font-weight: 400;
    font-size: 16px;
  }

  .info-item {
    border-radius: 8px;
    padding: 10px;
    background: white;
    border: 1px solid #E7E8E7;

    .label {
      margin-bottom: 4px;
    }

    .value {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    }
  }

  &.green {
    background-color: #11453B;
    color: white;

    .text {
      color: white;
    }

    .info-item {
      background: #0B372F;
      border: 1px solid #17564A;
    }

  }


}
</style>
