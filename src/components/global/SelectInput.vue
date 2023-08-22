<template>
  <main>
    <div class="relative z-50" v-bind="$attrs">
      <div
        style="height: 48px"
        :class="[borderClass]"
        class="bg-white w-full leading-2 p-3 border block rounded-2xl flex items-center justify-between"
        aria-readonly
        @click.self="isSelect = !isSelect"
      >
        <div class="input-prefix inline-grid place-items-center" v-if="$slots.append">
          <slot name="append" />
        </div>

        <span
          :class="value ? 'text-dark-700' : 'text-dark-300'"
          class="relative w-11/12"
          @click.self="isSelect = !isSelect"
        >
          {{ value == '' ? placeholder : getLabel(value) }}</span
        >

        <span @click="isSelect = !isSelect" class="text-dark-600">
          <i v-if="isSelect" class="pi pi-angle-right text-lg"></i>
          <i v-else class="pi pi-angle-down text-lg"></i>
        </span>
      </div>
      <ul
        v-show="isSelect"
        :class="[autoHeight ? 'h-auto' : 'h-44 overflow-y-auto']"
        class="w-full mt-2 overflow-x-hidden rounded-xl bg-white shadow-xl bg-white"
      >
        <li
          v-show="optionData.length"
          v-for="(option, i) in optionData"
          :key="i"
          class="px-4 py-3 hover:bg-[#ebfaf6] cursor-pointer flex justify-between items-center border-b last:border-none border-dividerColor"
          :class="[value == option.value ? ' text-success' : '']"
          @click="update(option)"
        >
          <span> {{ option.label }}</span>
          <span class="flex-shrink-0 w-5">
            <img :src="value == option.value ? CheckActive : CheckNull" alt="" />
          </span>
        </li>
      </ul>
    </div>
    <div v-if="error" class="text-xs font-medium text-error mt-1 mb-2">
      {{ error }}
    </div>
    <div
      @click="isSelect = false"
      :class="!isSelect ? 'pointer-events-none' : ''"
      class="bg-transparent fixed inset-0"
    ></div>
  </main>
</template>

<script setup>
import CheckActive from '@/assets/icons/checkbox-active.svg?url'
import CheckNull from '@/assets/icons/checkbox-null.svg?url'

import { ref, computed } from 'vue'
const props = defineProps({
  value: {
    default: ''
  },
  autoHeight: {
    type: Boolean,
    default: true
  },
  searchable: {
    type: Boolean,
    default: false
  },
  error: {
    type: [String, Boolean],
    default: false
  },
  options: {
    type: Array,
    default() {
      return []
    }
  },
  placeholder: {
    type: String,
    default: 'Select'
  }
})

const emit = defineEmits(['update', 'showModal'])
const optionData = ref([])
optionData.value = props.options

const isSelect = ref(false)

function update(value) {
  isSelect.value = false
  emit('update', value)
}

const borderClass = computed(() => {
  let style = ''
  if (props.error) {
    style = 'border-error'
  } else {
    if (isSelect.value) {
      style = 'border-primary'
    } else {
      style = 'border-dark-300'
    }
  }
  return style
})

const getLabel = (val) => {
  console.log(props.options, val)
  if (val) {
    const option = props.options.find((el) => el.value == val)
    return option ? option.label : ''
  }
}
</script>

<style></style>
