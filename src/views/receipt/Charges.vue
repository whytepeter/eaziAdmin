<template>
  <main class="flex flex-col gap-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h2 class="text-2xl font-medium">Charges Receipt</h2>

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
          <!-- <Filter @query="queryChargeReceipt" /> -->
        </div>
      </div>
    </div>

    <ChargesTable :searchText="searchText" :transactions="visibleData" />
    <easiLoader v-if="loading" />
  </main>
</template>

<script setup>
import Tab from '@/components/LineTab.vue'
import Filter from './shared/ReceiptFilter.vue'
import ChargesTable from './Table/ChargesTable.vue'

import { computed, ref, watch, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()

const loading = ref(false)
const searchText = ref('')

const visibleData = ref([])
const chargeReceipt = computed(() => store.getChargeReceipt)

console.log('chargeReceipt', chargeReceipt.value)

const tabItems = computed(() => {
  const company =
    chargeReceipt.value &&
    chargeReceipt.value.filter((el) => el.companyId.registrationType == 'COMPANY')
  const personal =
    chargeReceipt.value &&
    chargeReceipt.value.filter((el) => el.companyId.registrationType == 'PERSONAL')
  return [
    {
      title: 'All',
      value: chargeReceipt.value && chargeReceipt.value.length
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
    chargeReceipt.value &&
    chargeReceipt.value.filter((el) => el.companyId.registrationType == 'COMPANY')
  const personal =
    chargeReceipt.value &&
    chargeReceipt.value.filter((el) => el.companyId.registrationType == 'PERSONAL')

  const obj = {
    Company: company,
    Personal: personal,
    All: chargeReceipt.value
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

watch(chargeReceipt, () => {
  visibleData.value = chargeReceipt.value
})

onMounted(() => {
  visibleData.value = chargeReceipt.value
})

const queryChargeReceipt = async (arg) => {
  try {
    loading.value = true
    const payload = {
      pagination: {
        page: null,
        limit: 1000
      }
    }

    const res = await query({
      endpoint: 'GetChargesReceipt',
      payload: {
        input: arg ? arg : payload
      },
      storeKey: 'chargeReceipt'
    })

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}

queryChargeReceipt()
</script>
