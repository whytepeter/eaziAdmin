<template>
  <div>
    <div class="w-full border-b border-dark-300 flex items-center gap-2">
      <div
        v-for="(item, i) in tabItems"
        @click="setActive(item)"
        :key="`tabs-${i}`"
        :class="[
          activeTab == item.title ? 'text-primary border-b-2 border-primary' : 'text-dark-500'
        ]"
        class="text-sm -mb-[1px] py-1 px-4 cursor-pointer flex items-center gap-1"
      >
        {{ item.title }}

        <span
          :class="[activeTab == item.title ? 'text-primary' : 'text-dark-500']"
          class="text-xs bg-[#F2F1F1] p-1 rounded-lg"
        >
          {{ item.value }}
        </span>
      </div>
    </div>
    <easiLineLoarder v-if="loading" class="-mt-[1px]" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  tabItems: {
    type: Array,
    default: () => []
  },

  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['onSetActive'])
const activeTab = ref('')

onMounted(() => {
  if (activeTab.value == '') {
    activeTab.value = props.tabItems[0].title
  }
})

const setActive = (arg) => {
  activeTab.value = arg.title
  emit('onSetActive', arg)
}
</script>

<style></style>
