<template>
  <div class="table-pagination flex text-base items-center">
    <div>{{ range.from }}-{{ range.to }} of {{ totalRecords }}</div>

    <div class="ml-auto flex items-center">
      <div for="rowsPerPage" class="flex items-center mr-6">
        <label class="mr-2 inline-block" for="rowsPerPage">Rows per Page</label>
        <select id="rowsPerPage" class="bg-transparent p-1" :value="rowsPerPage" @change="handleRowsPerPageChange">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      <div class="flex gap-3 items-center">
        <button :disabled="page === 1" @click="$emit('update:page', page - 1)">
          <LeftIcon />
        </button>
        <div class="">
          <span class="current-page">{{ page }}</span>/{{ totalPages }}
        </div>
        <button :disabled="page === totalPages" @click="$emit('update:page', page + 1)">
          <RightIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftIcon from '@/assets/icons/left-angle.svg'
import RightIcon from '@/assets/icons/right-angle.svg'
import { computed } from 'vue'

const $props = defineProps({
  page: {
    type: Number
  },
  rowsPerPage: {
    type: Number
  },
  totalPages: {
    type: Number,
  },
  totalRecords: {
    type: Number,
  }
})

const range = computed(() => {
  let _from = ($props.page - 1) * $props.rowsPerPage
  let _to = _from + $props.rowsPerPage
  let { totalRecords } = $props;
  if (totalRecords && _to > totalRecords) {
    _to = totalRecords
  }
  return {
    from: _from,
    to: _to
  }
})

const $emit = defineEmits(['update:page', 'update:rowsPerPage'])

const handleRowsPerPageChange = ($event) => {
  // reset page when rows per page changes
  $emit('update:page', 1)
  $emit('update:rowsPerPage', +$event.target.value)
}
</script>

<style lang="scss" scoped>
.table-pagination {
  color: #687182;
}

.current-page {
  color: #171c26;
}

select {
  color: #687182;
  font-weight: 500;
}

button {
  background: #f7f9fc;
  box-shadow: 0px 0px 0px 1px rgba(70, 79, 96, 0.24);
  border-radius: 6px;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;

  &:disabled {
    opacity: .5;
  }
}
</style>
