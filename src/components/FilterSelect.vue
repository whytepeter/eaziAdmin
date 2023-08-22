<template>
    <button class="menu-btn">Filter
        <FilterIcon />
    </button>
</template>

<script setup>
import FilterIcon from "@/components/icons/FilterIcon.vue"
</script>

<style lang="scss" scoped>
.menu-btn {
    height: 40px;
    padding: 0 18px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #F2F1F1;
}
</style>