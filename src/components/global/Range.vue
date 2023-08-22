<template>
  <input
    type="range"
    :value="value || value == 0 ? value : modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :min="min"
    :max="max"
    :disabled="disabled"
    class="range w-full h-1.5 bg-gray-200 rounded-full cursor-pointer"
  />
</template>

<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number],
    default: undefined
  },
  max: {
    type: [String, Number],
    default: undefined
  },
  min: {
    type: [String, Number],
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#11453B'
  }
})

defineEmits(['update:modelValue'])

const rangeWidth = computed(() => {
  const value = props.value ? props.value : props.modelValue
  const percentage = (value * 100) / Number(props.max)

  console.log(value, percentage)
  return `${percentage}%`
})

const rangeColor = computed(() => {
  return props.color
})
</script>

<style scope>
.range {
  -webkit-appearance: none;
  background-image: linear-gradient(v-bind(rangeColor), v-bind(rangeColor));
  background-size: v-bind(rangeWidth) 100%;
  background-repeat: no-repeat;
}

.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: v-bind(rangeColor);
}
</style>
