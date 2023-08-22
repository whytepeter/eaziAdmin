<template>
  <div
    v-bind="$attrs"
    class="totalPayrollGradient relative overflow-hidden w-full bg-white border border-white text-white font-bold text-xl md:text-2xl text-left px-4 py-10 md:px-6 xl:px-8 rounded-2xl shadow-lg flex flex-col"
  >
    <h2
      class="z-10 mb-1"
      :class="text == 'small' ? 'text-sm' : ''"
      v-if="title"
    >
      {{ title }}
    </h2>
    <h2 class="z-10" v-if="amount">
      {{ formatAmount(parseInt(amount)) }}
    </h2>
    <!-- <div class="mt-6 mb-8 flex gap-2 items-center z-10">
                <div class="w-20 xl:w-24" v-for="(cash, i) in 3" :key="i">
                  <img src="@/assets/img/cash.png" alt="" />
                </div>
              </div> -->

    <div
      :class="
        showAll
          ? 'w-20 h-20 -bottom-20 left-24'
          : 'w-36 h-36 -bottom-24 left-24'
      "
      style="background-color: #3f3a95"
      class="rounded-full absolute"
    ></div>
    <div
      :class="
        showAll
          ? 'w-36 h-36 -bottom-24 -right-10'
          : 'w-72 h-72 -bottom-36 -right-10'
      "
      style="background-color: #68e77a"
      class="rounded-full absolute -z-0"
    ></div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { helperFunctions } from "@/composable/helperFunctions";
const { formatAmount } = helperFunctions;
const props = defineProps({
  text: {
    type: [Boolean, String],
    default: false,
  },
  title: {
    type: [Boolean, String],
    default: false,
  },
  amount: {
    type: [Boolean, Number, String],
    default: 0,
  },
});
</script>

<style>
.totalPayrollGradient {
  background: linear-gradient(93.11deg, #004da6 14.05%, #059ee8 101.64%);
}
</style>
