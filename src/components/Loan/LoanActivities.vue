<template>
  <div class="">
    <div class="flex items-center justify-between">
      <span class="text-lg mb-2">Loan Activities</span>
      <easiButton @click="comfirmPaymentModal = true">Confirm Payment</easiButton>
    </div>
    <div v-if="activities && activities.length" class="max-h-96 overflow-y-auto mt-2">
      <div
        v-for="(activity, i) in activities"
        :key="i"
        class="text-sm text-dark-800 grid grid-cols-2 sm:grid-cols-4 place-content-center items-center gap-4 border-b py-2 last:border-0 border-dark-400"
      >
        <span class="">{{ formatDate(activity.createdAt) }}</span>

        <div class="flex items-center gap-2">
          <div
            class="w-9 h-9 overflow-hidden flex-shrink-0 rounded-full bg-tertiary text-white flex items-center justify-center text-xs font-semibold"
          >
            <img
              v-if="loan && loan.companyId.company.logo"
              :src="loan && loan.companyId.company.logo"
              alt="object-cover"
            />
            <span v-else class="w-full h-full bg-primary flex items-center justify-center">
              {{ initials(loan && loan.companyId.company.companyName) }}
            </span>
          </div>
          <span>{{ fullName }}</span>
        </div>

        <span class="">{{ formatType(activity.type) }}</span>
        <span class="font-bold">
          {{ formatAmount(activity.amount) }}
        </span>
      </div>
    </div>

    <div class="p-6 text-center text-dark-500">No Activities yet</div>
  </div>

  <ConfirmPayment :loan="loan" :isOpen="comfirmPaymentModal" @close="comfirmPaymentModal = false" />
</template>

<script setup>
import ConfirmPayment from './ConfirmPayment.vue'

import { helperFunctions } from '@/composable/helperFunctions'
import { computed, ref } from 'vue'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query, mutate } = store
const { formatAmount, formatDate, initials } = helperFunctions

const props = defineProps({
  loan: {
    type: Object,
    default: () => ({})
  }
})

const loading = ref(false)
const comfirmPaymentModal = ref(false)

const activities = computed(() => store.getLoanActivities)
console.log('Activites.....', activities.value)

const formatType = (type) => {
  const obj = {
    PART_PAYMENT: 'Part Payment',
    CONFIRM_PAYMENT: 'Confirm Payment'
  }

  return type ? obj[type] : 'N/A'
}

const fullName = computed(() => {
  if (props.loan) {
    return props.loan.companyId.company.companyName
  } else {
    return 'N/A'
  }
})

const queryLoanActivities = async () => {
  try {
    loading.value = true

    const res = await query({
      endpoint: 'ListLoanActivity',
      payload: {
        loanId: props.loan._id
      },
      storeKey: 'loanActivities'
    })

    console.log(res)

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}
queryLoanActivities()
</script>

<style scope></style>
