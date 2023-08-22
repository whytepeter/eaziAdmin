<template>
  <div class="relative">
    <DataTable v-model:selection="selectedCompanies" id="business-table" :value="data">
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column sortable field="business" header="Business">
        <template #body="slotProps">
          <RouterLink :to="{
            name: 'CompanyOverview', params: { slug: slotProps.data._id, }, query: {
              name: slotProps.data.company.companyName
            }
          }">
            <div class="business">
              <div class="business-avatar">
                <img v-if="slotProps.data.company.logo" :src="slotProps.data.company.logo" alt=""
                  class="w-full h-full rounded-full object-cover" />
              </div>
              <div class="business-name">{{ slotProps.data.company.companyName }}</div>
            </div>
          </RouterLink>
        </template>
      </Column>
      <Column field="registrationType" header="Account">
        <template #body="slotProps">
          <div class="capitalize">{{ slotProps.data.registrationType?.toLowerCase() }}</div>
        </template>
      </Column>
      <Column field="employeesCount" header="Employee"></Column>
      <Column field="payroll" header="Payroll"></Column>
      <Column sortable field="registered" header="Status">
        <!-- <template #body="slotProps">
          <div>
            {{ slotProps.data.registered ? 'Registered' : 'Not Registered' }}
          </div>
        </template> -->
      </Column>
      <Column sortable field="createdAtFormatted" header="Sign Up Date"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref } from 'vue'

defineProps({
  data: Object,
  isLoading: {
    type: Boolean,
    default: false,
  }
})
const selectedCompanies = ref([])
</script>

<style lang="scss">
#business-table {
  font-size: 14px;

  th {
    border: none;
    background: #f2f1f1;
    color: #515251;
    font-weight: 600;
    text-transform: capitalize;
    border-radius: 0;
    padding-top: 20px;
    padding-bottom: 20px;

    &:first-child {
      border-top-left-radius: 16px;
    }

    &:last-child {
      border-top-right-radius: 16px;
    }
  }

  td {
    border: none;
    color: #515251;
    padding-top: 20px;
    padding-bottom: 20px;

    &:first-child {
      border-left: 2px solid #f2f1f1;
    }

    &:last-child {
      border-right: 2px solid #f2f1f1;
    }
  }

  tr:nth-child(2) td {
    background: #fbfbfb;
  }

  .business {
    @apply flex items-center gap-2;
  }

  .business-name {
    color: #292a29;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }

  .business-avatar {
    width: 32px;
    height: 32px;
    border-radius: 99px;
    border: 1px solid #f2f1f1;
  }
}
</style>
