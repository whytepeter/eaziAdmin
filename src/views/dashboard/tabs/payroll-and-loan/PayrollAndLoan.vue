<template>
    <ChartCard title="Number of Payrolls and Loans">
        <TabGroup class="flex flex-col h-full">
            <div class="flex justify-center mb-8">
                <TabList variant="underline">
                    <Tab>Payroll</Tab>
                    <Tab>Loans</Tab>
                </TabList>
            </div>
            <TabPanels class="flex-1">
                <TabPanel class="tab-panel">
                    <div>
                        <div class="flex justify-center mb-2">
                            <div>No.: <span class="font-bold">{{ totalCount }}</span></div>
                        </div>

                        <div v-if="chartData" class="h-[250px]">
                            <Bar :data="chartData" :options="chartOptions" />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel class="tab-panel">

                    <div class="bg-gray-200 h-[250px] rounded-sm">
                    </div>

                </TabPanel>
            </TabPanels>
        </TabGroup>

    </ChartCard>
</template>


<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/components/Tabs'
import { useQuery } from "@/api/useQuery"
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
import ChartCard from '../../charts/ChartCard.vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const { data: groupPayroll } = useQuery('GroupPayroll', {
    input: {
        "month": true,
        "year": 2023
    }
})

const chartData = computed(() => {
    if (groupPayroll.value) {
        let labels = []
        let datasets = []
        let { paymentRecords } = groupPayroll.value
        for (let { monthName, count } of paymentRecords) {
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
    }
    return null
})

const totalCount = computed(() => {
    if (groupPayroll.value) {
        let { paymentRecords } = groupPayroll.value
        return paymentRecords.reduce((acc, record) => acc += record.count, 0)
    }
    return 0
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