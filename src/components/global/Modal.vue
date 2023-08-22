<template>
  <main>
    <div
      @click.self="clickOutSide"
      style="
        z-index: 300;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 19, 9, 0.5);
      "
      class="inset-0 -z-5 w-full backdrop-blur-[1.5px] overflow-y-auto py-16"
    >
      <div
        :class="[`rounded-${rounded}`]"
        class="relative bg-white z-20 md:w-full w-11/12 max-w-lg mx-auto pb-4 shadow-xs"
      >
        <div
          v-if="!hideCloseIcon"
          @click="$emit('close')"
          class="absolute cursor-pointer top-4 right-5"
        >
          <i class="pi pi-times-circle text-dark-600 text-xl"></i>
        </div>

        <div
          v-if="$slots.header"
          class="w-full flex justify-center items-center px-6 pb-2 pt-5 text-2xl"
        >
          <slot name="header" />
        </div>

        <hr
          v-if="divider && $slots.header"
          class="my-3 border border-dividerColor text-dividerColor"
        />

        <main>
          <div class="px-0">
            <slot />
          </div>
        </main>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onUnmounted } from '@vue/runtime-core'

const props = defineProps({
  divider: {
    type: Boolean,
    default: true
  },
  hideCloseIcon: {
    type: Boolean,
    default: false
  },
  lite: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: String,
    default: 'xl'
  },
  color: {
    type: String,
    default: 'bg-background-100'
  },
  persistence: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

const clickOutSide = () => {
  if (!props.persistence) {
    close()
  }
}
</script>

<style></style>
