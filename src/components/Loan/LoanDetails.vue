<template>
  <div :class="{ 'rounded-2xl border': !borderless }" class="p-6 px-4 sm:px-8 flex flex-col gap-6">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <span class="text-lg">{{ loanType }}</span>

      <div class="flex items-center gap-4">
        <div
          v-if="status.includes(loan.status)"
          :class="[statusColor.text]"
          class="flex items-center gap-2 text-xs font-bold"
        >
          <div :class="[statusColor.bg]" class="h-3 w-3 rounded-full"></div>
          <span class="capitalize">{{ statusColor.status }}</span>

          <easiButton v-if="loan.status == 'APPROVED'" size="medium" class="ml-6"
            >Clear Loan</easiButton
          >
        </div>

        <div v-else class="flex items-center gap-2 sm:gap-4 md:gap-6">
          <CreditScore v-if="showCreditScore" type="text" />
          <easiButton variant="outlined" size="medium">View Document</easiButton>
          <easiButton variant="outlined" size="medium" @click="rejectAlert = true"
            >Reject</easiButton
          >
          <easiButton size="medium" @click="showConfirm = true">Approve</easiButton>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2" v-if="status.includes(loan.status)">
      <span class="text-xs">In prograss (Stage 1/{{ loan.repaymentBreakDown.length }})</span>

      <easiRange
        :max="loan.repaymentBreakDown.length"
        :color="statusColor.color"
        disabled
        :value="
          loan.status == 'PENDING' || loan.status == 'CUSTOMER_CANCELED' ? 0 : activeBreakDown
        "
      />
    </div>

    <div class="flex flex-col sm:flex-row items-center text-sm mt-4">
      <!-- //// Loan Details //// -->
      <div class="w-full sm:w-1/2 sm:pr-8 sm:border-r">
        <div class="font-bold">Loan Details</div>

        <div class="border-b pt-4 pb-3 flex items-center justify-between">
          <span>Applicant</span>
          <span class="text-primary">
            {{
              loan.companyId &&
              loan.companyId.companyAdmin &&
              `${loan.companyId.companyAdmin.firstName} ${loan.companyId.companyAdmin.lastName}`
            }}
          </span>
        </div>

        <div class="border-b pt-4 pb-3 flex items-center justify-between">
          <span>Loan Amount</span>
          <span class="text-primary">{{ formatAmount(loan.loanAmountApplied) }}</span>
        </div>

        <div class="border-b pt-4 pb-3 flex items-center justify-between">
          <span>Loan Interest</span>
          <span class="text-primary">{{ loan.totalIntrest.toLocaleString() }}%</span>
        </div>

        <div class="border-b pt-4 pb-3 flex items-center justify-between">
          <span>Book Date</span>
          <span class="text-primary"> {{ formatDate(loan.createdAt) }}</span>
        </div>

        <div class="pt-4 pb-3 flex items-center justify-between">
          <span>Maturity Date</span>
          <span class="text-primary">{{ formatDate(loan.durationEndedAt) }}</span>
        </div>
      </div>

      <!-- //// Repayment Details //// -->
      <div class="w-full sm:w-1/2 sm:pl-8 mt-6 sm:mt-0">
        <div class="font-bold">Repayment</div>

        <div class="border-b pt-4 pb-3 flex items-center justify-between">
          <span>Total Amount Paid</span>
          <span class="text-primary">{{ formatAmount(loan.totalRepaymentPaid) }}</span>
        </div>

        <div class="border-b pt-4 pb-3 flex items-center justify-between">
          <span>Total Balance</span>
          <span class="text-primary">{{ formatAmount(loan.totalRepaymentAmount) }}</span>
        </div>

        <div class="border-b pt-4 pb-3 flex items-center justify-between">
          <span>Overdue</span>
          <span class="text-primary">{{ formatAmount(0) }}</span>
        </div>

        <div class="border-b pt-4 pb-3 flex items-center justify-between">
          <span>Next Repayment Amount</span>
          <span class="text-primary">{{ formatAmount(nextRepayment.amount) }}</span>
        </div>

        <div class="pt-4 pb-3 flex items-center justify-between">
          <span>Next Repayment Date</span>
          <span class="text-primary">{{ formatDate(nextRepayment.date) }}</span>
        </div>
      </div>
    </div>

    <div v-if="loan && loan.purpose" class="flex flex-col gap-2 text-sm">
      <span class="text-sm">Loan Purpose</span>
      <div class="border rounded-lg px-4 pt-2 pb-8 font-bold">
        {{ loan && loan.purpose }}
      </div>
    </div>

    <RepaymentBreakDown :loan="loan" />

    <easiButton
      @click="viewLoanContract"
      variant="text"
      size="medium"
      :loading="loanContract"
      color="#359AA0"
      class="text-[#359AA0] text-sm flex items-center justify-center italic gap-2 mx-auto"
    >
      <i class="far fa-file-alt"></i>
      <span>View Contract</span>
    </easiButton>
  </div>

  <easiAlert @close="showAlert = false" v-if="showAlert" :caption="alertMessage">
    <easiButton @click="showAlert = false" block>Okay</easiButton>
  </easiAlert>

  <easiAlert
    @close="showConfirm = false"
    v-if="showConfirm"
    :icon="confirmIcon"
    title="Approve Loan"
    caption="Are you sure you want to approve this loan? However this action will not be reversible once taken."
  >
    <div class="grid grid-cols-2 gap-2">
      <easiButton @click="showConfirm = false" variant="outlined" block>Cancel</easiButton>
      <easiButton @click="approveLoan" :loading="loading" block>Yes</easiButton>
    </div>
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
        <easiButton @click="rejectLoan" :loading="loading" block>Confirm</easiButton>
      </div>
    </div>
  </easiAlert>
</template>

<script setup>
import RepaymentBreakDown from '@/components/Loan/LoanRepaymentBreakDown.vue'
import CreditScore from '@/components/Loan/LoanCreditScore.vue'

import confirmIcon from '@/assets/icons/confirm.svg?url'

import { computed, ref, reactive } from 'vue'
import { helperFunctions } from '@/composable/helperFunctions'
import { useDataStore } from '@/stores/data.js'
import { useToast } from 'vue-toastification'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()
const { formatAmount, formatDate, viewPDF } = helperFunctions

const props = defineProps({
  showCreditScore: {
    type: Boolean,
    default: false
  },
  borderless: {
    type: Boolean,
    default: false
  },

  loan: {
    type: Object,
    default: () => ({})
  }
})

const loanContract = ref(false)
const loading = ref(false)
const showConfirm = ref(false)
const showAlert = ref(false)
const alertMessage = ref('')

const rejectAlert = ref(false)
const rejectReason = ref('')
const errorRules = reactive({
  reject: false
})

const user = computed(() => store.getUser)
const loanType = computed(() => {
  const types = {
    PAYROLL_COVER: 'Payroll Cover Loan',
    ENTERPRISE_LOAN: 'Enterprise Loan',
    SALARY_ADVANCE: 'Salary Advance Loan'
  }

  return types[props.loan && props.loan.type]
})

const activeBreakDown = computed(() => {
  let index = 0
  props.loan &&
    props.loan.repaymentBreakDown.find((el, i) => {
      if (el.status == 'active') {
        index = i + 1
      }
    })

  return index
})

const nextRepayment = computed(() => {
  let amount = 0,
    date = ''
  props.loan &&
    props.loan.repaymentBreakDown.find((el, i) => {
      if (el.status == 'active') {
        amount = el.totalAmount
        date = el.dueDate
      }
    })
  return { amount, date }
})

const status = ['APPROVED', 'COMPLETED', 'DECLINED', 'CUSTOMER_CANCELED']
const statusColor = computed(() => {
  const colors = {
    APPROVED: {
      text: 'text-[#359AA0]',
      bg: 'bg-[#359AA0]',
      status: 'Active',
      color: '#359AA0'
    },
    COMPLETED: {
      text: 'text-[#219653]',
      bg: 'bg-[#219653]',
      status: 'Completed',
      color: '#219653'
    },
    DECLINED: {
      text: 'text-[#EF4444]',
      bg: 'bg-[#EF4444]',
      status: 'Rejected',
      color: '#EF4444'
    },
    CUSTOMER_CANCELED: {
      text: 'text-[#EF4444]',
      bg: 'bg-[#EF4444]',
      status: 'Cancelled',
      color: '#EF4444'
    }
  }

  return status.includes(props.loan && props.loan.status)
    ? colors[props.loan && props.loan.status]
    : ''
})

const viewLoanContract = async () => {
  loanContract.value = true
  try {
    const res = await query({
      endpoint: 'LoanContract',
      payload: {
        loanId: props.loan && props.loan._id,
        companyId: props.loan && props.loan.companyId._id,
        creatorId: user.value && user.value._id
      }
    })

    console.log(res)

    const { base64 } = res.data

    viewPDF(base64)

    loanContract.value = false
  } catch (error) {
    loanContract.value = false
    loading.value = false
    console.log(error.message)
    toast.error(error.message)
  }
}

const approveLoan = async () => {
  loading.value = true
  try {
    const res = await mutate({
      endpoint: 'ApproveLoan',
      data: {
        loanId: [props.loan._id]
      }
    })
    loading.value = false
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
    loading.value = false
    console.log(error.message)
    toast.error(error.message)
  }
}

const rejectLoan = async () => {
  if (rejectReason.value.trim() !== '') {
    loading.value = true

    try {
      const res = await mutate({
        endpoint: 'CancelLoan',
        data: {
          loanId: [props.loan._id],
          reason: rejectReason.value
        }
      })

      rejectReason.value = ''
      loading.value = false
      rejectAlert.value = false
      console.log(res)

      if (res.success) {
        await queryLoans()

        alertMessage.value = 'This loan application has been successfully rejected.'
        showAlert.value = true

        setTimeout(() => {
          showAlert.value = false
        }, 3000)
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      loading.value = false
      console.log(error.message)
      toast.error(error.message)
    }
  } else {
    errorRules.reject = 'Please add a reason'
  }
}

const queryLoans = async () => {
  const payload = {
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
  }

  try {
    const res = await query({
      endpoint: 'ListLoans',
      payload: payload,
      storeKey: 'loans'
    })

    console.log(res)
  } catch (error) {
    console.log(error.message)
  }
}
</script>

<style></style>
