<template>
    <div>
        <div class="mb-2">
            <RouterLink :to="{ name: 'Dashboard' }">
                Back
            </RouterLink>
        </div>
        <Loading :data="recentTransactions" :error="false">
            <TransactionsTable :data="recentTransactions" />
        </Loading>
    </div>
</template>

<script setup>
import { useQuery } from "@/api/useQuery"
import Loading from "@/components/Loading.vue";
import TransactionsTable from "./TransactionsTable.vue"

const { data: recentTransactions } = useQuery('RecentTransactions')

</script>

<style lang="scss" scoped></style>