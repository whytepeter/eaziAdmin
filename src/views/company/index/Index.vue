<script setup>
import SearchInput from '@/components/SearchInput.vue'
import BusinessTable from './BusinessTable.vue'
import CountCard from './CountCard.vue'
import TablePagination from '@/components/TablePagination.vue'
import PlusIcon from '@/assets/icons/plus.svg'
import { reactive, computed, ref } from 'vue'
import { useQuery } from '@/api/useQuery'
import Loading from '@/components/Loading.vue'
import { useDebouncedValue } from "@/hooks/useDebouncedValue"
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import FilterIcon from "@/components/icons/FilterIcon.vue"

const search = ref('')

const debouncedSearch = useDebouncedValue(search, 300)

const filters = [
  {
    label: 'A-Z',
    value: "ASC",
    by: "companyName"
  },
  { label: 'Z-A', value: "DESC" },
  { label: 'Highest to lowest revenue', value: "$1" },
  { label: 'Highest to lowest staff', value: "$2" },
  { label: 'most recent to oldest', value: "$3" },
  { label: 'Company', value: "$4" },
  { label: 'Personal', value: "$5" },
]

const selectedFilter = ref(null)

const pagination = reactive({
  page: 1,
  rowsPerPage: 10,
})

const payload = computed(() => {
  let search = debouncedSearch.value ?? ''

  return {
    input: {
      paging: {
        // sort: {
        //   "companyName": "ASC"
        // },
        limit: pagination.rowsPerPage,
        skip: (pagination.page - 1) * pagination.rowsPerPage,
        search,
      },
      filter: [
        // { field: 'Account', value: 'Personal' }
      ]

    }
  }
})

const { data, error, isLoading } = useQuery('ListCompanies', payload)

const loadingMore = computed(() => {
  if (isLoading.value && data.value) {
    return true
  }
  return false
})


const { data: registrationByTypes } = useQuery('ListByRegistrationTypes')

const registrationByTypeStats = computed(() => {
  let { users = [], total } = registrationByTypes.value ?? {};

  let stats = {
    total,
  }

  users.forEach(user => {
    let { registrationType, accountsCount } = user
    registrationType = registrationType.toLowerCase()
    stats[registrationType] = accountsCount
  })

  return stats
})

</script>

<template>
  <div>
    <Loading :data="data" :error="error">
      <div>
        <div class="flex gap-4 mb-10">
          <CountCard label="All business" :value="registrationByTypeStats?.total" />
          <CountCard label="Company" :value="registrationByTypeStats?.company" />
          <CountCard label="Personal" :value="registrationByTypeStats?.personal" />
        </div>
        <div class="flex items-center mb-10">
          <div class="flex gap-4">
            <SearchInput v-model:search="search" />
            <div>
              <Listbox v-model="selectedFilter">
                <div class="relative">
                  <ListboxButton class="bg-[#F2F1F1] flex gap-2 items-center rounded-md px-4 h-[44px]  whitespace-nowrap">
                    Filter
                    <div class="font-medium" v-if="selectedFilter">
                      {{
                        selectedFilter.label }}
                    </div>
                    <FilterIcon />

                  </ListboxButton>
                  <ListboxOptions class="z-10  w-44 text-sm bg-white rounded-lg grid  absolute right-0 top-14 shadow-lg">
                    <ListboxOption class="py-2 px-4 hover:bg-gray-200 cursor-pointer border-b border-gray-200"
                      v-for="item of filters" :key="item.label" :value="item">
                      {{ item.label }}
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>
          </div>
          <div class="ml-auto">
            <easiButton2 class="w-[250px]">
              <template #leftIcon>
                <PlusIcon />
              </template>
              Add Business
            </easiButton2>
          </div>
        </div>
        <div :class="{ 'opacity-50 pointer-events-none': loadingMore }">
          <TablePagination class="mb-2" v-model:page="pagination.page" v-model:rowsPerPage="pagination.rowsPerPage"
            :total-pages="data?.pagination?.pageTotal" :total-records="data?.pagination?.totalRecords" />
          <BusinessTable :isLoading="isLoading" :data="data.companies" />
        </div>
      </div>
    </Loading>
  </div>
</template>


<style lang="scss" scoped>
.stats-card {
  background: #ebfaf1;
  border-radius: 16px;
  padding: 10px 20px;

  .label {
    color: #515251;
    margin-bottom: 2px;
  }

  .value {
    color: #11453b;
    font-weight: 600;
  }
}
</style>
