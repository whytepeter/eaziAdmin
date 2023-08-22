<template>
  <div class="card card-white">
    <div class="flex items-center justify-between mb-4">
      <div>Loan Disbursed</div>
      <div>
        <DurationFilter />
      </div>
    </div>
    <div class="text-center font-bold mb-6">N15,789,067,789.00</div>
    <div>
      <Line :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>

<script setup>
import DurationFilter from '@/views/dashboard/DurationFilter.vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { computed } from 'vue'
import { linearGradientBackground } from '@/utils/chart'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const $props = defineProps({
  data: Object
})

const chartData = computed(() => {
  const { datasets, labels } = $props.data
  return {
    labels: labels,
    datasets: [
      {
        label: 'Loan Disbursed',
        data: datasets,
        borderColor: '#EA4E4B',
        tension: 0.4,
        fill: true,
        backgroundColor: linearGradientBackground([
          ['#EA4E4B', 0],
          ['#F5D5D2', 0.5],
        ])
      }
    ],
    fill: true,
    backgroundColor: 'green'
  }
})

const chartOptions = {
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
