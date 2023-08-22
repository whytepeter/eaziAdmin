<template>
  <div class="flex flex-col gap-4">
    <div
      class="header flex items-center justify-between p-2 rounded-t-2xl px-4 py-3 text-white bg-[#292A29]"
    >
      <h2 class="text-xl">Blacklisted</h2>

      <div class="flex items-center gap-4">
        <easiButton
          @click="restore"
          :loading="loading"
          variant="outlined"
          size="medium"
          color="white"
          >Restore</easiButton
        >
        <easiPaginate
          :data="blacklisted"
          info-only
          @page:update="updatePage"
          :currentPage="currentPage"
          v-model:pageSize="pageSize"
          :visibleData="visibleData"
        />
      </div>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 items-center bg-[#F2F1F1] p-4"
    >
      <div
        v-for="(company, i) in blacklisted"
        :key="`company-${i}`"
        class="flex items-center gap-2 text-sm"
      >
        <Checkbox
          v-model="selectedCompany"
          :value="company && company._id"
          :inputId="company && company._id"
        />
        <div class="flex items-center gap-2">
          <div
            class="w-9 h-9 overflow-hidden flex-shrink-0 rounded-full bg-tertiary text-white flex items-center justify-center text-xs font-semibold"
          >
            <img
              v-if="company && company.company.logo"
              :src="company && company.company.logo"
              alt="object-cover  w-full h-full"
            />
            <span v-else class="w-full h-full bg-primary flex items-center justify-center">
              {{ initials(company && company.company.companyName) }}
            </span>
          </div>
          <div>{{ company && company.company.companyName }}</div>
        </div>
      </div>
    </div>

    <easiPaginate
      :data="blacklisted"
      info-only
      @page:update="updatePage"
      :currentPage="currentPage"
      v-model:pageSize="pageSize"
      :visibleData="visibleData"
    />
  </div>

  <easiAlert
    @close="showAlert = false"
    v-if="showAlert"
    caption="This business account has been successfully restores."
  >
    <easiButton @click="showAlert = false" block>Okay</easiButton>
  </easiAlert>

  <easiLoader v-if="loading" />
</template>

<script setup>
import TablePagination from '@/components/TablePagination.vue'
import { computed, onMounted, ref } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { helperFunctions } from '@/composable/helperFunctions'
import { useToast } from 'vue-toastification'

const { initials } = helperFunctions
const store = useDataStore()
const { query, mutate } = store
const toast = useToast()

const showAlert = ref(false)
const loading = ref(false)
const selectedCompany = ref([])

const blacklisted = computed(() => store.getBlackListed)
const visibleData = ref([])
console.log('Black Listed', blacklisted.value)

const currentPage = ref(0)
const pageSize = ref(10)

const updatePage = (pageNumber) => {
  currentPage.value = pageNumber
  updateVisibleData()
}

const updateVisibleData = () => {
  let datas = blacklisted.value
  visibleData.value = datas.slice(
    currentPage.value * pageSize.value,
    currentPage.value * pageSize.value + pageSize.value
  )

  // if we have 0 visible todos, go back a page
  if (visibleData.value.length == 0 && currentPage.value > 0) {
    updatePage(currentPage.value - 1)
  }
}

updateVisibleData()

const restore = async () => {
  if (selectedCompany.value.length) {
    loading.value = true
    try {
      const res = await mutate({
        endpoint: 'BlackListCompanyForLoan',
        data: {
          companyId: selectedCompany.value,
          loanBlackListed: false
        }
      })

      loading.value = false

      if (res.success) {
        showAlert.value = true
        selectedCompany.value = []
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
    }
  } else {
    toast.error('Select at least one company')
  }
}

const queryBlackListed = async () => {
  try {
    loading.value = true

    const payload = {
      sort: null
    }

    const res = await query({
      endpoint: 'ListBlackListedLoanCompanies',
      payload,
      storeKey: 'blackListedCompanies'
    })

    console.log(res)

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}
queryBlackListed()
</script>

<style></style>
