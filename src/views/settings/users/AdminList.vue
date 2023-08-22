<template>
  <div class="flex flex-col gap-4 w-full">
    <easiSearch
      @search="handleSearch"
      @keyup="handleSearch"
      placeholder="Search..."
      v-model="searchText"
    />

    <div class="flex flex-col gap-4 h-96 overflow-auto pr-1">
      <div
        :data="admin"
        v-for="admin in visibleData"
        @click="$router.push({ query: { id: admin._id } })"
        :key="admin._id"
        :class="{ 'bg-[#F2F1F1]': admin._id === $route.query.id }"
        class="flex items-center gap-2 p-2 cursor-pointer rounded-lg"
      >
        <div
          class="flex-shrink-0 w-10 h-10 rounded-full bg-primary overflow-hidden flex items-center justify-center"
        >
          <img
            v-if="admin && admin.pfp"
            :src="admin && admin.pfp"
            alt=""
            class="w-full h-full object-cover"
          />
          <span v-else class="text-white text-sm font-bold">
            {{ initials(getName(admin)) }}
          </span>
        </div>
        <div class="flex flex-col capitalize">
          <span class="text-dark-700 text-sm">{{ admin && admin.accountType }}</span>
          <span class="font-bold"
            >{{ admin && admin.firstName }} {{ admin && admin.lastName }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { helperFunctions } from '@/composable/helperFunctions'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { initials } = helperFunctions
const route = useRoute()
const router = useRouter()

const searchText = ref('')

const allAdmins = computed(() => store.getAdminUsers)
const visibleData = ref([])

const getName = (arg) => {
  if (arg) {
    return `${arg.firstName} ${arg.lastName}`
  }
}

onMounted(() => {
  visibleData.value = allAdmins.value
  if (route.query && !route.query.id && allAdmins.value.length) {
    router.push({ query: { id: allAdmins.value[0]._id } })
  }
})

watch(allAdmins, () => {
  visibleData.value = allAdmins.value
  if (route.query && !route.query.id && allAdmins.value.length) {
    router.push({ query: { id: allAdmins.value[0]._id } })
  }
})

const handleSearch = () => {
  if (searchText.value.trim() == '') {
    visibleData.value = allAdmins.value
  } else {
    visibleData.value = allAdmins.value.filter(
      (el) =>
        el.firstName.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase()) ||
        el.lastName.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())
      // el.role.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())
    )
  }

  console.log(visibleData.value)
}
</script>

<style></style>
