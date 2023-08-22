<template>
  <div>
    <ReportHeader title="Wallet Report">
      <template #download>
        <Download />
      </template>
    </ReportHeader>
    <div class="grid grid-cols-2 gap-4 gap-y-8">
      <div class="card card-white">
        <h3 class="font-medium mb-5">Average Transaction Frequency</h3>
        <AvgTransactionFrequency v-if="avgTransactionFreqData" :data="avgTransactionFreqData" />
      </div>

      <div class="card card-white">
        <h3 class="font-normal mb-4">Top up</h3>

        <PieChart v-if="topUp" :data="topUp" />
      </div>

      <div>
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium">Latest Transactions</h3>
          <div class="w-3/5">
            <SearchInput with-filter />
          </div>
        </div>
        <LatestTransactions :data="latestTransactionsData" />
      </div>

      <div class="card card-white">
        <h3 class="font-normal mb-4">Withdrawal</h3>
        <PieChart v-if="withdrawal" :data="withdrawal" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ReportHeader from '../shared/ReportHeader.vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import LatestTransactions from '../shared/LatestTransactions.vue'
import { computed, } from 'vue'
import Download from './Download.vue'
import { useQuery } from '@/api/useQuery'
import AvgTransactionFrequency from './AvgTransactionFrequency.vue'
import PieChart from './PieChart.vue'
import SearchInput from "@/components/SearchInput.vue"

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


// ViewWalletChart
// ViewWalletReport
// ViewWalletReportSingle

const { data: walletChart, } = useQuery('ViewWalletChart', {
  input: {
    filter: 'MONTH'
  }
})
const { data: walletReport, } = useQuery('ViewWalletReport', {})

const latestTransactionsData = computed(() => {
  if (walletReport?.value) {
    const { walletTransaction } = walletReport.value
    return walletTransaction.map(record =>
    ({
      date: record.createdAt,
      companyLogo: record.company.company.logo,
      company: record.company.company.companyName,
      transaction: record.narration,
      amount: record.amount,
    })
    )
  }
  return []
})

const avgTransactionFreqData = computed(() => {
  if (walletReport?.value) {
    const {
      averageDailyAmount,
      averageMonthlyAmount,
      averageYearlyAmount,
      weekly,
      monthly,
      yearly
    } = walletReport.value

    return {
      averageDailyAmount,
      averageMonthlyAmount,
      averageYearlyAmount,
      weekly,
      monthly,
      yearly
    }
  }
  return null
})

const topUp = computed(() => {
  if (walletChart && walletChart.value) {
    let { totalTopUp, paystackTopUp, bankTopUp } = walletChart.value

    // const legend = {
    //   total: {
    //     label: 'Total Top up',
    //     value: totalTopUp
    //   },
    //   items: [
    //     {
    //       label: 'Bank Transfer (52.1%)',
    //       value: 500
    //     },
    //     {
    //       label: 'Paystack (47.9%)',
    //       value: 500
    //     },
    //   ]
    // }

    // return {
    //   chart,
    //   legend
    // }

    const chart = {
      items: [
        { value: paystackTopUp, color: '#396F64', label: 'Paystack' },
        { value: bankTopUp, color: '#11453B', label: 'Bank Transfer' },
      ],
      total: {
        label: 'Total Top up',
        value: totalTopUp
      }
    }

    return chart
  }
  return null
})



const withdrawal = computed(() => {
  if (walletChart && walletChart.value) {
    let { totalWithdrawal, paystackWithdrawal, bankWithdrawal } = walletChart.value

    const chart = {
      items: [
        { value: paystackWithdrawal, color: '#EA4E4B', label: 'Paystack' },
        { value: bankWithdrawal, color: '#808080', label: 'Bank Transfer' },
      ],
      total: {
        label: 'Total Withdrawal',
        value: totalWithdrawal
      }
    }

    return chart
  }
  return null
})

</script>

<style lang="scss" scoped></style>
