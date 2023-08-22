<template>
    <TabGroup as="div" v-bind="$attrs">
        <slot />
    </TabGroup>
</template>

<script setup>
import { TabGroup } from '@headlessui/vue'
</script>
