<template>
  <div class="table-scroller">
    <table class="table-stripped">
      <thead>
        <tr>
          <th>Business</th>
          <th>Loan Amount</th>
          <th>Date Disbursed</th>
          <th>Amount paid</th>
          <th>Repayment Balance</th>
          <th>Repayment Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="`loan-transaction-row-${i}`">
          <td>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-pink-200 rounded-full"></div>
              <div>Zenith Ventures</div>
            </div>
          </td>
          <td>Enterprise</td>
          <td>March 25, 2021</td>
          <td class="amount-paid">N4,567,987.90</td>
          <td>N4,567,987.90</td>
          <td>March 25, 2022</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.amount-paid {
  color: #219653;
}
</style>
