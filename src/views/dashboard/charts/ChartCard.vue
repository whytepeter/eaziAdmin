<template>
    <div class="chart-card card">
        <header class="flex items-center justify-between mb-4">
            <div class="card-title">

                <slot name="title">
                    {{ title }}

                </slot>
            </div>
            <div>
                <slot name="headerRight">
                    <duration-filter />
                </slot>
            </div>
        </header>
        <div class="">
            <slot />
        </div>
    </div>
</template>
  
<script setup>
import DurationFilter from '../DurationFilter.vue';
defineProps({
    title: String
})

</script>
  
<style lang="scss" scoped>
.chart-card {
    border: 1px solid #E7E8E7;
    border-radius: 16px;
    padding: 30px 30px 36px;
    background: white;
}
</style>