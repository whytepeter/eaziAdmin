<template>
  <div v-if="data" class="flex items-center justify-center md:justify-between">
    <div class="flex items-center gap-2 text-base">
      <div for="pageSize" class="border rounded-xl text-sm py-2 px-1 border-dark-100">
        <select
          id="pageSize"
          class="focus:outline-none bg-transparent"
          :value="pageSize"
          @change="handleChange"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      <div class="hidden md:block text-left md:my-4 text-dark-500">
        Showing
        {{ startItem }} -
        {{ endItem }}
        of {{ data.length }}
      </div>
    </div>

    <div v-if="!infoOnly" class="flex items-center justify-center mt-4">
      <div class="flex gap-2 items-center">
        <div
          @click="jumpToFirstPage"
          v-if="showPreviousLink()"
          class="flex cursor-pointer font-medium border-t border-gray bg-white text-dark-400 rounded-xl p-2 text-base"
        >
          <i class="pi pi-angle-double-left" />
        </div>
        <div
          v-if="showPreviousLink()"
          class="flex cursor-pointer font-medium border-t border-gray bg-white text-dark-400 rounded-xl p-2 text-base"
          @click="updatePage(currentPage - 1)"
        >
          <i class="pi pi-angle-left" />
        </div>
      </div>

      <ul v-if="totalPages > 1" class="flex items-center">
        <li
          @click="updatePage(0)"
          :class="[
            currentPage === 0
              ? ' disabled cursor-not-allowed bg-primary text-white rounded-xl h-8 w-8'
              : 'text-dark-800 h-8 w-8',
            'flex items-center justify-center'
          ]"
        >
          <a class="pagination-link" :disabled="currentPage === 0">1</a>
        </li>
        <li v-if="currentPage > 2">
          <span class="pagination-link disabled">...</span>
        </li>
        <li
          v-for="pageNumber in visiblePages"
          :key="pageNumber"
          @click="updatePage(pageNumber - 1)"
          :class="[
            activePage === pageNumber
              ? ' disabled cursor-not-allowed bg-primary text-white rounded-xl h-8 w-8'
              : 'text-dark-800 h-8 w-8',
            'flex items-center justify-center'
          ]"
        >
          <a class="pagination-link">{{ pageNumber }}</a>
        </li>
        <li v-if="currentPage < totalPages - 2">
          <span class="pagination-link disabled">...</span>
        </li>
        <li
          @click="updatePage(totalPages - 1)"
          :class="[
            currentPage === totalPages - 1
              ? ' disabled cursor-not-allowed bg-primary text-white rounded-xl h-8 w-8'
              : 'text-dark-800 h-8 w-8',
            'flex items-center justify-center'
          ]"
        >
          <a class="pagination-link" :disabled="currentPage === totalPages - 1">{{ totalPages }}</a>
        </li>
      </ul>

      <div class="flex gap-2 items-center">
        <div
          v-if="showNextLink()"
          class="flex cursor-pointer font-medium border-t border-gray bg-primary bg-opacity-20 text-primary rounded-xl p-2 text-base"
          @click="updatePage(currentPage + 1)"
        >
          <i class="pi pi-angle-right" />
        </div>

        <div
          @click="jumpToLastPage"
          v-if="showNextLink()"
          class="flex cursor-pointer font-medium border-t border-gray bg-primary bg-opacity-20 text-primary rounded-xl p-2 text-base"
        >
          <i class="pi pi-angle-double-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },

  infoOnly: {
    type: Boolean,
    default: false
  },

  currentPage: {
    type: Number,
    default: 0
  },

  pageSize: {
    type: Number,
    default: 10
  }
})

const emit = defineEmits(['page:update', 'update:pageSize', 'query'])

const queryFunc = () => {
  emit('query')
}

const activePage = ref(0)

const startItem = computed(() => {
  return props.currentPage * props.pageSize + 1
})

const endItem = computed(() => {
  const lastItem = (props.currentPage + 1) * props.pageSize
  return Math.min(lastItem, props.data.length)
})

const updatePage = (pageNumber) => {
  console.log(pageNumber, 'PN', props.currentPage)
  activePage.value = pageNumber + 1
  emit('page:update', pageNumber, props.data)
  queryFunc()
}

const handleChange = (e) => {
  emit('update:pageSize', +e.target.value)
  emit('page:update', props.currentPage, props.data)
  // const currentPage = props.currentPage > 0 ? props.currentPage - 1 : props.currentPage
  // updatePage(props.currentPage - 1)
}

// const currentPage = ref(1);
// const totalItems = 100; // Change this value according to your total number of items

const totalPages = computed(() => Math.ceil(props.data.length / props.pageSize))
console.log(totalPages.value, 'TP')

const visiblePages = computed(() => {
  const startPage = Math.max(2, props.currentPage)
  const endPage = Math.min(startPage + 2, totalPages.value - 1)
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
})

const showPreviousLink = () => {
  return props.currentPage == 0 ? false : true
}
const showNextLink = () => {
  return props.currentPage == totalPages.value - 1 ? false : true
}
const jumpToLastPage = () => {
  updatePage(totalPages.value - 1)
}
const jumpToFirstPage = () => {
  updatePage(0)
}
</script>

<style scoped>
.pagination-link {
  cursor: pointer;
  padding: 0.5rem;
}

.disabled {
  cursor: not-allowed;
}

.active {
  background-color: #f0f0f0;
}
</style>
