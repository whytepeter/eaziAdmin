<template>
  <div>
    <header class="flex flex-wrap gap-4 items-center justify-between mb-8">
      <h3 class="font-normal">Documents</h3>
      <div class="flex items-center gap-4">
        <easiButton2 outlined>
          <template #default>Download </template>
          <template #rightIcon>
            <DownloadIcon />
          </template>
        </easiButton2>
        <easiButton2 outlined>
          <template #default> Share </template>
          <template #rightIcon>
            <ShareIcon />
          </template>
        </easiButton2>
        <easiButton2 outlined
          >Link
          <template #rightIcon>
            <LinkIcon />
          </template>
        </easiButton2>
      </div>
    </header>

    <div class="document-list">
      <Doc v-for="index in 5" :key="`document-${index}`"></Doc>
    </div>
  </div>
</template>

<script setup>
import Doc from './Doc.vue'

import DownloadIcon from '@/assets/icons/download.svg'
import ShareIcon from '@/assets/icons/share.svg'
import LinkIcon from '@/assets/icons/link.svg'
</script>

<style lang="scss" scoped>
.document-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @apply gap-6;
}
</style>
