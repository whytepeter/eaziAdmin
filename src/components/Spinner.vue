<template>
    <div class="spinner"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.spinner {
    height: 25px;
    width: 25px;
    border: 1.4px solid green;
    border-top-color: transparent;
    animation: spin 0.35s linear infinite;
    border-radius: 99px;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>