<template>
  <div class="doc" :class="{ checked: checked === true }">
    <div class="flex items-start gap-4 mb-4">
      <div class="doc-type flex-shrink-0">
        <div class="doc-type-icon">
          <img :src="docIcon" />
        </div>
        <CheckButton class="doc-checkbox mt-1" v-model:checked="checked" />
      </div>
      <div class="flex flex-1 items-center">
        <div class="">
          <h3 class="doc-title">International Pas...</h3>
          <p class="doc-uploaded">Uploaded 02, 02, 2023</p>
        </div>
        <div class="doc-menu">
          <KebabMenu :options="menuOptions" />
        </div>
      </div>
    </div>
    <div class="w-full h-14 bg-gray-200 rounded-lg cursor-pointer" @click="show = true"></div>
  </div>
  <DocumentViewer :open="show" @close="show = false" />
</template>

<script setup>
import imageIcon from '@/assets/icons/image-file.svg?url'

import KebabMenu from '@/components/KebabMenu/index.vue'

import DownloadIcon from '@/assets/icons/download.svg'
import ShareIcon from '@/assets/icons/share.svg'
import LinkIcon from '@/assets/icons/link.svg'

import DocumentViewer from './DocumentViewer.vue'
import CheckButton from '@/components/CheckButton.vue'

import { ref } from 'vue'

const show = ref(false)

const checked = ref(false)

const menuOptions = [
  { label: 'Share', icon: ShareIcon },
  { label: 'Download', icon: DownloadIcon },
  { label: 'Copy Link', icon: LinkIcon }
]

const docIcon = {
  image: imageIcon
}['image']
</script>

<style lang="scss" scoped>
.doc {
  background-color: #f2f1f1;
  border-radius: 16px;
  padding: 16px;
}

.doc-type {
  width: 30px;
}

.doc-title {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.25px;
  margin-bottom: 4px;
}

.doc-uploaded {
  color: #8d8e8d;
  font-size: 14px;
}

.doc-menu {
  margin-left: auto;
}

.doc-checkbox {
  display: none;
}

.doc:hover,
.doc.checked {
  .doc-type-icon {
    display: none;
  }
  .doc-checkbox {
    display: block;
  }
}
</style>
