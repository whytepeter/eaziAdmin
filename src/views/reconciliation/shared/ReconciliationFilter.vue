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
          :class="[show == option.type ? 'bg-highlight' : '', 'border-b', 'last:border-b-0']"
          v-for="option in filterOptions"
          :key="option.name"
          @click="filterFuction(option)"
        >
          <div
            :class="[show !== option.type ? 'hover:bg-primary-hover hover:text-white' : '']"
            class="flex items-center gap-3 cursor-pointer px-4 py-2"
          >
            <span>{{ option.name }}</span>
          </div>
          <div v-if="show == option.type" class="flex flex-col gap-2 px-2 pt-0 pb-3">
            <easiTextInput
              v-model="filterDate"
              placeholder="Month"
              type="month"
              :max="maxDate"
              inputmode="date"
            />
            <easiButton @click="handleDate(option)" size="small" block>Submit</easiButton>
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
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query, mutate } = store

const activeFilter = ref('')
const toggleFilter = ref(false)
const filter = ref(null)

const show = ref(null)
const filterDate = ref(null)
const maxDate = computed(() => {
  const currentDate = new Date()
  return currentDate.toISOString().slice(0, 7)
})

const payload = ref({
  filter: {
    company: null,
    month: null,
    reconciliationValue: null,
    transaction: null,
    year: null
  },
  pagination: {
    limit: 1000,
    page: null
  }
})

const emit = defineEmits(['loading'])

const filterOptions = reactive([
  {
    name: 'All',
    value: 'all',
    type: 'all'
  },
  {
    name: 'A - Z',
    value: 'ASC',
    type: 'company'
  },

  {
    name: 'Z - A',
    value: 'DESC',
    type: 'company'
  },
  {
    name: 'True',
    value: true,
    type: 'reconciliationValue'
  },
  {
    name: 'False',
    value: false,
    type: 'reconciliationValue'
  },
  {
    name: 'Month',
    value: null,
    type: 'month'
  },
  {
    name: 'Year',
    value: null,
    type: 'year'
  },

  {
    name: 'Highest Transaction',
    value: 'DESC',
    type: 'transaction'
  },
  {
    name: 'Lowest Transaction',
    value: 'ASC',
    type: 'transaction'
  }
])

const filterFuction = async (arg) => {
  toggleFilter.value = true

  if (arg.type == 'all') {
    clearFilters()
    toggleFilter.value = false
  } else if (arg.type == 'month' || arg.type == 'year') {
    show.value = arg.type
    return false
  } else {
    clearFilters()
    payload.value.filter[arg.type] = arg.value
  }

  toggleFilter.value = false
  await queryReconciliationList()
  activeFilter.value = arg.name
}

const clearFilters = () => {
  payload.value.filter = {
    company: null,
    month: null,
    reconciliationValue: null,
    transaction: null,
    year: null
  }
}

const handleDate = async (arg) => {
  const year = filterDate.value.split('-')[0]
  const month = filterDate.value.split('-')[1]

  console.log(month, year)

  if (arg.type == 'month') {
    payload.value.filter.month = parseInt(month)
    console.log(payload.value, month)
  } else {
    payload.value.filter.year = parseInt(year)
    console.log(payload.value, year)
  }

  await queryReconciliationList()
  filterDate.value = null
  activeFilter.value = arg.name
  toggleFilter.value = false
  show.value = null
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

const queryReconciliationList = async () => {
  console.log(payload.value)
  try {
    emit('loading', true)
    const res = await query({
      endpoint: 'GetReconciliationList',
      payload: {
        input: payload.value
      },
      storeKey: 'reconciliationList'
    })
    emit('loading', false)
  } catch (error) {
    emit('loading', false)
    console.log(error.message)
  }
}
</script>

<style></style>
