<template>
  <div class="latest-transactions">
    <table class="table">
      <thead>
        <th>Date</th>
        <th>Business</th>
        <th>Transaction</th>
        <th>Amount</th>
      </thead>
      <tbody>
        <tr v-for="row of data" :key="row._id">
          <td class="whitespace-nowrap">{{ dayjs(row.date).format('MMMM DD, YYYY') }}</td>
          <td>
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 flex-shrink-0 rounded-full bg-gray-200 bg-cover bg-center bg-no-repeat"
                v-if="row.companyLogo" :style="{ backgroundImage: `url(${row.companyLogo})` }">
              </div>
              <div>{{ row.company }}</div>
            </div>
          </td>
          <td>{{ row.transaction }}</td>
          <td class="font-bold">{{ formatCurrency(row.amount) }}</td>
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
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.latest-transactions {
  max-height: 350px;
  overflow: auto;
}

.table {
  font-size: 14px;
  width: 100%;

  th {
    background: #f2f1f1;
    padding: 10px;
    text-align: left;
  }

  tbody td {
    padding: 10px;
    border-bottom: 1px solid #f2f1f1;
  }
}
</style>
