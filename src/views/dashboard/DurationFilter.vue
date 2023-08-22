<template>
    <div class="relative">
        <Listbox :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
            <ListboxButton class="flex items-center dropdown-btn">
                <div class="flex items-center gap-1 m-2">
                    <div class="label">
                        <span>
                            <SettingsIcon class="w-4" />
                        </span>
                        <span>Duration</span>
                    </div>

                    <div class="value">{{ modelValue }}</div>
                </div>
                <span class="">
                    <ArrowRightIcon />
                </span>
            </ListboxButton>
            <ListboxOptions class="absolute bg-white rounded-md shadow-md overflow-hidden w-32">
                <ListboxOption v-for="opt, index in options" :key="`duration-filter-option-${index}`" :value="opt"
                    class="px-4 py-1 hover:bg-gray-200 cursor-pointer  capitalize text-sm">
                    {{ opt }}
                </ListboxOption>
            </ListboxOptions>
        </Listbox>
    </div>
</template>

<script setup>
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue';
import ArrowRightIcon from '../../components/icons/ArrowRightIcon.vue';


const options = [
    'week',
    'month',
    'year',
    'custom'
]
defineProps({
    modelValue: String,
})

defineEmits(['update:modelValue'])

</script>

<style lang="scss" scoped>
.dropdown-btn {
    font-size: 14px;
}

.label {
    color: #8D8E8D;
    display: flex;
    align-items: center;
    gap: 4px;
}

.value {
    color: #515251;
    text-transform: capitalize;
    font-weight: 500;
}
</style>
