<template>
  <div class="flex flex-col h-full">
    <div class="flex-shrink-0 mb-6">
      <search-input class="w-full" />
    </div>
    <div class="flex-1 overflow-auto">
      <ul v-if="data.length > 0" class="grid gap-4">
        <li v-for="(employee, index) of data" :key="`employee-${index}`">
          <div
            @click="$emit('update:selected', employee)"
            class="employee flex flex-center gap-4"
            :class="{ selected: employee._id === selected?._id }"
          >
            <div class="w-10 h-10 bg-green-300 rounded-full"></div>
            <div>
              <div class="text-[#515251] text-sm">{{ employee.position ?? 'unknown' }}</div>
              <div class="text-[#292A29] font-bold text-base">
                <slot name="name" :data="employee">
                  {{ employee.firstName + ' ' + employee.lastName }}
                </slot>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="py-10 text-center" v-else>No records found!</div>
    </div>
  </div>
</template>

<script setup>
import SearchInput from '@/components/SearchInput.vue'

defineEmits(['update:selected'])

defineProps({
  data: {
    type: Array
  },
  selected: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
.employee {
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    background-color: #f2f1f1;
    transition: background-color 0.25s ease;
  }

  &.selected {
    background-color: #f2f1f1;
  }
}
</style>
