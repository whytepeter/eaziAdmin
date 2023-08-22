<template>
  <main class="flex flex-col gap-8">
    <div class="text-sm text-dark-600 flex gap-1 items-center">
      <span @click="$router.go(-1)" class="cursor-pointer hover:underline hover:text-dark-800"
        >Reconciliation</span
      >/
      <span> {{ company && company.company }}</span>
    </div>

    <div
      style="box-shadow: 0px 9px 18px rgba(170, 170, 170, 0.15)"
      class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl"
    >
      <div class="flex items-center gap-2 flex-shrink-0">
        <div
          :class="[company && !company.pfp ? 'border-2' : '']"
          class="w-14 h-14 border-tertiary rounded-full bg-primary overflow-hidden font-semibold text-white flex items-center justify-center"
        >
          <img
            v-if="company && company.pfp"
            :src="company && company.pfp"
            alt=""
            class="object-cover"
          />
          <span v-else>
            {{ initials(company && company.company) }}
          </span>
        </div>
        <h2 class="text-2xl font-bold">{{ company && company.company }}</h2>
      </div>
      <div class="flex items-center gap-4">
        <easiButton
          v-for="(btn, i) in buttonActions"
          :key="`button-${i}`"
          @click="btn.action"
          variant="outlined"
          class="flex items-center gap-2"
        >
          <i :class="[btn.icon]"></i> {{ btn.title }}</easiButton
        >
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      <WalletCard
        user
        :value="company && company.reconciliationValue"
        :amount="company && company.walletBalance"
      />
      <InflowOutflowCard :value="0.5" :amount="company && company.totalInflow" date="last month" />
      <InflowOutflowCard
        type="outflow"
        :value="0.5"
        :amount="company && company.totalOutflow"
        date="last month"
      />
    </div>

    <div class="mt-10 flex flex-col gap-3">
      <Tab :tabItems="tabItems" @onSetActive="setActiveTab" />

      <div class="flex flex-col md:flex-row sm:items-center gap-4 justify-between">
        <div class="flex items-center gap-2 md:gap-4 flex-wrap">
          <button
            v-for="(btn, i) in actions"
            @click="btn.action"
            :key="`btn-${i}`"
            class="border border-dark-200 rounded-full px-2 py-[1.5px] text-dark-5000 group hover:border-primary"
          >
            <i :class="[btn.icon, 'text-xs text-dark-500 group-hover:text-primary mr-1']"></i>
            <span class="text-dark-500 group-hover:text-primary text-xs">{{ btn.title }}</span>
          </button>
        </div>

        <div class="flex items-center gap-2 w-full md:w-6/12 md:w-5/12">
          <easiSearch v-model="searchText" class="grow" />
          <Filter />
        </div>
      </div>
    </div>

    <Transaction
      :user="company && company.company"
      :transactions="visibleData"
      :searchText="searchText"
    />

    <easiLoader v-if="loading" />
  </main>
</template>

<script setup>
import WalletCard from './Card/WalletCard.vue'
import InflowOutflowCard from './Card/InflowOutflowCard.vue'
import Tab from '@/components/LineTab.vue'
import Filter from './shared/ReconciliationFilter.vue'
import Transaction from './Table/Transaction.vue'

import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { helperFunctions } from '@/composable/helperFunctions'
import { useToast } from 'vue-toastification'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()

const { initials } = helperFunctions
const route = useRoute()

const loading = ref(false)
const searchText = ref('')
const visibleData = ref([])

const reconciliations = computed(() => store.getReconciliation)
const company = computed(() => {
  const id = route.params.id
  return reconciliations.value && reconciliations.value.find((el) => el._id == id)
})

console.log(company.value)
const transactions = computed(() => {
  const arr = store.getCompanyTransactions
  return arr.length
    ? arr.map((el) => {
        el.company = company.value && company.value.company
        return el
      })
    : []
})

console.log('Company Balance', transactions.value)

const tabItems = computed(() => {
  const inflow =
    transactions.value && transactions.value.filter((el) => el.transactionType == 'CREDIT')
  const outflow =
    transactions.value && transactions.value.filter((el) => el.transactionType == 'DEBIT')

  return [
    {
      title: 'All',
      value: transactions.value && transactions.value.length
    },
    {
      title: 'Inflow',
      value: inflow && inflow.length
    },
    {
      title: 'Outflow',
      value: outflow && outflow.length
    }
  ]
})
const setActiveTab = (arg) => {
  const inflow =
    transactions.value && transactions.value.filter((el) => el.transactionType == 'CREDIT')
  const outflow =
    transactions.value && transactions.value.filter((el) => el.transactionType == 'DEBIT')

  const obj = {
    Inflow: inflow,
    Outflow: outflow,
    All: transactions.value
  }

  visibleData.value = obj[arg.title]
}

const actions = computed(() => {
  return [
    {
      title: 'Mark As True',
      icon: 'pi pi-check',
      action() {
        console.log('Mark as True')
      }
    },
    {
      title: 'Mark As False',
      icon: 'pi pi-times',
      action() {
        console.log('Mark as False')
      }
    },
    {
      title: 'View Receipt',
      icon: 'pi pi-file',
      action() {
        console.log('View Receipt')
      }
    },
    {
      title: 'Download Receipt',
      icon: 'pi pi-download',
      action() {
        console.log('Download Receipt')
      }
    }
  ]
})

const buttonActions = computed(() => {
  return [
    {
      title: 'Download',
      icon: 'pi pi-download',
      action() {
        console.log('Mark as True')
      }
    },
    {
      title: 'Share',
      icon: 'pi pi-share-alt',
      action() {
        console.log('Share')
      }
    },
    {
      title: 'Print',
      icon: 'pi pi-print',
      action() {
        console.log('Print')
      }
    }
  ]
})

watch(transactions, () => {
  visibleData.value = transactions.value
})

onMounted(() => {
  visibleData.value = transactions.value
})

const queryCompanyTransaction = async () => {
  const id = route.params.id
  try {
    const payload = {
      companyId: id,
      pagination: {
        page: null,
        limit: null
      }
    }

    const res = await query({
      endpoint: 'GetCompanyReconciliationTransactions',
      payload: {
        input: payload
      },
      storeKey: 'companyTransactions'
    })
  } catch (error) {
    console.log(error.message)
  }
}

queryCompanyTransaction()
</script>

<style></style>
