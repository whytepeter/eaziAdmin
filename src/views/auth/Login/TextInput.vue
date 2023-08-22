<script setup>
import { ref, useSlots } from 'vue'

const slots = useSlots()

defineProps({
  label: String,
  error: Boolean,
  helperText: String
})

const hasPrefix = !!slots.prefix
const hasSuffix = !!slots.suffix

const focused = ref(false)
</script>

<template>
  <div class="relative input-field" :class="{ 'has-error': error === true }">
    <label class="label" :class="{ show: focused === true || error === true }">{{ label }}</label>

    <div
      :class="{ focused: !!focused }"
      class="input-wrapper border border-[#B5B6B5] rounded-2xl px-2 flex gap-2 overflow-hidden"
    >
      <div class="input-prefix inline-grid place-items-center" v-if="hasPrefix">
        <slot name="prefix" />
      </div>
      <input
        v-bind="$attrs"
        class="input h-[48px] block w-full outline-none"
        @focus="focused = true"
        @blur="focused = false"
      />
      <div class="input-suffix inline-grid place-items-center" v-if="hasSuffix">
        <slot name="suffix" />
      </div>
    </div>
    <div class="input-helper">{{ helperText }}</div>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  @apply relative;
}

.input-wrapper.focused {
  @apply border-primary;
}

.label {
  @apply opacity-0 absolute inline-block left-[16px] text-sm capitalize leading-[20px] tracking-[0.25px] text-[#8D8E8D] px-2 top-0 bg-white;
  transform: translateY(-50%);
  z-index: 4;
}

.label.show {
  @apply opacity-100;
}

.input-helper {
  font-size: 14px;
  line-height: 16px;
  margin-top: 5px;
  margin-left: 10px;
}

.input-field.has-error .input-helper {
  color: #ef4444;
}

.input-field.has-error .input-wrapper {
  border-color: #ef4444;
}
</style>
