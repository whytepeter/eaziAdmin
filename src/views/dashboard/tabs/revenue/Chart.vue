<template>
    <div class="h-[240px]">
        <Line :options="loanDisbursedChart.options" :data="loanDisbursedChart.data" />
    </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { linearGradientBackground } from '@/utils/chart';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const loanDisbursedChart = {
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40, 120, 70, 88, 90, 51],
                borderColor: '#11453B',
                tension: 0.4,
                fill: true,
                radius: 0,
                borderWidth: 2,
                backgroundColor: linearGradientBackground([['#11453B', 0], ['#4D8177', .5]])
            }
        ],
        fill: true,
        backgroundColor: 'green'
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
}

</script>

<style lang="scss" scoped></style>