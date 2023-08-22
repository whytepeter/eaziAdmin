<template>
  <div>
    <div class="text-sm mb-3">Team Members with the role</div>

    <div
      v-if="teams && teams.length"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-start items-center gap-2 max-h-24 overflow-y-auto"
    >
      <div
        v-for="user in teams"
        :key="user._id"
        class="flex items-center gap-2 py-1 px-2 border border-[#E7E8E7] bg-[#F2F1F1] rounded-lg"
      >
        <div
          class="w-8 h-8 flex-shrink-0 bg-primary overflow-hidden rounded-full flex items-center justify-center"
        >
          <img
            v-if="user && user.pfp"
            :src="user && user.pfp"
            alt=""
            class="w-full h-full object-cover"
          />
          <span v-else class="text-white text-sm">
            {{ initials(`${user && user.firstName} ${user && user.lastName}`) }}
          </span>
        </div>
        <span class="text-dark-800 text-sm">
          {{ user && user.firstName }}
          {{ user && user.lastName }}
        </span>
      </div>
    </div>
    <div v-else class="text-sm text-dark-700">N/A</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { helperFunctions } from '@/composable/helperFunctions'
import { useDataStore } from '@/stores/data.js'

const { initials } = helperFunctions
const route = useRoute()
const store = useDataStore()

const teams = computed(() => {
  const id = route.query.id
  return store.getAdminByRole(id)
})

console.log('Admin By Role', teams.value)
</script>

<style></style>
