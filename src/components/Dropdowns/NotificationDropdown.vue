<template>
  <div class="relative">
    <span
      class="text-dark-700 block py-1 px-2 cursor-pointer"
      @click="showNotification = !showNotification"
    >
      <i class="far fa-bell text-xl"></i>
    </span>
    <div
      v-show="showNotification"
      style="width:100vw; max-width: 528px; max-height: 98vh;`"
      class="flex z-10 flex-col bg-white absolute border-t border-dark-100 -mt-1 h-auto -right-48 sm:-right-52 top-14 py-2 shadow-lg text-sm"
    >
      <div class="pt-4 px-6 shadow-md">
        <div class="w-full flex items-center justify-between font-medium pb-2">
          <h4 class="text-lg sm:text-2xl">Notifications</h4>
          <span class="capitalize text-xs sm:text-sm cursor-pointer">Mark all as read</span>
        </div>
        <div class="w-full flex gap-4 md:gap-6 mt-2">
          <div
            v-for="tab in tabs"
            :key="tab.name"
            @click="activeTab = tab.name"
            :class="
              activeTab === tab.name
                ? 'border-info border-b-2  text-dark-800 font-bold '
                : 'text-dark-600 font-medium'
            "
            class="cursor-pointer p-2 flex capitalize items-center gap-2 text-sm sm:text-base"
          >
            {{ tab.name }}
            <div
              :class="
                activeTab === tab.name ? 'bg-primary text-white' : 'text-dark-600 bg-dark-100'
              "
              class="rounded font-medium py-1 px-2 sm:ml-1 text-sm sm:text-base"
            >
              {{ padNumber(tab.nofications) }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col py-6 text-base">
        <div
          v-for="item in notifications"
          :key="item.id"
          :class="item.status == 'unread' ? 'bg-background-200' : ''"
          class="p-4 w-full cursor-pointer flex items-start gap-4 border-b border-dark-200 last:border-b-0"
        >
          <div class="inline-block items-center gap-2 relative rounded-full">
            <div
              v-if="item.employee.profile.picture"
              class="border w-9 sm:w-10 h-9 sm:h-10 rounded-full overflow-hidden"
            >
              <img
                class="-full"
                :src="item.employee.profile.picture"
                :alt="item.employee.profile.firstName"
              />
            </div>
            <div
              v-else
              :style="`background-color:`"
              class="p-2 w-9 sm:h-10 h-9 sm:w-10 text-sm sm:text-lg text-white font-medium rounded-full"
            >
              N/A
            </div>

            <div
              class="bg-success w-3 sm:w-3 h-3 sm:h-3 border-2 border-white absolute -right-1 top-0 rounded-full"
            ></div>
          </div>

          <div class="flex flex-col items-start text-dark-700">
            <div class="text-base">
              <span class="text-dark-900 font-bold">{{
                `${item.employee.profile.firstName} ${item.employee.profile.lastName}`
              }}</span>
              <span class="ml-2">{{ item.description }}</span>
            </div>

            <div class="text-xs sm:text-sm">
              <span>{{ item.time }}</span>
              <i class="fas fa-circle text-xs mx-2"></i>
              <span>{{ item.title }}</span>
            </div>

            <div v-if="item.action" class="flex items-center gap-4 mt-2">
              <easiButton color="primary" size="small">Accept</easiButton>
              <easiButton color="primary" size="small" variant="outlined">Decline</easiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    @click=";(showNotification = false), (selected = '')"
    :class="!showNotification ? 'pointer-events-none' : ''"
    class="bg-transparent fixed inset-0"
  ></div>
</template>
<script setup>
import { computed, ref, reactive } from 'vue'
import { storeToRefs, mapWritableState } from 'pinia'
import { useDataStore } from '@/stores/data.js'
import { useRoute, useRouter } from 'vue-router'
import { helperFunctions } from '@/composable/helperFunctions'

const store = useDataStore()
const { formatAmount, formatDate } = helperFunctions
const { companyView, checkLoading } = storeToRefs(store)
const { query } = store
const router = useRouter()

const showNotification = ref(false)

const activeTab = ref('all')
const tabs = reactive([
  {
    name: 'all',
    nofications: 28
  },
  {
    name: 'unread',
    nofications: 7
  },
  {
    name: 'read',
    nofications: 21
  }
])

const notifications = ref([
  {
    employee: {
      profile: {
        firstName: 'Abiba',
        lastName: 'Isaac',
        picture: null
      }
    },
    id: 'adfafww',
    status: 'unread',
    date: new Date().toLocaleDateString(),
    time: '2H agao',
    title: 'New enrollment',
    description: 'Added 2 new employees 😊',
    action: null
  },
  {
    employee: {
      profile: {
        firstName: 'Tunde',
        lastName: 'Kelani',
        picture: null
      }
    },
    id: 'adfadaww',
    status: 'unread',
    date: new Date().toLocaleDateString(),
    time: '4H agao',
    title: 'Sales and inventory plan',
    description: 'Sent an invoice to Mrs Alagbe 😊',
    action: null
  },
  {
    employee: {
      profile: {
        firstName: 'John',
        lastName: 'Badamusi',
        picture: null
      }
    },
    id: 'adfa242w',
    status: 'read',
    date: new Date().toLocaleDateString(),
    time: '5H agao',
    title: 'Employee management plan',
    description: 'is requesting to upgrade plan',
    action: true
  }
])
const padNumber = (num) => {
  return num && num.toString().padStart(2, '0')
}
</script>
