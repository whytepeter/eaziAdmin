<template>
  <div
    style="box-shadow: 0px 9px 18px rgba(170, 170, 170, 0.15)"
    class="w-full bg-white text-dark-800 overflow-hidden relative flex flex-col justify-between gap-5 rounded-3xl py-6 pb-8"
  >
    <div class="flex items-center justify-between gap-3 w-full px-6">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <img :src="type == 'inflow' ? InflowIcon : OutflowIcon" alt="" />
        </div>

        <div class="leading-5">
          <span class="text-sm">{{ type == 'inflow' ? 'Inflow' : 'Outflow' }}</span>
          <h3>
            {{ formatAmount(amount) }}
          </h3>
        </div>
      </div>

      <div class="flex flex-col items-center text-xs text-dark-700">
        <i
          :class="
            type == 'outflow' ? 'text-error fas fa-arrow-up' : 'text-success fas fa-arrow-down'
          "
        ></i>
        <span :class="type == 'outflow' ? 'text-error' : 'text-success'" class="font-semibold">
          {{ value }}</span
        >
        <span>{{ date }}</span>
      </div>
    </div>

    <div class="w-[120%] -ml-2">
      <img v-if="type == 'inflow'" :src="InflowChart" alt="" class="object-cover w-full" />
      <img v-else :src="OutflowChart" alt="" class="object-cover w-full" />
    </div>
  </div>
</template>

<script setup>
import InflowIcon from '../assets/inflowIcon.svg?url'
import OutflowIcon from '../assets/outflowIcon.svg?url'
import InflowChart from '../assets/inflowChart.svg?url'
import OutflowChart from '../assets/outflowChart.svg?url'
import { helperFunctions } from '@/composable/helperFunctions'

const { formatAmount } = helperFunctions

const props = defineProps({
  type: {
    type: String,
    default: 'inflow'
  },

  amount: Number,
  value: Number,
  date: String
})
</script>

<style></style>
