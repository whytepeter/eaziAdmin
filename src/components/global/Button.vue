<template>
  <main>
    <button
      :type="type"
      class="focus:outline-none hover:opacity-[.93] transform transition-opacity duration-300 rounded-full relative"
      :class="buttonStyle"
      v-bind="$attrs"
    >
      <slot v-if="!loading" />
      <div v-else :class="loading ? 'opacity-0' : ''" class="flex gap-1 items-center">
        <slot />
      </div>

      <div
        v-if="loading"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </button>
  </main>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  tile: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: String,
    default: 'fill'
  },
  variant: {
    type: String,
    default: 'fill'
  },
  type: {
    type: String,
    default: 'button'
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
  border: {
    type: [String, Boolean],
    default: false
  },
  disabled: {
    type: Boolean,
    default: undefined
  },
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  whiteSpace: {
    type: Boolean,
    default: true
  }
})

const buttonStyle = computed(() => {
  return [
    sizeStyle.value,
    textColor.value,
    background.value,
    props.whiteSpace ? 'whitespace-nowrap' : '',
    borderRadius.value,
    props.block ? 'max-w-full min-w-full w-full' : '',
    props.loading ? 'pointer-events-none' : '',
    props.disabled ? 'opacity-60 pointer-events-none' : ''
  ]
})

const background = computed(() => {
  let style = ''
  if (props.variant.toLocaleLowerCase() === 'outlined') {
    const border = props.border ? `border-${props.border}` : 'border'
    style = `${border} border-${props.color} `
  } else if (props.variant.toLocaleLowerCase() === 'text') {
    style = ``
  } else {
    style = `bg-${props.color}`
  }
  return style
})

const textColor = computed(() => {
  let style

  if (
    props.variant.toLocaleLowerCase() === 'outlined' ||
    props.variant.toLocaleLowerCase() === 'text'
  ) {
    style = `text-${props.color} hover:text-${props.color}-hover`
  } else {
    style = `text-white`
  }
  return style
})

const loaderColor = computed(() => {
  const colors = {
    primary: '#0A244F',
    secondary: '#E4572E',
    tertiary: '#E57C00',
    info: '#184EA8',
    notice: '#F39C36',
    success: '#189F00',
    error: '#D32F2F'
  }

  const colorsArray = ['primary', 'secondary', 'tertiary', 'info', 'notice', 'success', 'error']

  let color
  if (
    props.variant.toLocaleLowerCase() === 'outlined' ||
    props.variant.toLocaleLowerCase() === 'text'
  ) {
    color = colorsArray.includes(props.color) ? colors[props.color] : props.color
  } else {
    color = `#ffff`
  }

  return color
})

const borderRadius = computed(() => {
  let style = ''
  if (!props.tile) {
    style = `rounded-${props.rounded}`
  }

  return style
})

const sizeStyle = computed(() => {
  props.size = props.size ? props.size.toLocaleLowerCase() : ''
  let style = ''
  if (props.size === 'small') {
    style = `p-2 text-sm font-medium`
  } else if (props.size === 'medium') {
    style = `px-4 py-2  text-sm font-medium`
  } else if (props.size === 'large') {
    style = `px-8 py-4 text-lg font-medium`
  } else {
    style = `px-5 py-3 text-base font-medium`
  }

  return style
})
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 4px 0;
  border: 2px solid v-bind(loaderColor);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: v-bind(loaderColor) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
