<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl">Loans</h2>
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
      removableSort
      scrollable
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
      <Column field="loanAmountApplied" header="Amount">
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)">
            {{ formatAmount(slotProps.data.loanAmountApplied) }}
          </div>
        </template>
      </Column>
      <Column sortable field="createdAt" header="Application Date">
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)">
            {{ formatDate(slotProps.data.createdAt) }}
          </div>
        </template></Column
      >
      <Column field="totalRepaymentAmount" header="Repayment">
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)">
            {{ formatAmount(slotProps.data.totalRepaymentAmount) }}
          </div>
        </template></Column
      >
      <Column field="duration" header="Period">
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)">
            {{ slotProps.data.duration }} {{ slotProps.data.durationPeriod }}
          </div>
        </template>
      </Column>
      <Column sortable field="status" header="Status">
        <template #body="slotProps">
          <div
            @click="onRowClick(slotProps.data)"
            class="font-bold"
            :class="getStatus(slotProps.data.status).color"
          >
            {{ getStatus(slotProps.data.status).text }}
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

  <easiAlert
    @close="showConfirm = false"
    v-if="showConfirm"
    :icon="confirmIcon"
    title="Blacklist Loan"
    caption="Are you sure you want to blacklist this blacklist? However, this action will not be reversible once taken."
  >
    <div class="grid grid-cols-2 gap-2">
      <easiButton @click="showConfirm = false" variant="outlined" block>Cancel</easiButton>
      <easiButton @click="BlackListCompanyForLoan" :loading="loading" block>Yes</easiButton>
    </div>
  </easiAlert>

  <easiAlert
    @close="showAlert = false"
    v-if="showAlert"
    caption="This business account has been successfully blacklisted."
  >
    <easiButton @click="showAlert = false" block>Okay</easiButton>
  </easiAlert>

  <!-- <easiLoader v-if="loading" /> -->
</template>

<script setup>
import confirmIcon from '@/assets/icons/confirm.svg?url'

import { computed, ref, onMounted, watch } from 'vue'
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
const showAlert = ref(false)
const showConfirm = ref(false)

const companyId = ref(null)
const isDropdownOpen = ref(null)
const dropdown = ref(null)
const dropdownLinks = computed(() => {
  return [
    {
      title: 'View',
      show: true,
      iconClass: 'pi pi-eye',
      color: 'text-[#11453B]',
      action(arg) {
        isDropdownOpen.value = null
        onRowClick(arg)
      }
    },
    {
      title: 'Blacklist',
      show: true,
      iconClass: 'pi pi-exclamation-triangle',
      color: 'text-[#EA4E4B]',
      action(arg) {
        console.log(arg)
        isDropdownOpen.value = null
        companyId.value = arg.companyId._id
        showConfirm.value = true
      }
    }
  ]
})

const visibleData = ref([])
const holdData = ref([])
const selectedLoans = computed(() => holdData.value)
const loans = computed(() => store.getAllLoans)
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

const getStatus = (arg) => {
  if (arg) {
    const status = {
      PENDING: {
        color: 'text-[#F59E0B]',
        text: 'Pending'
      },
      COMPLETED: {
        color: 'text-[#219653]',
        text: 'Completed'
      },
      DECLINED: {
        color: 'text-[#EA4E4B]',
        text: 'Rejected'
      },
      CUSTOMER_CANCELED: {
        color: 'text-[#F59E0B]',
        text: 'Cancelled'
      },
      APPROVED: {
        color: 'text-[#359AA0]',
        text: 'Active'
      }
    }

    return status[arg]
  } else {
    return {
      text: 'N/A',
      color: ''
    }
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

watch(loans, () => {
  visibleData.value = loans.value && loans.value.filter((el) => el.status !== 'PENDING')
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
    const currentLoan = loans.value && loans.value.filter((el) => el.status !== 'PENDING')
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
  filteredLoans.value = loans.value && loans.value.filter((el) => el.status !== 'PENDING')
}

const onRowClick = (arg) => {
  console.log(arg)
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

const BlackListCompanyForLoan = async () => {
  try {
    loading.value = true

    const res = await mutate({
      endpoint: 'BlackListCompanyForLoan',
      data: {
        companyId: [companyId.value],
        loanBlackListed: true
      }
    })

    showConfirm.value = false
    loading.value = false
    console.log(res)

    if (res.success) {
      showAlert.value = true
      queryBlackListed()
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
</script>

<style lang="scss" scope></style>
