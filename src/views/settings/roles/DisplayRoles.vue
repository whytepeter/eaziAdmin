<template>
  <div class="flex flex-col gap-4">
    <div
      :class="[hasAccess ? 'bg-primary' : 'bg-secondary']"
      class="text-sm text-center text-white px-3 py-1 rounded-lg"
    >
      {{ hasAccess ? 'What Role Can Access' : 'What Role Cannot Access' }}
    </div>

    <easiSearch
      placeholder="Search.."
      v-model="searchText"
      @keyup="handleSearch"
      @search="handleSearch"
    />

    <div class="max-h-56 overflow-y-auto">
      <div
        v-for="privilege in visibleData"
        :key="privilege._id"
        class="flex items-center justify-between p-2 text-sm"
      >
        <span class="text-dark-700">
          {{ formatPrivilege(privilege) }}
        </span>
        <i v-if="hasAccess" class="pi pi-check text-sm text-success"></i>
        <i v-else class="pi pi-times text-sm text-secondary"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import privileges from '@/utils/privileges.js'
import { useRoute } from 'vue-router'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const route = useRoute()
const props = defineProps({
  hasAccess: {
    type: Boolean,
    default: true
  }
})

const searchText = ref('')

const allRoles = computed(() => store.getAllRoles)
const allPrivileges = [
  'Admin_Management',
  'Dashboard',
  'Reports',
  'Company_Management',
  'Feedback',
  'Loan_Managment'
]
const visibleData = ref([])

const role = computed(() => {
  return allRoles.value.find((el) => el._id === route.query.id)
})

const accessible = computed(() => {
  return role.value ? role.value.privileges : []
})

const inAccessible = computed(() => {
  return allPrivileges.filter((el) => !accessible.value.includes(el))
})

const updateVisibleData = () => {
  visibleData.value = props.hasAccess ? accessible.value : inAccessible.value
}

onMounted(() => {
  updateVisibleData()
})

watch(role, () => {
  console.log(role.value, accessible.value)
  updateVisibleData()
})

const formatPrivilege = (arg) => {
  return arg ? arg.split('_').join(' ') : arg
}

const handleSearch = () => {
  if (searchText.value.trim() == '') {
    updateVisibleData()
  } else {
    visibleData.value = visibleData.value.filter((el) =>
      el.title.toLowerCase().includes(searchText.value.toLowerCase())
    )
  }
}
</script>

<style></style>
