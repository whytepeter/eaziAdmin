<template>
  <main class="flex flex-col gap-8">
    <div class="text-sm text-dark-600 flex gap-1 items-center">
      <span @click="$router.go(-1)" class="cursor-pointer hover:underline hover:text-dark-800"
        >Reconciliation</span
      >/
      <span> Eazipay Statement</span>
    </div>

    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h2 class="text-2xl font-bold">Statement</h2>

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

    <div class="flex flex-col gap-3">
      <Tab :tabItems="tabItems" @onSetActive="setActiveTab" />

      <div class="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div class="flex items-center gap-4 gap-2 md:gap-4 flex-wrap">
          <button
            v-for="(btn, i) in actions"
            @click="btn.action"
            :key="`btn-${i}`"
            class="border border-dark-200 rounded-full px-2 py-[1.5px] hover:opacity-70"
          >
            <i :class="[btn.icon, 'text-xs text-dark-500 mr-1']"></i>
            <span class="text-dark-500 text-xs">{{ btn.title }}</span>
          </button>
        </div>

        <div class="flex items-center gap-2 w-full sm:w-6/12 md:w-5/12">
          <easiSearch v-model="searchText" class="grow" />
          <Filter />
        </div>
      </div>
    </div>

    <Transaction :searchText="searchText" :transactions="transactions" />

    <easiLoader v-if="loading" />
  </main>
</template>

<script setup>
import Tab from '@/components/LineTab.vue'
import Filter from './shared/ReconciliationFilter.vue'
import Transaction from './Table/Transaction.vue'

import { computed, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()

const loading = ref(false)
const searchText = ref('')

const transactions = computed(() => store.getStatements)

console.log('STATEMENTS', transactions.value)

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
      title: 'Print Statement',
      icon: 'pi pi-print',
      action() {
        console.log('Print Statement')
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

const queryStatment = async () => {
  try {
    const payload = {
      pagination: {
        page: null,
        limit: null
      }
    }

    loading.value = true

    const res = await query({
      endpoint: 'GetReconciliationStatement',
      payload: {
        input: payload
      },
      storeKey: 'statements'
    })

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}
queryStatment()
</script>

<style></style>
