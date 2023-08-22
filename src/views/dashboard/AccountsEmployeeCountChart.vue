<template>
  <div class="card card-mint">
    <div class="flex items-center" v-if="data">
      <div>
        <div class="card-title">No. Accounts</div>
        <div class="count">{{ totalBusinessAccountByMonth }}</div>
      </div>
      <div class="sep self-stretch"></div>
      <div>
        <div class="card-title">No. Employees</div>
        <div class="count">{{ data.employeeTotal }}</div>
      </div>
    </div>

    <div class="flex  mt-8 justify-between items-center">
      <button @click="prevMonth">
        <ChevronLeftIcon />
      </button>
      <div class="px-2">{{ months[activeMonthIndex] }}</div>
      <button @click="nextMonth">
        <ChevronRightIcon />
      </button>
    </div>
  </div>
</template>

<script setup>
import ChevronRightIcon from "@/assets/icons/chevron-right.svg"
import ChevronLeftIcon from "@/assets/icons/chevron-left.svg"
import { computed, ref } from "vue"


const $props = defineProps({
  data: {
    type: Object,
  }
})

// Todo: exports to an utility
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const activeMonthIndex = ref(0)

const totalBusinessAccountByMonth = computed(() => {
  if ($props.data) {
    let { companiesByMonth } = $props.data;
    console.log('companiesby month --', companiesByMonth)
    let monthIndex = activeMonthIndex.value + 1
    return companiesByMonth[monthIndex]?.count ?? 0
  }
  return null

})

const prevMonth = () => {
  if (activeMonthIndex.value <= 0) {
    activeMonthIndex.value = months.length - 1
  } else {
    activeMonthIndex.value--
  }
}

const nextMonth = () => {
  if (activeMonthIndex.value >= months.length - 1) {
    activeMonthIndex.value = 0
  } else {
    activeMonthIndex.value++
  }
}

</script>

<style lang="scss" scoped>
.sep {
  border-right: 1px solid #8D8E8D;
  margin-right: 20px;
  margin-left: 20px;
}

.card-title {
  margin-bottom: 4px;
}

.count {
  color: #292A29;
  font-weight: 700;
  font-size: 18px;
}
</style>