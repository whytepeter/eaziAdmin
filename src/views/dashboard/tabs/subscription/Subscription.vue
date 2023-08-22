<template>
    <ChartCard title="Subscription Packages">
        <div v-if="companySubs">
            <TabGroup class="flex flex-col h-full">
                <div class="flex justify-center mb-8">
                    <TabList variant="underline">
                        <Tab v-for="tabname, index of tabNames" :key="`subscription-tab-${index}`">{{ tabname }}</Tab>
                    </TabList>
                </div>
                <TabPanels class="flex-1">

                    <TabPanel v-for="tabname, index of tabNames" :key="`subscription-tabpanel-${index}`" class="tab-panel">
                        <div class="text-xl text-center font-bold mb-4">{{
                            formatCurrency(tabs[tabname].totalBasePackagePrice) }}</div>
                        <Chart :data="tabs[tabname].data" />
                    </TabPanel>

                </TabPanels>
            </TabGroup>
        </div>
    </ChartCard>
</template>


<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/components/Tabs'
import { useQuery } from "@/api/useQuery"
import ChartCard from '../../charts/ChartCard.vue';
import { computed } from "vue"
import Chart from "./Chart.vue"
import { formatCurrency } from '@/utils/currency'

const { data: companySubs } = useQuery('GetCompanySubByDuration', {
    input: {
        "month": true,
        "year": 2023
    }
})

const groupSubscriptionsByPackageName = (subscriptions) => {
    let group = {}

    for (let sub of subscriptions) {
        let { packageName, basePackagePrice } = sub
        if (!group[packageName]) {
            group[packageName] = {
                data: [],
                totalBasePackagePrice: 0
            }
        }
        group[packageName].data.push(
            sub
        )
        group[packageName].totalBasePackagePrice += basePackagePrice
    }
    return group
}

const tabs = computed(() => {
    if (companySubs.value) {
        let { subscriptions } = companySubs.value
        let group = groupSubscriptionsByPackageName(subscriptions)
        return group
    }
    return null
})

const tabNames = computed(() => {
    if (tabs.value) {
        return Object.keys(tabs.value)
    }
    return []
})


</script>

<style lang="scss" scoped></style>