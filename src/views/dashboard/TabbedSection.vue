<template>
    <TabGroup class="flex flex-col h-full">
        <div class="flex justify-center mb-8">
            <TabList class="flex">
                <Tab>Revenue</Tab>
                <Tab>Subscription</Tab>
                <Tab>Payroll/Loan</Tab>
                <Tab>Feedback</Tab>
                <Tab>Users</Tab>
            </TabList>
        </div>
        <TabPanels class="flex-1">
            <TabPanel class="tab-panel">
                <Revenue />
            </TabPanel>
            <TabPanel class="tab-panel">
                <Subscription />
            </TabPanel>
            <TabPanel class="tab-panel">
                <PayrollAndLoan />
            </TabPanel>
            <TabPanel class="tab-panel">
                <Feedback />
            </TabPanel>
            <TabPanel class="tab-panel">
                <Users />
            </TabPanel>
        </TabPanels>
    </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/components/Tabs'
import Feedback from './tabs/feedback/Feedback.vue';
import Revenue from './tabs/revenue/Revenue.vue';
import Subscription from './tabs/subscription/Subscription.vue';
import PayrollAndLoan from './tabs/payroll-and-loan/PayrollAndLoan.vue';
import Users from './tabs/users/Users.vue';

</script>

<style lang="scss" scoped>
.tab-panel {
    height: 100%;
}

.tab-panel>div {
    height: 100%;
}
</style>