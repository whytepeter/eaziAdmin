<template>
  <div
    :class="[!user ? 'bg-primary' : 'bg-[#515251]']"
    class="w-full overflow-hidden relative flex flex-col gap-5 rounded-3xl p-6 pb-8 text-white"
  >
    <p class="text-sm font-medium">
      {{ !user ? 'Eazipay Consolidated Balance' : 'Wallet Balance' }}
    </p>

    <div class="flex items-center justify-between gap-4">
      <h3>
        {{ show ? formatAmount(amount) : '₦******' }}
      </h3>

      <span @click="show = !show" class="cursor-pointer" :class="[!user ? 'text-tertiary' : '']">
        <i v-if="show" class="pi pi-eye text-xl" />
        <i v-else class="pi pi-eye-slash text-xl" />
      </span>
    </div>

    <div class="flex items-center gap-4">
      <span class="text-sm">
        {{ !user ? 'Eazipay Reconciliation Value' : 'Reconciliation Value' }}
      </span>

      <!-- @click="toggle = !toggle" -->
      <div
        :class="[!user ? 'bg-[#0B332B]' : 'bg-[#292A29]']"
        class="rounded-full text-sm font-bold cursor-pointer w-fit py-[1.5px] px-2 flex items-center gap-1"
      >
        {{ value ? 'True' : 'False' }}
        <span class="flex-shrink-0">
          <img :src="value ? CheckActive : CheckOff" alt="" />
        </span>
      </div>
    </div>

    <span class="absolute top-0 left-0 z-[0]">
      <img src="../assets/top-image.svg?url" alt="" />
    </span>
    <span class="absolute bottom-0 right-0 z-[0]">
      <img src="../assets/bottom-image.svg?url" alt="" />
    </span>
    <span></span>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import EyeOpen from '@/assets/icons/eye-open.svg?url'
import EyeClose from '@/assets/icons/eye-close.svg?url'
import CheckActive from '../assets/check-active.svg?url'
import CheckOff from '../assets/check-off.svg?url'

import { ref } from 'vue'

import { helperFunctions } from '@/composable/helperFunctions'

const { formatAmount } = helperFunctions

const props = defineProps({
  user: {
    type: Boolean,
    default: false
  },
  amount: Number,
  value: Boolean
})

const show = ref(true)
const toggle = ref(true)
</script>

<style></style>
