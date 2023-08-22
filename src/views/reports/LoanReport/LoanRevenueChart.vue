<template>
  <div class="card card-white">
    <div class="flex items-center justify-between mb-4">
      <div>Loan Revenue</div>
      <div>
        <DurationFilter />
      </div>
    </div>
    <div class="text-center font-bold mb-6">N15,789,067,789.00</div>
    <div class="">
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
  const { datasets, labels } = $props.data;
  return {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: datasets,
        borderColor: '#11453B',
        tension: 0.4,
        fill: true,
        backgroundColor: linearGradientBackground([
          ['#11453B', 0],
          ['#D9EBCD', 0.5]
        ])
      }
    ],
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
