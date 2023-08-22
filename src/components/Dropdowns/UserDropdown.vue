<template>
  <div class="relative">
    <div
      @click="$router.push({ name: 'PersonalInfo' })"
      class="items-center cursor-pointer flex gap-2 md:gap-4 relative"
    >
      <span
        class="w-12 h-12 text-sm text-white bg-primary inline-flex items-center justify-center rounded-full"
      >
        <img
          v-if="user && user.pfp"
          alt="..."
          class="w-full h-full object-cover rounded-full align-middle border-none shadow-lg"
          :src="user && user.pfp"
        />
        <div
          v-else
          class="flex items-center justify-center p-2 h-10 w-10 sm:w-11 sm:h-11 text-lg text-white font-medium rounded-full"
        >
          {{ initials }}
        </div>
      </span>
      <div class="flex flex-col text-left">
        <span class="font-bold text-dark-900 capitalize">{{ getAdminName }}</span>
        <span class="text-xs font-medium -mt-1">Admin</span>
      </div>
      <div>
        <i :class="showDropdown ? 'fas fa-angle-down' : 'fas fa-angle-right'"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { useRouter } from 'vue-router'

const store = useDataStore()

const { query } = store
const router = useRouter()

const user = computed(() => store.getUser)

const initials = computed(() => {
  const name = getAdminName.value
  if (name && name !== 'N/A') {
    const arr = name.split(' ')
    const str = `${arr[0].charAt(0).toUpperCase()}${arr[1].charAt(0).toUpperCase()}`
    return str
  } else {
    return 'N/A'
  }
})

const getAdminName = computed(() => {
  let name = ''

  if (user.value) {
    let { firstName = '', lastName = '' } = user.value
    name = [firstName, lastName].join(' ').trim()
  }
  return name || 'N/A'
})
</script>
