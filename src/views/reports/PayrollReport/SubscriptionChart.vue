<template>
    <div v-if="chartData">
        <Doughnut :data="chartData" :options="chartOptions" :plugins="chartPlugins" />
    </div>
</template>
<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { computed } from 'vue'

const props = defineProps({
    data: {
        type: Object,

    }
})

const chartPlugins = [ChartDataLabels]

ChartJS.register(ArcElement, Tooltip, Legend)


const chartData = computed(() => {
    let __colors = ['#396F64', '#B4A572', '#8D8E8D', '#BFA29E', '#11453B']

    const randomColor = (index) => {
        if (index > __colors.length - 1) {
            index = Math.floor(Math.random() * __colors.length)
        }
        return __colors[index]
    }

    let datasets = []
    let labels = []
    let colors = []


    if (props.data) {
        props.data.breakdown.forEach(({ percentage, subscription }, index) => {
            labels.push(subscription)
            datasets.push(percentage)
            colors.push(
                randomColor(index)
            )
        })



        return {
            labels: labels,
            datasets: [
                {
                    backgroundColor: colors,
                    data: datasets
                }
            ]
        }

    }
    return null
})

const chartOptions = computed(() => {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right'

            },
            datalabels: {
                color: 'white',
                font: {
                    size: 16
                },
                formatter(value) {
                    return `${value}%`
                }
            }
        }
    }
})
</script>


<style lang="scss" scoped></style>