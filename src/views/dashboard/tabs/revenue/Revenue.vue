<template>
    <ChartCard title="Total Revenue">
        <TabGroup as="div" class="flex flex-col h-full">
            <div class="flex justify-center mb-8">
                <TabList class="flex" variant="underline">
                    <Tab>All</Tab>
                    <Tab>Loans</Tab>
                    <Tab>Subscription</Tab>
                    <Tab>Advisory</Tab>
                    <Tab>Invoice</Tab>
                </TabList>
            </div>
            <TabPanels class="flex-1">
                <div class="text-xl font-bold mb-4 text-center text-primaryDark">15,789,067,789.00</div>
                <TabPanel class="tab-panel">
                    <Chart />
                </TabPanel>
                <TabPanel class="tab-panel">
                    <Chart />
                </TabPanel>
                <TabPanel class="tab-panel">
                    <Chart />
                </TabPanel>
                <TabPanel class="tab-panel">
                    <Chart />
                </TabPanel>
                <TabPanel class="tab-panel">
                    <Chart />
                </TabPanel>
                <TabPanel class="tab-panel">
                    <Chart />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </ChartCard>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/components/Tabs'
import Chart from "./Chart.vue"
import ChartCard from '../../charts/ChartCard.vue';
</script>

<style lang="scss" scoped></style>