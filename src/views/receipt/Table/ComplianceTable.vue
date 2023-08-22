<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl">Compliance Transaction List</h2>
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
      class=""
      scrollable
      :value="visibleData"
      @rowSelect="onRowSelect"
      @rowUnselect="onRowUnselect"
    >
      <Column selectionMode="multiple" headerStyle="width: 2rem"> </Column>

      <Column style="white-space: nowrap" sortable field="companyName" header="Company Name">
        <template #body="slotProps">
          <div class="applicant">
            <div>
              <div class="applicant-avatar">
                <img
                  v-if="slotProps.data.companyLogo"
                  :src="slotProps.data.companyLogo"
                  alt=""
                  class="object-cover h-full w-full"
                />
                <span
                  v-else
                  class="w-full h-full bg-primary flex items-center justify-center text-white font-medium;"
                  >{{ initials(slotProps.data.companyName) }}</span
                >
              </div>
            </div>
            <div class="applicant-name">
              {{ slotProps.data.companyName }}
            </div>
          </div>
        </template>
      </Column>

      <Column sortable field="complianceType" header=" COMPLAINCE TYPE" />
      <Column sortable field="noOfemployees" header=" No. Employees Paid" />

      <Column sortable field="amount" header="Amount Paid">
        <template #body="slotProps">
          <div>
            {{ formatAmount(slotProps.data.amount) }}
          </div>
        </template></Column
      >

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

      <Column sortable style="white-space: nowrap" field="date" header="Date">
        <template #body="slotProps">
          <div>
            {{ formatDate(slotProps.data.date) }}
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
      el.companyName.toLowerCase().includes(searchContent.value.toLowerCase())
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
