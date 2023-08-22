<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl">{{ user }} Transactions</h2>
      <easiPaginate
        :data="transactions"
        info-only
        @page:update="updatePage"
        :currentPage="currentPage"
        v-model:pageSize="pageSize"
        :visibleData="visibleData"
      />
    </div>
    <!-- removableSort -->
    <!-- class="RowCursorPointer" -->
    <DataTable
      v-model:selection="selectedTransaction"
      id="table-style"
      scrollable
      :value="visibleData"
      @rowSelect="onRowSelect"
      @rowUnselect="onRowUnselect"
    >
      <Column selectionMode="multiple" headerStyle="width: 2rem"> </Column>

      <Column style="white-space: nowrap" sortable field="company" header="Company Name">
        <!-- @click="onRowClick(slotProps.data)"  -->
        <template #body="slotProps">
          <div class="applicant">
            <div>
              <div class="applicant-avatar">
                <img
                  v-if="slotProps.data.pfp"
                  :src="slotProps.data.pfp"
                  alt=""
                  class="object-cover"
                />
                <span
                  v-else
                  class="w-full h-full bg-primary flex items-center justify-center text-white font-medium;"
                  >{{ initials(slotProps.data.company) }}</span
                >
              </div>
            </div>
            <div class="applicant-name">
              {{ slotProps.data.company }}
            </div>
          </div>
        </template>
      </Column>

      <Column field="transactionId" header="Transaction ID">
        <template #body="slotProps">
          <div style="width: 10rem" class="break-words">
            {{ checkData(slotProps.data.transactionId) }}
          </div>
        </template>
      </Column>

      <Column sortable field="transactionType" header="Type">
        <template #body="slotProps">
          <div
            :class="[
              slotProps.data.transactionType == 'CREDIT' ? 'text-success' : 'text-error',
              'font-bold capitalize'
            ]"
          >
            {{ slotProps.data.transactionType }}
          </div>
        </template>
      </Column>

      <Column sortable field="category" header="Category">
        <template #body="slotProps">
          <div class="break-words">
            {{ checkData(slotProps.data.category) }}
          </div>
        </template></Column
      >

      <Column sortable field="walletBalance" header="Amount">
        <template #body="slotProps">
          <div>
            {{ formatAmount(slotProps.data.walletBalance) }}
          </div>
        </template></Column
      >

      <Column sortable style="white-space: nowrap" field="createdAt" header="Date">
        <template #body="slotProps">
          <div class="line-clamp-2">
            {{ formatDate(slotProps.data.createdAt) }}
          </div>
        </template>
      </Column>

      <Column sortable field="status" header="Status">
        <template #body="slotProps">
          <div
            class="py-2 w-fit px-3 text-center rounded-full"
            :class="getStatus(slotProps.data.status).color"
          >
            {{ getStatus(slotProps.data.status).text }}
          </div>
        </template>
      </Column>

      <Column field="description" header="Description">
        <template #body="slotProps">
          <div style="width: 18rem" class="line-clamp-2">
            {{ formatAmount(slotProps.data.description) }}
          </div>
        </template>
      </Column>

      <Column sortable field="walletBalance" header="Wallet Balance">
        <template #body="slotProps">
          <div>
            {{ formatAmount(slotProps.data.walletBalance) }}
          </div>
        </template></Column
      >
    </DataTable>

    <easiPaginate
      :data="transactions"
      @page:update="updatePage"
      :currentPage="currentPage"
      v-model:pageSize="pageSize"
      :visibleData="visibleData"
    />
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { helperFunctions } from '@/composable/helperFunctions'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const router = useRouter()
const { formatAmount, formatDate, initials } = helperFunctions

const props = defineProps({
  user: String,
  searchText: {
    type: String,
    default: ''
  },
  transactions: {
    type: Array,
    default: () => []
  }
})

const watchTransactions = computed(() => props.transactions)
const searchContent = computed(() => props.searchText)

const visibleData = ref([])
const selectedTransaction = ref([])

const currentPage = ref(0)
const pageSize = ref(10)

const updatePage = (pageNumber) => {
  currentPage.value = pageNumber
  updateVisibleData()
}

const updateVisibleData = () => {
  console.log('Transactions', props.transactions)
  let datas = props.transactions
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
      PROCESSING: {
        color: 'bg-[#E7F7F8]',
        text: 'Processing'
      },
      COMPLETED: {
        color: 'bg-[#D4FFE7]',
        text: 'Completed'
      },
      FAILED: {
        color: 'bg-[#FFEEED]',
        text: 'Failed'
      },
      REVERSED: {
        color: 'bg-[#F9EDFB]',
        text: 'Reversed'
      }
    }
    return status[arg]
  } else {
    return {
      color: '',
      text: 'N/A'
    }
  }
}

const checkData = (arg) => {
  return arg ? arg : 'N/A'
}

watch(searchContent, () => {
  if (searchContent.value.trim() !== '') {
    visibleData.value = props.transactions.filter((el) =>
      el.company.toLowerCase().includes(searchContent.value.toLowerCase())
    )
  } else {
    updateVisibleData()
  }
})

watch(watchTransactions, () => {
  updateVisibleData()
})

onMounted(() => {
  updateVisibleData()
})

const onRowClick = (arg) => {
  console.log(arg)
  const id = arg._id
  router.push({ name: 'ViewReconciliation', params: { id } })
}
const onRowSelect = (event) => {
  selectedTransaction.value.push(event.data)
}
const onRowUnselect = (event) => {
  selectedTransaction.value = selectedTransaction.value.filter((el) => {
    return el._id !== event.data._id
  })
}
</script>

<style lang="scss" scope></style>
