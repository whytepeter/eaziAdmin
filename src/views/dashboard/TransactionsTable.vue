<template>
  <section v-if="data">
    <div class="w-full overflow-auto">
      <table class="transaction-table">
        <thead>
          <tr>
            <th>Business</th>
            <th>Subscription</th>
            <th>Employees</th>
            <th>Transaction Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row of data" :key="row.company">
            <td>
              <div class="flex items-center gap-4">
                <div class="h-5 w-5 rounded-full bg-green-500 flex-shrink-0"></div>
                <div>{{ row.company }}</div>
              </div>
            </td>
            <td>{{ row.subscription }}</td>
            <td>{{ row.noOfStaff }}</td>
            <td>{{ row.type }}</td>
            <td>{{ row.amount }}</td>
            <td>{{ row.status }}</td>
            <td>{{ dayjs(row.data).format('MMMM DD, YYYY') }}</td>
          </tr>

        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import dayjs from 'dayjs';
defineProps({
  data: Array,
  default: () => []
})

</script>

<style lang="scss" scoped>
.transaction-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;

  th {
    background: #f2f1f1;
    padding: 10px 18px;
    color: #515251;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.25px;
    text-align: center;
  }

  th:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: left;
  }

  th:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  tbody td {
    padding: 18px;
  }

  tbody td {
    background: white;
    text-align: center;
  }

  tbody td:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: left;
  }

  tbody td:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
}
</style>
