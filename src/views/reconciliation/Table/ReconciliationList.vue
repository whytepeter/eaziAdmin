<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl">Reconciliation List</h2>
      <easiPaginate
        v-if="data.length"
        :data="data"
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
      v-model:selection="selectedReconciliation"
      id="table-style"
      scrollable
      :value="visibleData"
      @rowSelect="onRowSelect"
      @rowUnselect="onRowUnselect"
    >
      <Column selectionMode="multiple" headerStyle="width: 2rem"> </Column>
      <Column style="white-space: nowrap" sortable field="company" header="Company Name">
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
      <Column sortable field="totalInflow" header="Total Inflow">
        <template #body="slotProps">
          <div>
            {{ formatAmount(slotProps.data.totalInflow) }}
          </div>
        </template></Column
      >
      <Column sortable field="totalOutflow" header="Total Outflow">
        <template #body="slotProps">
          <div>
            {{ formatAmount(slotProps.data.totalOutflow) }}
          </div>
        </template></Column
      >
      <Column sortable field="walletBalance" header="Wallet Balance">
        <template #body="slotProps">
          <div>
            {{ formatAmount(slotProps.data.walletBalance) }}
          </div>
        </template></Column
      >
      <Column sortable field="reconciliationValue" header="Reconciliation Value">
        <template #body="slotProps">
          <div
            :class="[
              slotProps.data.reconciliationValue ? 'text-success' : 'text-error',
              'font-bold capitalize'
            ]"
          >
            {{ slotProps.data.reconciliationValue }}
          </div>
        </template>
      </Column>

      <Column header="Action">
        <template #body="slotProps">
          <button
            @click="onRowClick(slotProps.data)"
            class="px-4 text-sm text-primary rounded-full border border-primary px-4 py-1"
          >
            View
          </button>
        </template>
      </Column>
    </DataTable>

    <easiPaginate
      v-if="data.length"
      :data="data"
      @page:update="updatePage"
      :currentPage="currentPage"
      v-model:pageSize="pageSize"
      :visibleData="visibleData"
    />
  </div>
</template>

<script setup>
import TablePagination from '@/components/TablePagination.vue'

import { computed, ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { helperFunctions } from '@/composable/helperFunctions'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const router = useRouter()
const { formatAmount, formatDate, initials } = helperFunctions

const props = defineProps({
  searchText: {
    type: String,
    default: ''
  },
  data: {
    type: Array,
    default: () => []
  }
})

const watchData = computed(() => props.data)
const searchContent = computed(() => props.searchText)

const visibleData = ref([])
const selectedReconciliation = ref([])

const currentPage = ref(0)
const pageSize = ref(10)

const updatePage = (pageNumber) => {
  currentPage.value = pageNumber
  updateVisibleData()
}

const updateVisibleData = () => {
  let datas = props.data
  visibleData.value = datas.slice(
    currentPage.value * pageSize.value,
    currentPage.value * pageSize.value + pageSize.value
  )

  // if we have 0 visible todos, go back a page
  if (visibleData.value.length == 0 && currentPage.value > 0) {
    updatePage(currentPage.value - 1)
  }
}

watch(searchContent, () => {
  if (searchContent.value.trim() !== '') {
    visibleData.value = props.data.filter((el) =>
      el.company.toLowerCase().includes(searchContent.value.toLowerCase())
    )
  } else {
    updateVisibleData()
  }
})

watch(watchData, () => {
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
  selectedReconciliation.value.push(event.data)
}
const onRowUnselect = (event) => {
  selectedReconciliation.value = selectedReconciliation.value.filter((el) => {
    return el._id !== event.data._id
  })
}
</script>

<style lang="scss" scope></style>
