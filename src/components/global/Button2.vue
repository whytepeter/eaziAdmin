<template>
  <button class="btn" :class="btnClass" v-bind="$attrs" :disabled="$attrs.disabled || isLoading">
    <div class="flex items-center justify-center gap-2">
      <div class="btn-spinner" v-if="isLoading === true"></div>
      <slot name="leftIcon" />
      <slot name="default" />
      <slot name="rightIcon" />
    </div>
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  inheritAttrs: false
}
</script>

<script setup>
const props = defineProps({
  outlined: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'fill'
  },
  size: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary'
  },
  rounded: {
    type: String,
    default: 'full'
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})

const btnClass = computed(() => {
  let classes = []

  let color = props.color

  if (color) {
    if (props.outlined) {
      let outlineClass = `btn-${color}-outlined`
      classes.push(outlineClass)
    } else {
      classes.push(`btn-${color}`)
    }
  }

  if (props.block === true) {
    classes.push('btn-block')
  }

  return classes.join(' ')
})
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  border-radius: 99px;
  min-height: 44px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  display: inline-block;
  transition: 0.25s ease;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
  }
}

.btn-block {
  width: 100%;
}

.btn-primary {
  background: #11453b;
  color: white;

  &:hover:not(:disabled) {
    background: #4d8177;
  }
}

.btn-primary-outlined {
  background: transparent;
  color: #11453b;
  border: 1px solid #11453b;

  &:hover:not(:disabled) {
    color: #8d8e8d;
  }
}

.btn-spinner {
  height: 15px;
  width: 15px;
  border: 1.4px solid white;
  border-top-color: transparent;
  animation: spin 0.5s linear infinite;
  border-radius: 99px;
  transition: width 0.25s ease;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
