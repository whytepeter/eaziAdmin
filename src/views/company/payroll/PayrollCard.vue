<template>
    <div class="card payroll-card" :class="theme">
        <div class="flex items-center justify-between mb-3">
            <h3 class="text">{{ title }}</h3>
            <div class="text">February 5, 2023</div>
        </div>
        <div class="flex gap-2">
            <div class="info-item w-4/12">
                <div class="label">No. Payroll</div>
                <div class="value">112</div>
            </div>
            <div class="info-item w-8/12">
                <div class="label">Amount</div>
                <div class="value flex gap-2 items-center">
                    <div>
                        <NairaIcon class="" />
                    </div>
                    135,067,789.00
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NairaIcon from "@/assets/icons/naira-resizable.svg"

defineProps({
    theme: String,
    title: String,
    date: String
})

</script>

<style lang="scss" scoped>
.payroll-card {
    background: #F2F1F1;
    border: 1px solid #E7E8E7;
    padding: 15px 20px 20px;

    .text {
        color: #515251;
        letter-spacing: 0.25px;
        font-weight: 400;
        font-size: 16px;
    }

    .info-item {
        border-radius: 8px;
        padding: 10px;
        background: white;
        border: 1px solid #E7E8E7;

        .label {
            margin-bottom: 4px;
        }

        .value {
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
        }
    }

    &.green {
        background-color: #11453B;
        color: white;

        .text {
            color: white;
        }

        .info-item {
            background: #0B372F;
            border: 1px solid #17564A;
        }

    }


}
</style>