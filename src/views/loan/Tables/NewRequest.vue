<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl">New Loan Requests</h2>
      <easiPaginate
        :data="filteredLoans"
        info-only
        @page:update="updatePage"
        :currentPage="currentPage"
        v-model:pageSize="pageSize"
        :visibleData="visibleData"
      />
    </div>
    <DataTable
      v-model:selection="holdData"
      id="table-style"
      class="RowCursorPointer"
      dataKey="_id"
      scrollable
      removableSort
      :value="visibleData"
      @rowSelect="onRowSelect"
      @rowUnselect="onRowUnselect"
    >
      <Column v-model="holdData" selectionMode="multiple" headerStyle="width: 2rem"> </Column>
      <Column
        style="white-space: nowrap"
        sortable
        field="companyId.company.companyName"
        header="Applicant"
      >
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)" class="applicant">
            <div>
              <div class="applicant-avatar">
                <img
                  v-if="slotProps.data.companyId.company.logo"
                  :src="slotProps.data.companyId.company.logo"
                  alt=""
                  class="object-cover w-full h-full"
                />
                <span
                  v-else
                  class="w-full h-full bg-primary flex items-center justify-center text-white font-medium;"
                  >{{ initials(slotProps.data.companyId.company.companyName) }}</span
                >
              </div>
            </div>
            <div class="applicant-name">
              {{ slotProps.data.companyId.company.companyName }}
            </div>
          </div>
        </template>
      </Column>
      <Column sortable field="type" header="Loan Type"
        ><template #body="slotProps">
          <div @click="onRowClick(slotProps.data)" class="uppercase">
            {{ getType(slotProps.data.type) }}
          </div>
        </template>
      </Column>
      <Column sortable field="loanAmountApplied" header="Amount">
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)">
            {{ formatAmount(slotProps.data.loanAmountApplied) }}
          </div>
        </template>
      </Column>
      <Column field="duration" header="Period">
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)">
            {{ slotProps.data.duration }} {{ slotProps.data.durationPeriod }}
          </div>
        </template>
      </Column>
      <Column field="totalIntrest" header="Interest">
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)">
            {{ slotProps.data.totalIntrest }}
          </div>
        </template>
      </Column>
      <Column sortable field="creditReport" header="Credit Score">
        <template #body="slotProps">
          <div
            @click="onRowClick(slotProps.data)"
            class="font-bold"
            :class="creditScoreColor(slotProps.data.creditReport)"
          >
            {{ slotProps.data.creditReport }}
          </div>
        </template>
      </Column>
      <Column sortable field="createdAt" header="Application Date">
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)">
            {{ formatDate(slotProps.data.createdAt) }}
          </div>
        </template>
      </Column>
      <Column headerStyle="width: 2rem" class="relative">
        <template #body="slotProps">
          <div @click="isDropdownOpen = slotProps.data._id">
            <i class="pi pi-ellipsis-v text-dark-400 cursor-pointer"></i>
          </div>
          <div
            ref="dropdown"
            v-if="isDropdownOpen === slotProps.data._id"
            :class="dropdownPositionClasses"
            class="dropdown"
          >
            <div
              v-for="(link, i) in dropdownLinks"
              v-show="link.show"
              :key="`dropdown-${i}`"
              :class="[link.color]"
              @click="link.action(slotProps.data)"
              class="dropdown-item"
            >
              <span>{{ link.title }}</span>
              <i :class="link.iconClass"></i>
            </div>
          </div>
        </template>
      </Column>
    </DataTable>
    <easiPaginate
      :data="filteredLoans"
      @page:update="updatePage"
      :currentPage="currentPage"
      v-model:pageSize="pageSize"
      :visibleData="visibleData"
    />
    <div
      @click="isDropdownOpen = null"
      :class="!isDropdownOpen ? 'pointer-events-none' : ''"
      class="bg-transparent fixed inset-0"
    ></div>
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

  <!-- <easiLoader v-if="loading" /> -->
</template>

<script setup>
import TablePagination from '@/components/TablePagination.vue'

import confirmIcon from '@/assets/icons/confirm.svg?url'

import { computed, ref, reactive, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { helperFunctions } from '@/composable/helperFunctions'
import { useDataStore } from '@/stores/data.js'
import { useToast } from 'vue-toastification'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()
const router = useRouter()
const { formatAmount, formatDate, initials } = helperFunctions

const props = defineProps({
  searchText: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['selected'])
const searchContent = computed(() => props.searchText)

const loading = ref(false)
const showConfirm = ref(false)
const showAlert = ref(false)
const alertMessage = ref('')

const rejectAlert = ref(false)
const rejectReason = ref('')
const errorRules = reactive({
  reject: false
})

const loanId = ref(null)
const isDropdownOpen = ref(null)
const dropdown = ref(null)
const dropdownLinks = computed(() => {
  return [
    {
      title: 'View',
      show: true,
      iconClass: 'far fa-eye',
      color: 'text-[#11453B]',
      action(arg) {
        isDropdownOpen.value = null
        onRowClick(arg)
      }
    },
    {
      title: 'Approve',
      show: true,
      iconClass: 'fas fa-check',
      color: 'text-[#219653]',
      action(arg) {
        console.log(arg)
        isDropdownOpen.value = null
        loanId.value = arg._id
        showConfirm.value = true
      }
    },
    {
      title: 'Reject',
      show: true,
      iconClass: 'fas fa-times',
      color: 'text-[#EA4E4B]',
      action(arg) {
        console.log(arg)
        isDropdownOpen.value = null
        loanId.value = arg._id

        rejectAlert.value = true
      }
    }
  ]
})

const visibleData = ref([])
const loans = computed(() => store.getAllLoans)
const holdData = ref([])
const selectedLoans = computed(() => holdData.value)
const filteredLoans = ref([])

const currentPage = ref(0)
const pageSize = ref(10)

const updatePage = (pageNumber) => {
  currentPage.value = pageNumber
  updateVisibleData()
}

const updateVisibleData = () => {
  filterLoan()
  let datas = filteredLoans.value
  visibleData.value = datas.slice(
    currentPage.value * pageSize.value,
    currentPage.value * pageSize.value + pageSize.value
  )

  // if we have 0 visible todos, go back a page
  if (visibleData.value.length == 0 && currentPage.value > 0) {
    updatePage(currentPage.value - 1)
  }
}

const creditScoreColor = (score) => {
  if (score >= 70) {
    return 'text-[#219653]'
  } else if (score >= 50) {
    return 'text-[#B4A572]'
  } else if (score <= 49) {
    return 'text-[#EF4444]'
  }
}
const getType = (arg) => {
  const obj = {
    PAYROLL_COVER: 'Payroll',
    ENTERPRISE_LOAN: 'Enterprise',
    SALARY_ADVANCE: 'Salary Advance'
  }

  return obj[arg]
}
const dropdownPositionClasses = computed(() => {
  if (!isDropdownOpen.value || !dropdown.value) {
    return ''
  }
  const dropdownRect = dropdown.value.getBoundingClientRect()
  const screenHeight = window.innerHeight
  const isNearBottom = dropdownRect.bottom > screenHeight - 20

  return isNearBottom ? 'bottom-8' : 'top-0'
})

watch(selectedLoans, (val) => {
  const selected = val.map((el) => {
    return el._id
  })
  console.log(selected)
  emit('selected', selected)
})

watch(loans, () => {
  updateVisibleData()
})

watch(searchContent, () => {
  if (searchContent.value.trim() !== '') {
    const currentLoan = loans.value && loans.value.filter((el) => el.status == 'PENDING')
    visibleData.value = currentLoan.filter((el) =>
      el.companyId.company.companyName.toLowerCase().includes(searchContent.value.toLowerCase())
    )
  } else {
    updateVisibleData()
  }
})

onMounted(() => {
  updateVisibleData()
  window.addEventListener('click', (event) => {
    if (!event.target.closest('.relative')) {
      isDropdownOpen.value = false
    }
  })
})

const filterLoan = () => {
  filteredLoans.value = loans.value && loans.value.filter((el) => el.status == 'PENDING')
}

const onRowClick = (arg) => {
  const id = arg._id
  router.push({ name: 'ViewLoan', params: { id } })
}
const onRowSelect = (event) => {
  const selected = holdData.value.map((el) => {
    return el._id
  })
  console.log(selected)
  emit('selected', selected)
}
const onRowUnselect = (event) => {
  const selected = holdData.value.map((el) => {
    return el._id
  })
  emit('selected', selected)
}

const approveLoan = async () => {
  loading.value = true
  try {
    const res = await mutate({
      endpoint: 'ApproveLoan',
      data: {
        loanId: [loanId.value]
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
          loanId: [loanId.value],
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

    queryLoanReport()

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
</script>

<style lang="scss" scope></style>
