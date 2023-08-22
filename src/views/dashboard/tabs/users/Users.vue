<template>
    <div>
        <ChartCard title="Number of Users and referrals">
            <TabGroup class="flex flex-col h-full">
                <div class="flex justify-center mb-8">
                    <TabList variant="underline">
                        <Tab>Users</Tab>
                        <Tab>Client Referrals</Tab>
                    </TabList>
                </div>
                <TabPanels class="flex-1">
                    <TabPanel class="tab-panel">
                        <div v-if="data">
                            <div class="text-2xl flex justify-center gap-10 text-center mb-2">
                                <div>
                                    New: <span class="font-bold">{{ data.newUsersLength }}</span>
                                </div>

                                <div>
                                    Returning: <span class="font-bold">{{ data.returningUsersLength }}</span>
                                </div>

                            </div>
                            <div class="h-[220px]">
                                <Line :options="chartOptions" :data="chartData" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel class="tab-panel">
                        <div class="bg-gray-200 rounded-md h-[220px]" />
                    </TabPanel>

                </TabPanels>
            </TabGroup>
        </ChartCard>
    </div>
</template>


<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/components/Tabs'
import { useQuery } from "@/api/useQuery"
import ChartCard from '../../charts/ChartCard.vue';
import { computed } from 'vue';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const { data } = useQuery('GroupReturningAndNew', {
    input: {
        "month": 1,
        "year": 2023
    }
})

const chartData = computed(() => {
    if (data.value) {
        let { newUsers, returningUsers } = data.value;
        let labels = [];

        let newUsersDatasets = []
        let returningUsersDatasets = []

        for (let user of newUsers) {
            let { day, count } = user
            labels.push(day)
            newUsersDatasets.push(count)
        }

        for (let user of returningUsers) {
            let { count } = user
            returningUsersDatasets.push(count)
        }

        console.log({ newUsersDatasets, returningUsersDatasets })


        return {

            labels: labels,
            datasets: [
                {
                    label: 'New users',
                    data: newUsersDatasets,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.4,
                    backgroundColor: 'green',

                },
                {
                    label: 'Returning Users',
                    data: returningUsers,
                    borderColor: 'rgb(55, 55, 55)',
                    tension: 0.4,
                    backgroundColor: 'gray'
                }
            ],
            fill: true,
            backgroundColor: 'green'
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

<style lang="scss" scoped></style>