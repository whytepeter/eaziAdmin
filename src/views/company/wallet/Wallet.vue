<template>
  <Loading :data="walletReport" :error="false">
    <div>
      <section class="grid lg:grid-cols-3 gap-6 mb-10">
        <balance-card label="Wallet Balance" :balance="formatCurrency(walletReport.closingBalance, false)" />

        <div class="inflow-outflow-card card card-mint">
          <h3 class="title">Total Inflow</h3>
          <div class="amount flex items-center gap-2 text-[ #292A29]">
            <NairaIcon class="text-primary text-sm" />
            <span class="font-bold"> {{ formatCurrency(walletReport.totalInflow, false) }} </span>
          </div>
          <Curve :value="1.94" />
        </div>

        <div class="inflow-outflow-card card card-gray">
          <h3 class="title">Total Outflow</h3>
          <div class="amount flex items-center gap-2 text-[#292A29]">
            <NairaIcon />
            <span class="font-bold">{{ formatCurrency(walletReport.totalOutflow, false) }} </span>
          </div>
          <Curve :value="-1.94" />
        </div>
      </section>

      <div class="flex flex-wrap justify-between items-center mb-12 gap-4">
        <h3 class="font-normal">Wallet Transactions</h3>
        <div class="flex gap-4">
          <SearchInput with-filter />
        </div>

        <div>
          <easiButton2>New Wallet Action</easiButton2>
        </div>
      </div>

      <div class="grid gap-10" v-if="!isEmpty(walletTransactionsByDate)">
        <div v-for="[date, transactions] of walletTransactionsByDate" :key="date">
          <div class="transaction-date">{{ date }}</div>
          <div class="grid gap-4">
            <WalletTransaction v-for="transaction, index of transactions" :key="`transaction-${date}-${index}`"
              :data="transaction" />
          </div>
        </div>
      </div>
      <div class="py-2 text-center" v-else>
        No Records found!
      </div>

    </div>
  </Loading>
</template>

<script setup>
import NairaIcon from '@/assets/icons/naira.svg'
import SearchInput from '@/components/SearchInput.vue'
import WalletTransaction from './WalletTransaction.vue'
import Curve from '@/components/Curve.vue'
import BalanceCard from '@/components/BalanceCard.vue'
import { useQuery } from '@/api/useQuery'
import { useRoute } from 'vue-router'
import { computed } from "vue"
import dayjs from 'dayjs'
import Loading from '@/components/Loading.vue'
import { formatCurrency } from '@/utils/currency'

const route = useRoute()

const companyId = route.params.slug

const { data: walletReport, } = useQuery('ViewWalletReportSingle', {
  input: {
    companyId,
  }
})

const isEmpty = (object) => {
  return Object.keys(object).length === 0
}

const walletTransactionsByDate = computed(() => {
  let group = {}
  if (walletReport.value) {
    let { transactions } = walletReport.value

    for (let item of transactions) {
      let date = dayjs(item.transactionDate).format('dddd, MMMM DD, YYYY')
      if (!group[date]) {
        group[date] = []
      }

      group[date].push(item)

    }
  }
  return Object.entries(group)
})

</script>

<style lang="scss" scoped>
.inflow-outflow-card {
  .title {
    color: #515251;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  .amount {
    margin-bottom: 14px;
  }
}

.transaction-date {
  color: #515251;
  font-weight: 600;
  letter-spacing: 0.25px;
  margin-bottom: 15px;
}
</style>
