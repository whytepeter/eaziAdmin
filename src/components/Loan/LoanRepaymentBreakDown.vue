<template>
  <div>
    <div
      @click="showBreakDown = !showBreakDown"
      class="bg-newGrey p-4 text-sm rounded-lg flex items-center justify-between cursor-pointer"
    >
      Repayment Break Down
      <i
        :class="[showBreakDown ? 'fas fa-angle-right' : 'fas fa-angle-down']"
        class="text-dark-600"
      ></i>
    </div>
    <div v-if="showBreakDown" class="grid grid-cols-6 gap-4 mt-2">
      <div
        :class="[
          loan && loan.repaymentBreakDown && loan.repaymentBreakDown.length === 1
            ? 'col-span-6'
            : 'col-span-6 md:col-span-3'
        ]"
        class="flex flex-col gap-2 py-2"
        v-for="(stage, i) in loan && loan.repaymentBreakDown"
        :key="i"
      >
        <div class="text-center text-sm font-medium flex font-medium">
          Stage {{ i + 1 }}/{{ loan.repaymentBreakDown.length }}
        </div>

        <!-- //Interest// -->
        <div class="flex items-center justify-between text-xs sm:text-sm">
          <span class="flex items-center gap-2">
            <i class="fas fa-circle text-dark-100"></i>
            <span class="capitalize">Interest</span>
          </span>
          <span>
            {{ stage.intrest }}
          </span>
        </div>
        <!-- //Total Amount Due// -->
        <div class="flex items-center justify-between text-xs sm:text-sm">
          <span class="flex items-center gap-2">
            <i class="fas fa-circle text-dark-100"></i>
            <span class="capitalize">Total Amount Due</span>
          </span>
          <span>
            {{ formatAmount(stage.totalAmount) }}
          </span>
        </div>
        <!-- //Due Date// -->
        <div class="flex items-center justify-between text-xs sm:text-sm">
          <span class="flex items-center gap-2">
            <i class="fas fa-circle text-dark-100"></i>
            <span class="capitalize">Due Date</span>
          </span>
          <span>
            {{ formatDate(stage.dueDate) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { helperFunctions } from '@/composable/helperFunctions'
import { ref } from 'vue'

const { formatAmount, formatDate } = helperFunctions

const props = defineProps({
  loan: {
    type: Object,
    default: () => ({})
  }
})

const showBreakDown = ref(false)
</script>

<style></style>
