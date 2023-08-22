<template>
  <div ref="filter" class="relative">
    <div
      @click="toggleFilter = true"
      class="flex items-center justify-between gap-2 rounded-lg bg-newGrey p-2 cursor-pointer"
    >
      <div class="flex items-center gap-1">
        <span class="text-dark-700">Filter</span>
        <span v-if="activeFilter" class="w-fit truncate w-fit font-medium text-sm text-dark-900">{{
          activeFilter
        }}</span>
      </div>
      <div class="w-6">
        <img :src="filterIcon" alt="" />
      </div>

      <div
        v-if="toggleFilter"
        :class="filterPositionClasses"
        class="absolute h-56 w-52 rounded-xl overflow-hidden overflow-y-auto right-0 shadow-lg bg-white flex flex-col text-sm"
        style="z-index: 2"
      >
        <div
          v-show="option.show"
          class="border-b last:border-b-0"
          v-for="option in filterOptions"
          :key="option.name"
          @click="filterFuction(option)"
        >
          <div
            class="flex items-center gap-3 cursor-pointer px-4 py-2 hover:bg-primary-hover hover:text-white"
          >
            <span>{{ option.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    @click="toggleFilter = false"
    :class="!toggleFilter ? 'pointer-events-none' : ''"
    class="bg-transparent fixed inset-0"
  ></div>
</template>

<script setup>
import filterIcon from '@/assets/icons/filter.svg?url'
import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const emit = defineEmits(['query'])

const activeFilter = ref('')
const toggleFilter = ref(false)
const filter = ref(null)

const compliancePage = computed(() => {
  return route.path.includes('compliance') ? true : false
})
const chargesPage = computed(() => {
  return route.path.includes('charges') ? true : false
})

const payload = reactive({
  pagination: {
    page: null,
    limit: 1000
  },
  filter: {
    company: null,
    amount: null
  }
})

if (compliancePage.value) {
  payload.filter.type = null
}

console.log(payload)

const filterOptions = reactive([
  {
    name: 'All',
    value: 'all',
    type: 'all',
    show: true
  },
  {
    name: 'A - Z',
    value: 'ASC',
    type: 'company',
    show: true
  },

  {
    name: 'Z - A',
    value: 'DESC',
    type: 'company',
    show: true
  },
  {
    name: 'Type',
    value: null,
    type: 'type',
    show: compliancePage.value
  },
  // {
  //   name: 'Amount',
  //   value: 'ASC',
  //   type: 'amount',
  //   show: true
  // },
  {
    name: 'Date',
    value: 'ASC',
    type: 'date',
    show: true
  },
  {
    name: 'Completed',
    value: 'completed',
    type: 'status',
    show: true
  },

  {
    name: 'Highest Transaction',
    value: 'DESC',
    type: 'amount',
    show: true
  },
  {
    name: 'Lowest Transaction',
    value: 'ASC',
    type: 'amount',
    show: true
  }
])

const filterFuction = async (arg) => {
  toggleFilter.value = true
  clearFilter()
  if (arg.type == 'all') {
    toggleFilter.value = false
    // clearFilter()
  } else if (arg.type == 'status') {
    // clearFilter()
  } else {
    payload.filter[arg.type] = arg.value
  }
  console.log(payload)
  await emit('query', payload)
  activeFilter.value = arg.name
}

const filterPositionClasses = computed(() => {
  if (!toggleFilter.value || !filter.value) {
    return ''
  }
  const filterRect = filter.value.getBoundingClientRect()
  const screenHeight = window.innerHeight
  const isNearBottom = filterRect.bottom > screenHeight - 200

  console.log(filterRect.bottom, screenHeight - 200)

  return isNearBottom ? 'bottom-12' : 'top-14'
})

const clearFilter = () => {
  payload.pagination = {
    page: null,
    limit: 1000
  }
  payload.filter = {
    company: null,
    amount: null
  }

  if (compliancePage.value) {
    payload.filter.type = null
  }
}
</script>

<style></style>
