<template>
  <div class="card card-white">
    <div class="flex items-center justify-between mb-4">
      <div class="card-title">Total Payroll processed</div>
      <div>
        <DurationFilter />
      </div>
    </div>
    <div class="text-center font-bold text-xl mb-4" v-if="total">
      <span class="mr-6">{{ total[0].payrollProcessed }}</span>
      <span>
        {{ formatCurrency(total[0].totalSalary) }}
      </span>
    </div>
    <div v-if="payrollChartData" class="">
      <Bar id="my-chart-id" :options="payrollChartOptions" :data="payrollChartData" />
    </div>
  </div>
</template>

<script setup>
import DurationFilter from '@/views/dashboard/DurationFilter.vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { computed } from 'vue'
import { formatCurrency } from '@/utils/currency'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  data: Object,
  total: Object,
})


const payrollChartData = computed(() => {
  if (props.data) {
    let labels = [],
      datasets = [];

    props.data.forEach(({ total, month }) => {
      labels.push(month)
      datasets.push(total)
    })

    return {
      labels: labels,
      datasets: [
        {
          data: datasets,
          backgroundColor: ['#11453B']
        }
      ],
      borderColor: 'green'
    }
  }
  return null

})

const payrollChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
