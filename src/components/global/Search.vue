<template>
  <div
    class="px-3 rounded-xl border-[1.5px] bg-white flex items-center overflow-hidden"
    :class="[isFocused ? 'border-primary' : 'border-dark-50', large ? 'py-4' : 'py-2']"
  >
    <input
      ref="inputField"
      class="bg-white pr-2 w-full text-info-700 text-sm sm:text-base font-medium leading-2 focus:outline-none block appearance-none"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="$attrs"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <div class="cursor-pointer" @click="$emit('search')">
      <img :src="searchIcon" alt="" :class="large ? 'w-5' : ''" />
    </div>
  </div>
</template>

<script setup>
import searchIcon from '@/assets/icons/search.svg?url'
import { ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },

  placeholder: {
    type: String,
    default: 'Search...'
  },
  large: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue', 'search'])

const isFocused = ref(false)
</script>

<style></style>
