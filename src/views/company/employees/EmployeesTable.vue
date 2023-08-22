<template>
  <div>
    <DataTable
      class="table-walls"
      v-model:selection="selectedEmployees"
      id="employees-table"
      :value="data"
    >
      <template #empty>
        <div class="text-center py-4">No records found!</div>
      </template>
      <Column selectionMode="multiple" headerStyle="width: 3rem">
        <template #header>
          <div class="table-header">
            <div></div>
          </div>
        </template>
      </Column>
      <Column sortable field="_id">
        <template #header>
          <div class="table-header">Employee ID</div>
        </template>
        <template #body="slotProps">
          <div>{{ slotProps.data._id.slice(0, 8) }}</div>
        </template>
      </Column>
      <Column field="profile.firstName">
        <template #header>
          <div class="table-header">First Name</div>
        </template>
        <template #body="slotProps">
          <div class="user flex items-center gap-3">
            <div class="user-avatar w-8 h-8 rounded-full bg-gray-300">
              <img :src="slotProps.data.profile.avatar" />
            </div>
            <div class="user-name">{{ slotProps.data.profile.firstName }}</div>
          </div>
        </template>
      </Column>
      <Column field="profile.lastName">
        <template #header>
          <div class="table-header">Last Name</div>
        </template>
      </Column>
      <Column field="job.jobTitle">
        <template #header>
          <div class="table-header">Job Title</div>
        </template>
      </Column>
      <Column sortable field="job.departmentId">
        <template #header>
          <div class="table-header">Department</div>
        </template>
      </Column>
      <Column sortable field="job.employmentType">
        <template #header>
          <div class="table-header">Work Type</div>
        </template>
      </Column>
      <Column sortable field="job.branchId">
        <template #header>
          <div class="table-header">Branch</div>
        </template>
      </Column>
      <Column sortable field="profile.status">
        <template #header>
          <div class="table-header">Status</div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref } from 'vue'

const selectedEmployees = ref([])

defineProps({
  data: Object
})
</script>

<style lang="scss" scoped></style>
<style lang="scss">
#employees-table {
  font-size: 14px;

  th {
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    background: #f2f1f1;
    color: #515251;
    font-weight: 600;
    padding: 20px 15px;
    border: 1px solid #b5b6b5;
  }

  /* .table-header {
        background: #F2F1F1;
        color: #515251;
        font-weight: 600;
        padding: 20px 15px;
        border: 1px solid #B5B6B5;

        &:first-child {
            border-top-left-radius: 16px;
        }

        &:last-child {
            border-top-right-radius: 16px;
        }

    } */

  td {
    border: none;
    color: #515251;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid #e7e8e7;

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
}
</style>
