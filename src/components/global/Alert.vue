<template>
  <main>
    <div
      @click.self="handleClose"
      style="
        z-index: 300;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 19, 9, 0.5);
      "
      class="inset-0 w-full backdrop-blur-[1.5px] flex items-center justify-center overflow-y-auto"
    >
      <div class="bg-white w-96 max-w-sm mx-auto rounded-3xl overflow-y-auto shadow-xs">
        <div class="p-4 text-center flex flex-col gap-2 items-center">
          <div
            v-if="!noIcon"
            class="p-4 bg-highlight rounded-full my-4 flex items-center justify-center"
          >
            <img :src="icon ? icon : logo" alt="" />
          </div>
          <h3 class="text-primary font-extrabold text-2xl">{{ title }}</h3>
          <p class="text-dark-800 text-sm">{{ caption }}</p>
        </div>
        <div :class="{ 'p-4 pb-5': spacing }">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import logo from '@/assets/icons/successicon.svg?url'

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  title: {
    type: String,
    default: 'Success'
  },
  noIcon: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [Boolean, String],
    default: false
  },
  spacing: {
    type: [Boolean, String],
    default: true
  },
  caption: {
    type: String,
    default: 'Success Message'
  },
  persistence: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['close'])

const handleClose = () => {
  if (!props.persistence) {
    emit('close')
  }
}
</script>

<style></style>
