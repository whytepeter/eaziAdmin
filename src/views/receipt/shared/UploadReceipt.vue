<template>
  <easiModal v-if="isOpen" persistence @close="$emit('close')">
    <template #header>
      <h2 class="font-medium">Upload Receipt</h2>
    </template>

    <div class="pt-2 pb-4 flex flex-col gap-4 sm:gap-6">
      <div class="mx-4 sm:mx-6">
        <easiUpload
          title="Upload  Receipt"
          @fileUrl="receipt = $event"
          :error="errorRules.receipt"
        />
      </div>

      <hr class="mt-2 mb-3 border border-dividerColor text-dividerColor" />

      <div class="mx-4 sm:mx-6 grid grid-cols-2 gap-4 items-center place-content-center">
        <easiButton @click="$emit('close')" variant="outlined" block>Cancel</easiButton>
        <easiButton @click="submit" block>Upload</easiButton>
      </div>
    </div>
  </easiModal>
</template>

<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
defineEmits(['close'])

const receipt = ref(null)

const errorRules = reactive({
  receipt: false
})

const submit = () => {
  if (receipt.value) {
    console.log(args)
  } else {
    errorRules.receipt = 'Please select a receipt file'
  }
}
</script>

<style></style>
