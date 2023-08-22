<template>
    <div class="flex items-center gap-4 py-4 px-6  border rounded-2xl" :class="data.transactionType.toLowerCase()">
        <div class="w-1/12">
            <div class="header">Time</div>
            <div class="value">{{ dayjs(data.transactionDate).format('HH:MM') }}</div>
        </div>
        <div class="w-2/12">
            <div class="flex items-center gap-2">
                <div class="w-10 flex-shrink-0 h-10 rounded-full bg-gray-500"></div>
                <div>
                    <div class="header">Assistant Admin</div>
                    <div class="value">Tunde Kelani</div>
                </div>
            </div>
        </div>
        <div class="w-5/12">
            <div class="header">Description</div>
            <p class="value">{{ data.description }}</p>
        </div>
        <div class="w-2/12">
            <div class="header">{{ data.transactionType }}</div>
            <div class="amount value">{{ formatCurrency(data.amount) }}</div>
        </div>
        <div class="2/12">
            <div class="header">Balance</div>
            <div class="value">{{ formatCurrency(data.walletBalance) }}</div>
        </div>
    </div>
</template>

<script setup>
import { formatCurrency } from '@/utils/currency';
import dayjs from 'dayjs';

defineProps({
    data: {
        type: Object,
    }
})
</script>

<style lang="scss" scoped>
.debit {
    border: 1px solid #219653;

    .amount {
        color: #219653;
    }
}

.credit {
    border: 1px solid #EF4444;

    .amount {
        color: #EF4444;
    }
}

.header {
    color: #8D8E8D
}

.value {
    color: #292A29;
    letter-spacing: 0.25px;
}
</style>