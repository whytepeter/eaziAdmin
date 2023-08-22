<template>
    <div class="card card-mint">
        <h3 class="mb-6 card-title">Number of Registered Account</h3>

        <div class="grid place-items-center mb-4">
            <div class="w-28 h-28 rounded-full border-4 border-green-500 grid place-items-center">
                <div class="font-semibold text-xl">
                    {{ totalUsers }}
                </div>

            </div>
        </div>

        <div class="flex justify-between">
            <div class="flex  gap-1">
                <span class="w-2 h-2 inline-block mt-2  rounded-full bg-[#EA4E4B]"></span>
                <div>
                    Personal
                    <div class="font-semibold -mt-1">{{ chartData.personal }}</div>
                </div>
            </div>
            <div class="flex  gap-1">
                <span class="w-2 h-2 rounded-full mt-2 bg-[#11453B]"></span>
                <div>
                    Company
                    <div class="font-semibold   -mt-1">{{ chartData.company }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    data: {
        type: Object
    }
})
const chartData = computed(() => {
    if (props.data) {
        let d = {}
        props.data.users.forEach(user => {
            let { registrationType, accountsCount } = user
            registrationType = registrationType.toLowerCase()
            d[registrationType] = accountsCount
        })
        return d;
    }
    return {}
})

const totalUsers = computed(() => {
    if (props.data) {
        return props.data.total
    }
    return null
})
</script>

<style lang="scss" scoped>
.title {
    color: #515251;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
}
</style>