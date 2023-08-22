<template>
    <div>
        <div class="flex gap-4 mb-8 overflow-auto">
            <button class="frequency-btn" v-for="frequency of frequencies" :key="frequency.frequency"
                :class="{ active: activeFrequency === frequency.frequency }"
                @click="() => (activeFrequency = frequency.frequency)">
                <div class="frequency-btn__frequency">{{ frequency.frequency }}</div>
                <div class="frequency-btn__amount">{{ formatCurrency(frequency.amount) }}</div>
            </button>
        </div>

        <div class="h-[250px] ">
            <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
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
import { computed } from 'vue';
import { formatCurrency } from '@/utils/currency';

const props = defineProps({
    data: Object,
})

const activeFrequency = ref('daily')


const frequencies = computed(() => {
    const {
        averageDailyAmount,
        averageMonthlyAmount,
        averageYearlyAmount
    } = props.data

    return [
        { frequency: 'daily', amount: averageDailyAmount },
        { frequency: 'monthly', amount: averageMonthlyAmount },
        { frequency: 'yearly', amount: averageYearlyAmount }
    ]
})

const chartData = computed(() => {
    const { weekly, yearly, monthly } = props.data

    let data = {
        'daily': weekly?.byDays,
        'monthly': monthly?.byMonths,
        'yearly': yearly?.byYears,
    }[activeFrequency.value]

    const shortenMonthAndDay = (label) => {
        if (/^\d+$/.test(label)) {
            // label is a year, don't shorten
            return label
        }
        return label.slice(0, 3);
    }

    if (data) {
        const labels = Object.keys(data).map(shortenMonthAndDay)
        const datasets = Object.values(data)
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

<style lang="scss" scoped>
.frequency-btn {
    flex: 1;
    border: 1px solid #e7e8e7;
    padding: 10px 20px;
    opacity: 0.6;
    border-radius: 8px;
    text-align: left;

    &.active {
        opacity: 1;
        background-color: #f2f1f1;
    }

    &__frequency {
        @apply text-sm mb-1 capitalize;
    }

    &__amount {
        font-size: 18px;
        line-height: 24px;
        @apply text-[#444444];
        font-weight: bold;
    }
}
</style>