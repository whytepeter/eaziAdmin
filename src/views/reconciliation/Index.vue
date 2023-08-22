<template>
  <main class="flex flex-col gap-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      <WalletCard
        :value="balance && balance.reconciliationValue"
        :amount="balance && balance.consolidatedBalance"
      >
        <easiButton
          @click="$router.push({ name: 'ReconciliationStatement' })"
          color="tertiary"
          block
        >
          <span class="text-primary">View Statement</span>
        </easiButton>
      </WalletCard>
      <InflowOutflowCard :value="0.5" :amount="balance && balance.inflow" date="last month" />
      <InflowOutflowCard
        type="outflow"
        :value="0.5"
        :amount="balance && balance.outflow"
        date="last month"
      />
    </div>

    <div class="mt-10 flex flex-col gap-3">
      <Tab :tabItems="tabItems" @onSetActive="setActiveTab" />

      <div class="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div class="flex items-center gap-4">
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

        <div class="flex items-center gap-2 w-full sm:w-6/12 md:w-5/12">
          <easiSearch v-model="searchText" class="grow" />
          <Filter @loading="loading = $event" />
        </div>
      </div>
    </div>

    <div class="mt-4">
      <ReconciliationList :payload="payload" :data="visibleData" :searchText="searchText" />
    </div>

    <easiLoader v-if="loading" />
  </main>
</template>

<script setup>
import WalletCard from './Card/WalletCard.vue'
import InflowOutflowCard from './Card/InflowOutflowCard.vue'
import Tab from '@/components/LineTab.vue'
import Filter from './shared/ReconciliationFilter.vue'
import ReconciliationList from './Table/ReconciliationList.vue'

import { computed, onMounted, watch, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()

const loading = ref(false)
const searchText = ref('')

const payload = ref({
  filter: {
    company: null,
    month: null,
    reconciliationValue: null,
    transaction: null,
    year: null
  },
  pagination: {
    limit: 1000,
    page: null
  }
})

const visibleData = ref([])
const reconciliations = computed(() => store.getReconciliation)
console.log('REconCiliation...', reconciliations.value)

const balance = computed(() => store.getReconciliationBalance)
console.log('Balance', balance.value)

const tabItems = computed(() => {
  const company =
    reconciliations.value && reconciliations.value.filter((el) => el.registrationType == 'COMPANY')
  const personal =
    reconciliations.value && reconciliations.value.filter((el) => el.registrationType == 'PERSONAL')
  return [
    {
      title: 'All',
      value: reconciliations.value && reconciliations.value.length
    },
    {
      title: 'Company',
      value: company && company.length
    },
    {
      title: 'Personal',
      value: personal && personal.length
    }
  ]
})
const setActiveTab = (arg) => {
  const company =
    reconciliations.value && reconciliations.value.filter((el) => el.registrationType == 'COMPANY')
  const personal =
    reconciliations.value && reconciliations.value.filter((el) => el.registrationType == 'PERSONAL')

  const obj = {
    Company: company,
    Personal: personal,
    All: reconciliations.value
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
    }
  ]
})

watch(reconciliations, () => {
  visibleData.value = reconciliations.value
})

onMounted(() => {
  visibleData.value = reconciliations.value
})

const queryReconciliationList = async () => {
  try {
    const res = await query({
      endpoint: 'GetReconciliationList',
      payload: {
        input: payload.value
      },
      storeKey: 'reconciliationList'
    })
  } catch (error) {
    console.log(error.message)
  }
}
const queryBalance = async () => {
  try {
    const res = await query({
      endpoint: 'GetReconciliationBalances',
      storeKey: 'reconciliationBalance'
    })
  } catch (error) {
    console.log(error.message)
  }
}

const queryRecentTransactions = async () => {
  try {
    const payload = {
      amount: null,
      company: null,
      month: null,
      year: null
    }

    const res = await query({
      endpoint: 'ListRecentTransactions',
      payload: {
        input: payload
      },
      storeKey: 'recentTransactions'
    })
  } catch (error) {
    console.log(error.message)
  }
}

queryBalance()
queryReconciliationList()
// queryRecentTransactions()
</script>

<style></style>
