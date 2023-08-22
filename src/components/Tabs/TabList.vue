<template>
    <div class="tablist-wrapper">
        <TabList as="div" :class="['tablist', `tablist-${props.variant}`]" v-bind="$attrs">
            <slot />
        </TabList>

    </div>
</template>

<script setup>
import { TabList } from '@headlessui/vue'

const props = defineProps({
    variant: {
        type: String, // ['pill', 'underline']
        default: 'pill'
    }
})

</script>

<style lang="scss">
.tablist-wrapper {
    display: flex;
    justify-content: center;
}

.tablist-pill {

    display: flex;
    border: 1.15042px solid #E7E8E7;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 8px;
    gap: 10px;
    overflow: auto;


    button[role='tab'] {
        outline: none;
        flex: 1;
        background: #F2F1F1;
        border-radius: 8px;
        padding: 6px 8px;
        letter-spacing: 0.25px;
        font-size: 14px;
        white-space: nowrap;

        &[aria-selected='true'] {
            background: #11453B;
            color: white;
            font-weight: 500;
            box-shadow: 0px 5.06963px 8px -3.80222px rgba(24, 39, 75, 0.12), 0px 8.87185px 20px -2.53481px rgba(24, 39, 75, 0.12);
        }

    }
}

.tablist-underline {

    display: flex;
    gap: 24px;
    overflow: auto;


    button[role='tab'] {
        outline: none;
        flex: 1;
        padding: 6px 0px 3px;
        font-size: 14px;
        white-space: nowrap;
        border-bottom: 3px solid transparent;

        &[aria-selected='true'] {
            border-bottom: 3px solid #494949;
        }

    }
}
</style>