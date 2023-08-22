<template>
  <div class="table-scroller">
    <table class="table-stripped">
      <thead>
        <tr>
          <th>Business</th>
          <th>Industry</th>
          <th>Payroll Type</th>
          <th>Total Payroll</th>
          <th>Package</th>
          <th>Payroll Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row of data" :key="row._id">
          <td>
            <div class="flex items-center gap-2">
              <!-- <div class="h-8 w-8 rounded-full bg-blue-100"></div> -->
              <div>{{ row.company }}</div>
            </div>
          </td>
          <td>{{ row.industry }}</td>
          <td>{{ row.payrollType }}</td>
          <td>{{ formatCurrency(row.totalPayroll) }}</td>
          <td>
            <span class="package-starter">Stater</span>
          </td>
          <td>{{ dayjs(row.date, 'MMMM DD, YYYY') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { formatCurrency } from '@/utils/currency';
import dayjs from 'dayjs';

defineProps({
  data: {
    type: Array,
    default: () => [],
  }
})
</script>

<style lang="scss" scoped>
.package-starter {
  color: #ea4e4b;
}
</style>
