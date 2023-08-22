<template>
  <div class="card card-white">
    <h3 class="chart-title mb-4">Average Transaction Frequency</h3>
    <div class="gray-block mb-4">
      <div class="frequency">{{ frequency }}</div>
      <div class="amount">{{ amount }}</div>
    </div>
    <Bar :data="data" :options="chartOptions" />
  </div>
</template>

<script setup>
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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

defineProps({
  amount: String,
  frequency: String,
  chartTitle: String,
  data: Object
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-title {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: #444444;
}

.gray-block {
  border: 1px solid #e7e8e7;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: left;
  background-color: #f2f1f1;

  .frequency {
    @apply text-sm mb-1 capitalize;
  }

  .amount {
    font-size: 18px;
    line-height: 24px;
    @apply text-[#444444];
    font-weight: bold;
  }
}
</style>
