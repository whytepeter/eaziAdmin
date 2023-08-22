<template>
  <div>
    <LoanInfoCards />
  </div>
  <div class="my-6 flex flex-wrap gap-4 items-center justify-around">
    <div class="grow w-72 flex items-center gap-2">
      <easiSearch class="grow" @search="handleSearch" v-model="searchText" placeholder="Search" />
      <Filter @filter="filterFunction" />
    </div>

    <div class="grow">
      <div class="border border-dark-100 rounded-xl p-2 flex gap-4 items-center justify-around">
        <div
          @click="$router.push({ query: { type: item.slug } })"
          v-for="(item, i) in loanCategory"
          :key="i"
          :class="{
            'font-bold underline underline-offset-4 decoration-2 ': displaynCategory == item.slug
          }"
          class="relative text-sm cursor-pointer"
        >
          {{ item.title }}

          <span
            class="absolute -top-4 font-bold right-0 bg-secondary px-1.5 text-white rounded-xl text-xs"
            v-if="item.value"
          >
            {{ item.value && item.value.toLocaleString() }}
          </span>
        </div>
      </div>
    </div>

    <div class="xl:grow flex flex-wrap items-center sm:justify-around gap-2">
      <easiButton
        v-for="(action, i) in loanActions"
        @click="action.action"
        :key="i"
        :disabled="action.disabled"
        :variant="action.variant"
        size="medium"
        >{{ action.title }}</easiButton
      >
    </div>
  </div>

  <div class="py-4">
    <CurrentLoan
      @selected="selectedLoan = $event"
      :searchText="searchText"
      v-if="displaynCategory === 'current_loan'"
    />
    <NewRequest
      @selected="selectedLoan = $event"
      :searchText="searchText"
      v-if="displaynCategory === 'new_request'"
    />
    <BlackListed v-if="displaynCategory === 'blacklisted'" />
  </div>

  <easiAlert
    @close="showConfirm = false"
    v-if="showConfirm"
    :icon="confirmIcon"
    :title="confirmTitle"
    :caption="confirmMessage"
  >
    <div class="grid grid-cols-2 gap-2">
      <easiButton @click="showConfirm = false" variant="outlined" block>Cancel</easiButton>
      <easiButton @click="confirmAction(confirmTitle)" :loading="confirmLoading" block
        >Yes</easiButton
      >
    </div>
  </easiAlert>

  <easiAlert @close="showAlert = false" v-if="showAlert" :caption="alertMessage">
    <easiButton @click="showAlert = false" block>Okay</easiButton>
  </easiAlert>

  <easiAlert
    @close="rejectAlert = false"
    v-if="rejectAlert"
    :icon="confirmIcon"
    title="Reject Loan Application"
    caption="Are you sure you want to reject this loan application? Please give a reason why the loan is rejected."
  >
    <div class="flex flex-col gap-6">
      <easiTextInput
        v-model="rejectReason"
        :error="errorRules.reject"
        label="Please give a reason"
      />
      <div class="grid grid-cols-2 gap-2">
        <easiButton @click="rejectAlert = false" variant="outlined" block>Cancel</easiButton>
        <easiButton @click="rejectLoan" :loading="rejectLoading" block>Confirm</easiButton>
      </div>
    </div>
  </easiAlert>

  <easiLoader v-if="loading" />
</template>

<script setup>
import confirmIcon from '@/assets/icons/confirm.svg?url'

import LoanInfoCards from './LoanInfoCards.vue'
import Filter from '@/components/Loan/LoanFilter.vue'
import CurrentLoan from './Tables/CurrentLoan.vue'
import NewRequest from './Tables/NewRequest.vue'
import BlackListed from './Tables/BlackListed.vue'

import { ref, computed, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDataStore } from '@/stores/data.js'
import { useToast } from 'vue-toastification'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()
const route = useRoute()
const router = useRouter()

const showConfirm = ref(false)
const confirmTitle = ref('')
const confirmMessage = ref('')
const confirmLoading = ref(false)

const rejectLoading = ref(false)
const rejectAlert = ref(false)
const rejectReason = ref('')

const errorRules = reactive({
  reject: false
})

const loading = ref(false)
const showAlert = ref(false)
const alertMessage = ref('')
const searchText = ref('')
const selectedLoan = ref([])

let payload = reactive({
  paging: {
    limit: 1000,
    skip: 0,
    search: ''
  },
  filter: {
    type: null,
    status: null
  },
  sort: {
    createdAt: -1
  }
})

const allLoans = computed(() => store.getAllLoans)

const displaynCategory = computed(() => {
  if (route.query.type) {
    return route.query.type
  } else {
    return 'current_loan'
  }
})

const loanCategory = computed(() => {
  const arr = allLoans.value && allLoans.value.filter((el) => el.status == 'PENDING')
  const count = arr ? arr.length : 0

  return [
    {
      title: 'Current Loan',
      slug: 'current_loan'
    },
    {
      title: 'New Request',
      slug: 'new_request',
      value: count
    },
    {
      title: 'Blacklisted',
      slug: 'blacklisted'
    }
  ]
})

const loanActions = computed(() => {
  const table = route.query.type ? route.query.type : 'current_loan'

  return [
    {
      title: 'Approve',
      disabled: table !== 'new_request',
      action() {
        if (selectedLoan.value.length) {
          confirmTitle.value = 'Approve Loan'
          confirmMessage.value = `Are you sure you want to approve this loan? However this action will not be reversible once taken.`
          showConfirm.value = true
        } else {
          toast.error('Select at least one loan')
        }
      },
      variant: 'fill'
    },
    {
      title: 'Clear off',
      disabled: table !== 'current_loan',
      action() {
        if (selectedLoan.value.length) {
          confirmTitle.value = 'Clear Loan'
          confirmMessage.value = `Are you sure you want to clear this loan? However, this action will not be reversible once taken.`
          showConfirm.value = true
        } else {
          toast.error('Select at least one loan')
        }
      },
      variant: 'outlined'
    },

    {
      title: 'Black List',
      disabled: table == 'blacklisted',
      action() {
        if (selectedLoan.value.length) {
          confirmTitle.value = 'Blacklist Loan'
          confirmMessage.value = `Are you sure you want to blacklist this blacklist? However, this action will not be reversible once taken.`
          showConfirm.value = true
        } else {
          toast.error('Select at least one loan')
        }
      },
      variant: 'outlined'
    },
    {
      title: 'Reject',
      disabled: table !== 'new_request',
      action() {
        if (selectedLoan.value.length) {
          rejectAlert.value = true
        } else {
          toast.error('Select at least one loan')
        }
      },
      variant: 'outlined'
    }
  ]
})

const confirmAction = async (arg) => {
  confirmLoading.value = true
  if (arg == 'Approve Loan') {
    await approveLoan()
  } else if (arg == 'Clear Loan') {
    await clearLoan()
  } else if (arg == 'Blacklist Loan') {
    await BlackListCompanyForLoan()
  }
  confirmLoading.value = false
}

const approveLoan = async () => {
  try {
    const res = await mutate({
      endpoint: 'ApproveLoan',
      data: {
        loanId: selectedLoan.value
      }
    })

    showConfirm.value = false
    console.log(res)

    if (res.success) {
      alertMessage.value = 'You have successfully approved this loan..'
      showAlert.value = true
      queryLoans()
      setTimeout(() => {
        showAlert.value = false
      }, 3000)
    } else {
      toast.error(res.message)
    }
  } catch (error) {
    console.log(error.message)
    toast.error(error.message)
  }
}

const clearLoan = async () => {
  try {
    const res = await mutate({
      endpoint: 'ClearLoan',
      data: {
        loanId: selectedLoan.value[0]
      }
    })

    showConfirm.value = false
    console.log(res)

    if (res.success) {
      alertMessage.value = 'This loan has been successfully cleared off.'
      showAlert.value = true
      queryLoans()
      setTimeout(() => {
        showAlert.value = false
      }, 3000)
    } else {
      toast.error(res.message)
    }
  } catch (error) {
    console.log(error.message)
    toast.error(error.message)
  }
}

const BlackListCompanyForLoan = async () => {
  const companyIds = []
  selectedLoan.value.forEach((el) => {
    const loan = getLoanById(el)
    console.log('Selected', loan)
    if (loan) {
      companyIds.push(loan.companyId._id)
    }
  })

  console.log(companyIds)

  try {
    const res = await mutate({
      endpoint: 'BlackListCompanyForLoan',
      data: {
        companyId: companyIds,
        loanBlackListed: true
      }
    })

    showConfirm.value = false
    console.log(res)

    if (res.success) {
      alertMessage.value = 'This business account has been successfully blacklisted.'
      showAlert.value = true

      setTimeout(() => {
        showAlert.value = false
      }, 3000)

      await queryBlackListed()
      router.replace({
        query: {
          type: 'blacklisted'
        }
      })
    } else {
      toast.error(res.message)
    }
  } catch (error) {
    console.log(error.message)
    // toast.error(error.message)
  }
}

const rejectLoan = async () => {
  if (rejectReason.value.trim() !== '') {
    rejectLoading.value = true

    try {
      const res = await mutate({
        endpoint: 'CancelLoan',
        data: {
          loanId: selectedLoan.value,
          reason: rejectReason.value
        }
      })

      rejectReason.value = ''
      rejectLoading.value = false
      rejectAlert.value = false
      console.log(res)

      if (res.success) {
        await queryLoans(false)

        alertMessage.value = 'This loan application has been successfully rejected.'
        showAlert.value = true

        setTimeout(() => {
          showAlert.value = false
        }, 3000)
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      rejectLoading.value = false
      console.log(error.message)
      toast.error(error.message)
    }
  } else {
    errorRules.reject = 'Please add a reason'
  }
}

const getLoanById = (id) => {
  return allLoans.value && allLoans.value.find((el) => el._id === id)
}

const handleSearch = () => {
  console.log(searchText.value)
}

// onMounted(async () => {
//   await queryLoans()
// })

const filterFunction = (arg) => {
  console.log('Filter', arg)
  payload = arg

  queryLoans()
}

const queryLoans = async (load = true) => {
  console.log('Loan', payload)
  try {
    loading.value = load

    const res = await query({
      endpoint: 'ListLoans',
      payload: payload,
      storeKey: 'loans'
    })

    queryLoanReport()

    console.log(res)

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}

const queryBlackListed = async () => {
  try {
    const payload = {
      sort: null
    }

    const res = await query({
      endpoint: 'ListBlackListedLoanCompanies',
      payload,
      storeKey: 'blackListedCompanies'
    })

    console.log(res)
  } catch (error) {
    console.log(error.message)
  }
}

const queryLoanReport = async (load = true) => {
  try {
    const res = await query({
      endpoint: 'QueryLoanReport',
      storeKey: 'loanReport'
    })

    console.log(res)
  } catch (error) {
    console.log(error.message)
  }
}

queryLoans()
</script>

<style></style>
