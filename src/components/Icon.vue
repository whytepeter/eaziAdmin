<template>
    <div>
        <h3>hellow</h3>
        <component :is="iconComponent" />

    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    name: String
})
const iconComponent = computed(() => {
    return () => import(`@/assets/icons/${props.name}.svg`)
})
console.log({ iconComponent })
</script>

<style></style>