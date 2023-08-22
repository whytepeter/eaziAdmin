<template>
  <main class="flex flex-col gap-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h2 class="text-2xl font-medium">Payroll Receipt</h2>

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
          <Filter @query="queryPayrollReceipt" />
        </div>
      </div>
    </div>

    <PayrollTable :searchText="searchText" :transactions="visibleData" />

    <easiLoader v-if="loading" />
  </main>
</template>

<script setup>
import Tab from '@/components/LineTab.vue'
import Filter from './shared/ReceiptFilter.vue'
import PayrollTable from './Table/PayrollTable.vue'

import { computed, ref, watch, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()

const loading = ref(false)
const searchText = ref('')
const visibleData = ref([])
const payrollReceipt = computed(() => store.getPayrollReceipt)

const tabItems = computed(() => {
  const company =
    payrollReceipt.value && payrollReceipt.value.filter((el) => el.registrationType == 'COMPANY')
  const personal =
    payrollReceipt.value && payrollReceipt.value.filter((el) => el.registrationType == 'PERSONAL')
  return [
    {
      title: 'All',
      value: payrollReceipt.value && payrollReceipt.value.length
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
    payrollReceipt.value && payrollReceipt.value.filter((el) => el.registrationType == 'COMPANY')
  const personal =
    payrollReceipt.value && payrollReceipt.value.filter((el) => el.registrationType == 'PERSONAL')

  const obj = {
    Company: company,
    Personal: personal,
    All: payrollReceipt.value
  }

  visibleData.value = obj[arg.title]
}

const actions = computed(() => {
  return []
  return [
    {
      title: 'Amount',
      icon: 'pi pi-times',
      action() {
        console.log('Amount')
      }
    },
    {
      title: 'Date',
      icon: 'pi pi-times',
      action() {
        console.log('Date')
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

watch(payrollReceipt, () => {
  visibleData.value = payrollReceipt.value
})

onMounted(() => {
  visibleData.value = payrollReceipt.value
})

const queryPayrollReceipt = async (arg) => {
  try {
    loading.value = true

    const payload = {
      pagination: {
        page: 9,
        limit: null
      },
      filter: {
        company: 'ASC',
        amount: null
      }
    }

    console.log(arg)

    const res = await query({
      endpoint: 'GetPayrollReceipt',
      payload: {
        input: arg ? arg : payload
      },
      storeKey: 'payrollReceipt'
    })

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}

queryPayrollReceipt()
</script>
