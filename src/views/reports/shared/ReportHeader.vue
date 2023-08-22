<template>
  <header class="flex items-center justify-between mb-8">
    <h3 class="font-normal">{{ title }}</h3>
    <div class="flex items-center gap-4">
      <slot name="download">
        <easiButton2 outlined
          >Download
          <template #rightIcon>
            <DownloadIcon />
          </template>
        </easiButton2>
      </slot>

      <easiButton2 outlined=""
        >share
        <template #rightIcon>
          <ShareIcon />
        </template>
      </easiButton2>
      <easiButton2 outlined
        >print
        <template #rightIcon>
          <PrintIcon />
        </template>
      </easiButton2>
    </div>
  </header>
</template>

<script setup>
import DownloadIcon from '@/assets/icons/download.svg'
import ShareIcon from '@/assets/icons/share.svg'
import PrintIcon from '@/assets/icons/printer.svg'
defineProps({
  title: String
})
</script>

<style lang="scss" scoped></style>
