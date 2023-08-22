<template>
  <div>
    <header class="flex items-center justify-between mb-8">
      <div>
        <h3 class="font-normal">Employees</h3>
      </div>
      <div class="flex gap-4">
        <SearchInput v-model:search="search" />
        <Filter />
      </div>

      <div>
        <easiButton>Edit Employee(s)</easiButton>
      </div>
    </header>

    <Loading :data="employeesData" :error="error">
      <div v-if="employeesData">
        <div :class="{ 'opacity-50 pointer-events-none': loadingMore }">
          <TablePagination class="mb-2" v-model:page="pagination.page" v-model:rowsPerPage="pagination.rowsPerPage" />
          <EmployeesTable :data="employeesData.employees" />

        </div>
      </div>
    </Loading>
  </div>
</template>

<script setup>
import Filter from '@/components/FilterSelect.vue'
import SearchInput from '@/components/SearchInput.vue'
import EmployeesTable from './EmployeesTable.vue'
import TablePagination from '@/components/TablePagination.vue'
import { useQuery } from '@/api/useQuery'
import { useRoute } from 'vue-router'
import Loading from '@/components/Loading.vue'
import { reactive, computed } from 'vue'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'
import { ref } from "vue"

const route = useRoute()
const companyId = route.params.slug

const search = ref('')

const debouncedSearch = useDebouncedValue(search, 300)

const pagination = reactive({
  page: 1,
  rowsPerPage: 10,
})


const payload = computed(() => {
  return {
    companyId: companyId,
    input: {
      paging: {
        limit: pagination.rowsPerPage,
        skip: (pagination.page - 1) * pagination.rowsPerPage,
        search: debouncedSearch.value
      }
    }
  }
})

const { data: employeesData, error, isLoading } = useQuery('ListEmployees', payload)

const loadingMore = computed(() => {
  if (isLoading.value && employeesData.value) {
    return true
  }
  return false
})

</script>

<style lang="scss" scoped></style>
