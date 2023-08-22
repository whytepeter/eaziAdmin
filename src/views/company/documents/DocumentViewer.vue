<template>
  <div v-if="open" class="bg-black/75 fixed top-0 left-0 w-full h-full z-50 px-10 py-12">
    <div class="flex items-center mb-16">
      <div class="flex items-center gap-4">
        <button @click="$emit('close')">
          <ArrowLeftIcon />
        </button>

        <div class="flex items-center gap-2">
          <ImageFileIcon />
          <span class="text-white font-medium">International Passport</span>
        </div>
      </div>

      <div class="ml-auto actions flex items-center gap-4">
        <button>
          <DownloadIcon />
        </button>
        <button>
          <PrinterIcon />
        </button>
        <button>
          <ShareIcon />
        </button>
      </div>
    </div>

    <div>
      <div class="w-128 mx-auto">
        <div class="w-full mb-4 h-64 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DownloadIcon from '@/assets/icons/download-with-arrow.svg'
import ShareIcon from '@/assets/icons/share.svg'
import PrinterIcon from '@/assets/icons/printer.svg'
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg'

import ImageFileIcon from '@/assets/icons/image-file.svg'

defineEmits(['close'])

defineProps({
  open: Boolean
})
</script>

<style lang="scss" scoped></style>
