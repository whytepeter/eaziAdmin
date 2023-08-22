<template>
    <div class="h-[240px]">
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
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
import { computed } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
    data: {
        Array
    }
})

const chartData = computed(() => {
    let labels = []
    let datasets = []
    for (let { monthName, count } of props.data) {
        labels.push(monthName)
        datasets.push(count)
    }
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
  