<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl">Charges Transaction List</h2>

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
    <DataTable
      v-model:selection="selectedTransaction"
      id="table-style"
      scrollable
      :value="visibleData"
      @rowSelect="onRowSelect"
      @rowUnselect="onRowUnselect"
    >
      <Column selectionMode="multiple" headerStyle="width: 2rem"> </Column>

      <Column style="white-space: nowrap" sortable field="companyName" header="Company Name">
        <template #body="slotProps">
          <div @click="onRowClick(slotProps.data)" class="applicant">
            <div>
              <div class="applicant-avatar">
                <img
                  v-if="slotProps.data.companyId.company.logo"
                  :src="slotProps.data.companyId.company.logo"
                  alt=""
                  class="object-cover h-full w-full"
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

      <!-- <Column sortable field="subscriptionPlan" header=" SUBCRIPTION PLAN" /> -->

      <Column sortable header=" SUBCRIPTION PLAN">
        <template #body="slotProps">
          <div>N/A</div>
        </template></Column
      >
      <Column sortable field="paidEmployees" header=" No. Employees Paid">
        <template #body="slotProps">
          <div>
            {{ slotProps.data.employees.length }}
          </div>
        </template></Column
      >
      <Column sortable field="charge" header="Amount Paid">
        <template #body="slotProps">
          <div>
            {{ formatAmount(slotProps.data.charge) }}
          </div>
        </template></Column
      >

      <Column sortable style="white-space: nowrap" field="createdAt" header="Date">
        <template #body="slotProps">
          <div>
            {{ formatDate(slotProps.data.createdAt) }}
          </div>
        </template>
      </Column>

      <Column header="Action">
        <template #body="slotProps">
          <div class="flex items-center gap-4">
            <span
              @click="action.action(slotProps.data)"
              v-for="action in actions"
              :key="action.title"
              class="cursor-pointer hover:text-primary"
            >
              <i :class="[action.icon]"></i>
            </span>
          </div>
        </template>
      </Column>
    </DataTable>

    <easiPaginate
      :data="transactions"
      @page:update="updatePage"
      :currentPage="currentPage"
      v-model:pageSize="pageSize"
      :visibleData="visibleData"
    />
  </div>

  <UploadReceipt :isOpen="uploadModal" @close="uploadModal = false" />
</template>

<script setup>
import UploadReceipt from '../shared/UploadReceipt.vue'

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
const searchContent = computed(() => props.searchText)
const watchTransactions = computed(() => props.transactions)

const uploadModal = ref(false)

const visibleData = ref([])
const selectedTransaction = ref([])

const currentPage = ref(0)
const pageSize = ref(10)

const updatePage = (pageNumber) => {
  currentPage.value = pageNumber
  updateVisibleData()
}

const updateVisibleData = () => {
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

const actions = computed(() => {
  return [
    {
      title: 'View',
      icon: 'pi pi-eye',
      action(arg) {
        console.log(arg)
      }
    },
    {
      title: 'Download',
      icon: 'pi pi-download',
      action(arg) {
        console.log(arg)
      }
    },
    {
      title: 'Upload',
      icon: 'pi pi-upload',
      action(arg) {
        uploadModal.value = true
      }
    }
  ]
})

watch(searchContent, () => {
  if (searchContent.value.trim() !== '') {
    visibleData.value = props.transactions.filter((el) =>
      el.companyId.company.companyName.toLowerCase().includes(searchContent.value.toLowerCase())
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
