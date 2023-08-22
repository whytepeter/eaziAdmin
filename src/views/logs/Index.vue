<template>
  <main class="flex flex-col gap-4">
    <div class="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6">
      <div class="my-6 w-full md:w-6/12 flex flex-wrap gap-4 items-center justify-around">
        <easiSearch
          class="grow"
          v-model="searchText"
          @keyup="handleSearch"
          @search="handleSearch"
        />
        <!-- <Filter /> -->
      </div>
      <easiPaginate
        :data="adminLogs"
        info-only
        @page:update="updatePage"
        :currentPage="currentPage"
        v-model:pageSize="pageSize"
        :visibleData="visibleData"
      />
    </div>

    <DataTable
      v-model:selection="selectLogs"
      id="table-style"
      scrollable
      removableSort
      :value="visibleData"
      @rowSelect="onRowSelect"
      @rowUnselect="onRowUnselect"
    >
      <Column selectionMode="multiple" headerStyle="width: 2rem"> </Column>
      <Column style="white-space: nowrap" sortable field="admin" header="Admin">
        <template #body="slotProps">
          <div class="applicant">
            <div class="applicant-avatar">
              <img
                v-if="slotProps.data.user.pfp"
                :src="slotProps.data.user.pfp"
                alt=""
                class="object-cover h-full w-full"
              />
              <span
                v-else
                class="w-full h-full bg-primary flex items-center justify-center text-white font-medium;"
                >{{
                  initials(`${slotProps.data.user.firstName} ${slotProps.data.user.lastName}`)
                }}</span
              >
            </div>
            <div class="applicant-name">
              {{ `${slotProps.data.user.firstName} ${slotProps.data.user.lastName}` }}
            </div>
          </div>
        </template>
      </Column>
      <Column sortable field="activity" header="Activity"> </Column>
      <Column field="groupName" header="Section"></Column>

      <Column sortable style="white-space: nowrap" field="createdAt" header="Time">
        <template #body="slotProps">
          <div>
            {{ formatDate(slotProps.data.createdAt, 'time') }}
          </div>
        </template>
      </Column>
      <Column sortable style="white-space: nowrap" field="createdAt" header="Date">
        <template #body="slotProps">
          <div>
            {{ formatDate(slotProps.data.createdAt) }}
          </div>
        </template>
      </Column>
    </DataTable>

    <easiPaginate
      :data="adminLogs"
      @page:update="updatePage"
      :currentPage="currentPage"
      v-model:pageSize="pageSize"
      :visibleData="visibleData"
    />

    <easiLoader v-if="loading" />
  </main>
</template>

<script setup>
import Filter from './LogFilter.vue'

import { computed, onMounted, ref, watch } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { useToast } from 'vue-toastification'
import { helperFunctions } from '@/composable/helperFunctions'

const { formatAmount, formatDate, initials } = helperFunctions
const toast = useToast()
const store = useDataStore()
const { query } = store

const searchText = ref('')
const selectLogs = ref([])

const loading = ref(false)
const visibleData = ref([])
const adminLogs = computed(() => store.getAdminLogs)

const currentPage = ref(0)
const pageSize = ref(10)

const updatePage = (pageNumber) => {
  currentPage.value = pageNumber
  updateVisibleData()
}

const updateVisibleData = () => {
  let datas = adminLogs.value
  visibleData.value = datas.slice(
    currentPage.value * pageSize.value,
    currentPage.value * pageSize.value + pageSize.value
  )

  // if we have 0 visible todos, go back a page
  if (visibleData.value.length == 0 && currentPage.value > 0) {
    updatePage(currentPage.value - 1)
  }
}

const onRowSelect = (event) => {
  selectLogs.value.push(event.data)
}
const onRowUnselect = (event) => {
  selectLogs.value = selectLogs.value.filter((el) => {
    return el._id !== event.data._id
  })
}

const handleSearch = () => {
  const text = searchText.value.toLowerCase()
  console.log(text)
  if (text.trim() !== '') {
    visibleData.value = adminLogs.value.filter(
      (el) =>
        el.user.firstName.toLowerCase().includes(text) ||
        el.user.lastName.toLowerCase().includes(text) ||
        el.activity.toLowerCase().includes(text)
    )
  } else {
    updateVisibleData()
  }
}

watch(searchText, () => {
  handleSearch()
})

watch(adminLogs, () => {
  updateVisibleData()
})

onMounted(() => {
  updateVisibleData()
})

const queryAdminLogs = async (arg) => {
  try {
    loading.value = true

    const payload = {
      pagination: {
        page: 9,
        limit: null
      },
      filter: {
        company: 'ASC',
        amount: null
      }
    }

    console.log(arg)

    const res = await query({
      endpoint: 'ListAdminActivities',
      payload: {
        input: arg ? arg : payload
      },
      storeKey: 'adminLogs'
    })

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}

queryAdminLogs()
</script>

<style lang="scss"></style>
