<template>
    <div class="card card-white chart-card">
        <div class="flex items-center justify-between w-full ">
            <div class="card-title">Total Revenue</div>
            <DurationFilter v-model="durationFilter" />
        </div>
        <div class="text-center mb-4 font-bold text-[#219653]">
            {{ formatCurrency(companyRevenue?.total) }}
        </div>
        <div v-if="chartData">
            <Line :options="chartOptions" :data="chartData" />
        </div>
    </div>
</template>

<script setup>
import DurationFilter from '@/views/dashboard/DurationFilter.vue';
import { ref, computed } from 'vue';
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from 'chart.js'
import { useQuery } from '@/api/useQuery';
import { formatCurrency } from '@/utils/currency';
ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement, Filler)
import { linearGradientBackground } from '@/utils/chart';
import dayjs from 'dayjs';

const $props = defineProps({
    companyId: String
})

const durationFilter = ref('')

const { data: companyRevenue } = useQuery('GetRevenueFromCompany', {
    input: {
        companyId: $props.companyId
    }
})

const chartData = computed(() => {
    if (companyRevenue.value) {
        const { revenueData } = companyRevenue.value
        const labels = []
        const datasets = []
        revenueData.forEach(each => {
            let { _id, total } = each
            let label = dayjs(_id).format('MMM')
            labels.push(label)
            datasets.push(total)
        })

        return {

            labels: labels,
            datasets: [
                {
                    label: 'My First Dataset',
                    data: datasets,
                    borderColor: '#11453B',
                    tension: 0.4,
                    borderWidth: 2,
                    fill: true,
                    pointBorderColor: '#FFFFFF',
                    pointBackgroundColor: '#11453B',
                    radius: 4,
                    backgroundColor: linearGradientBackground([
                        ['#54BAA6', 0],
                        ['#EAF9F6', 0.5],
                        ['#FFFFFF', 1]
                    ]),
                }
            ],


        }
    }
    return null
})

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
}

</script>

<style lang="scss" scoped></style>

