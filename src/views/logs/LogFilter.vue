<template>
  <div class="relative">
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
        :class="dropdownStyle"
        class="absolute h-56 w-52 rounded-xl overflow-hidden overflow-y-auto right-0 shadow-lg bg-white flex flex-col text-sm"
        style="z-index: 2"
      >
        <div
          class="border-b last:border-b-0"
          v-show="option.show"
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

<script>
import filterIcon from '@/assets/icons/filter.svg?url'
import { ref, reactive, computed } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { useRoute } from 'vue-router'

export default {
  emits: ['filter'],
  data: () => ({
    dropdownStyle: 'top-14',
    filterIcon
  }),

  setup(props, { emit }) {
    const store = useDataStore()
    const route = useRoute()

    const activeFilter = ref('')
    const toggleFilter = ref(false)

    const table = computed(() => {
      return route.query.type ? route.query.type : 'current_loan'
    })

    const payload = reactive({
      paging: {
        limit: 1000,
        skip: 0,
        search: ''
      },
      filter: {
        type: null,
        status: null
      },
      sort: {
        createdAt: -1
      }
    })

    const filterOptions = computed(() => {
      return [
        {
          name: 'All',
          value: 'all',
          type: 'all',
          show: true
        },
        {
          name: 'A - Z',
          value: 'a-z',
          type: 'all',
          show: true
        },

        {
          name: 'Z - A',
          value: 'z-a',
          type: 'status',
          show: true
        },
        {
          name: 'Active',
          value: 'APPROVED',
          type: 'status',
          show: table.value !== 'new_request'
        },
        {
          name: 'Overdue',
          value: 'OVERDUE',
          type: 'status',
          show: table.value !== 'new_request'
        },
        {
          name: 'Completed',
          value: 'COMPLETED',
          type: 'status',
          show: table.value !== 'new_request'
        },
        {
          name: 'Pending',
          value: 'PENDING',
          type: 'status',
          show: table.value !== 'new_request'
        },
        {
          name: 'Rejected',
          value: 'DECLINED',
          type: 'status',
          show: table.value !== 'new_request'
        },
        {
          name: 'Cleared',
          value: 'CLEARED',
          type: 'status',
          show: table.value !== 'new_request'
        },
        {
          name: 'Enterprise',
          value: 'ENTERPRISE_LOAN',
          type: 'type',
          show: true
        },
        {
          name: 'Payroll Cover',
          value: 'PAYROLL_COVER',
          type: 'type',
          show: true
        },
        {
          name: 'Credit Score',
          value: 'PAYROLL_COVER',
          type: 'type',
          show: table.value == 'new_request'
        },
        {
          name: 'Earliest Due Date',
          value: 'PAYROLL_COVER',
          type: 'type',
          show: true
        },
        {
          name: 'Application Date',
          value: 'date',
          type: 'date',
          show: table.value == 'new_request'
        },
        {
          name: 'Highest to Lowest',
          value: 'Year',
          type: 'date',
          show: true
        },
        {
          name: 'Lowest to Highest',
          value: 'Year',
          type: 'date',
          show: true
        }
      ]
    })

    const filterFuction = async (arg) => {
      toggleFilter.value = true
      if (arg.type == 'status' || arg.type == 'type') {
        payload.filter[arg.type] = arg.value
      } else if (arg.type == 'all') {
        toggleFilter.value = false
        payload.filter = {
          type: null,
          status: null
        }
        payload.sort.createdAt = -1
      } else if (arg.type == 'date') {
        payload.sort.createdAt = payload.sort.createdAt == -1 ? 1 : -1
      }
      emit('filter', payload)
      activeFilter.value = arg.name
    }

    return {
      toggleFilter,
      activeFilter,
      filterFuction,
      filterOptions
    }
  },

  mounted() {
    window.addEventListener('scroll', this.checkDropdownPosition)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkDropdownPosition)
  },

  methods: {
    checkDropdownPosition() {
      let dropdown = this.$el
      let windowHeight = window.innerHeight
      let dropdownRect = dropdown.getBoundingClientRect()
      let dropdownHeight = dropdownRect.height
      let dropdownTop = dropdownRect.top
      let dropdownBottom = dropdownRect.bottom

      // console.log("TOP", dropdownTop);
      // console.log("BOTTOM", dropdownBottom);
      // console.log("Window Hieght", windowHeight);

      if (dropdownTop < 0) {
        this.dropdownStyle = 'top-14'
      } else if (dropdownBottom > 420) {
        this.dropdownStyle = 'bottom-14'
      } else {
        this.dropdownStyle = 'top-14'
      }
    }
  }
}
</script>

<style></style>
