<template>
  <div class="flex items-center gap-4 w-full">
    <div class="relative search-input" :class="inputClass">
      <input type="text" class="h-10 px-4 pr-10 rounded-md" placeholder="search" :value="search"
        @input="$emit('update:search', $event.target.value)" />
      <span class="absolute right-0 top-0 bottom-0 w-10 inline-grid place-items-center">
        <SearchIcon />
      </span>
    </div>
    <FilterSelect class="filter-select" v-if="withFilter" />
  </div>
</template>

<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue'
import FilterSelect from './FilterSelect.vue'


defineProps({
  withFilter: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String
  },
  search: {
    type: String,
  }
})

defineEmits(['update:search'])
</script>

<style lang="scss" scoped>
.search-input {
  flex: 1;

  input {
    outline: none;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 0px 1px rgba(104, 113, 130, 0.16);
    transition: box-shadow 0.25s ease;
    width: 100%;

    &:focus {
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 0px 1px rgba(104, 130, 124, 0.16),
        0px 0px 0px 4px rgba(1, 237, 152, 0.36);
    }
  }

  .filter-select {
    flex-shrink: 0;
  }
}
</style>
