<template>
  <div v-if="iconOnly" @click="$refs.input.click()">
    <slot />
  </div>
  <div v-else class="rounded-2xl bg-white grid grid-cols-1 gap-4">
    <div class="p-4 rounded-xl border-[1.5px] border-dashed border-dark-300 text-center">
      <h5 class="text-lg">{{ title }}</h5>
      <div v-if="!inputFile" class="text-dark-600 text-sm">
        (<span class="uppercase"> {{ String(allowedTypes) }} </span> Only) ({{ size }}mb Maximum)
      </div>
      <easiButton v-if="!inputFile" @click="$refs.input.click()" variant="text" block>
        <div class="flex gap-2 items-center justify-center font-medium">
          <i class="pi pi-upload"></i>
          Choose File
        </div>
      </easiButton>

      <div
        v-if="inputFile"
        class="mt-3 grid grid-flow-col auto-cols-auto items-center justify-between bg-highlight p-3 sm:px-4 rounded-lg"
      >
        <div class="flex items-center gap-4">
          <img :src="typeIcon" alt="" class="" />

          <div class="flex flex-col w-full text-left grow">
            <span class="text-bodyDark font-bold line-clamp-2 line-clamp 2">{{ fileName }} </span>
            <span class="text-bodyNormal text-sm">{{ fileSize }}</span>
          </div>
        </div>

        <div @click="clearFiles" class="cursor-pointer text-xl justify-end">
          <i class="pi pi-times-circle text-xl text-secondary"></i>
        </div>
      </div>
    </div>

    <div v-if="errorInFile && !error" class="text-xs text-secondary -mt-1">
      {{ message }}
    </div>
    <div v-if="error" class="text-xs text-secondary -mt-1">
      {{ error }}
    </div>
  </div>
  <input
    v-show="hide === false"
    ref="input"
    :accept="inputTypes.toString()"
    @change="previewFiles($event)"
    type="file"
    class="custom-file-input"
  />
</template>

<script setup>
import { helperFunctions } from '@/composable/helperFunctions'
import { useToast } from 'vue-toastification'

import jpgLogo from '@/assets/icons/jpg.svg?url'
import pdfLogo from '@/assets/icons/pdf.svg?url'
import excelLogo from '@/assets/icons/excel.svg?url'
import wordLogo from '@/assets/icons/word.svg?url'
import videoLogo from '@/assets/icons/videoformat.svg?url'

const toast = useToast()
import { ref, watch, computed, onMounted } from 'vue'

const props = defineProps({
  iconOnly: {
    type: Boolean,
    default: false
  },

  title: {
    type: String,
    default: 'Upload File'
  },

  allowedTypes: {
    default: ['jpg', 'pdf']
  },

  error: {
    type: [Boolean, String],
    default: false
  },

  size: {
    type: [Number, String],
    default: 2
  }
})

const emit = defineEmits(['fileUrl', 'imageUrl'])

let message = ref('')
let fileName = ref('')
let fileSize = ref('')
let imgUrl = ref('')
let errorInFile = ref(false)
const typeIcon = ref(null)
const inputFile = ref(null)
const input = ref(null)
const hide = ref(true)
const uploadFile = ref(null)

defineExpose({ input })

const clearFiles = () => {
  input.value.value = null
  imgUrl.value = ''
  uploadFile.value = null
  fileName.value = ''
  fileSize.value = ''
  inputFile.value = null

  emit('fileUrl', null)
  emit('imageUrl', null)
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

function getFileType(typeofFile) {
  const ext = typeofFile.split('/').pop()
  console.log(ext)
  if (ext === 'png' || ext === 'jpg' || ext === 'jpeg') {
    return jpgLogo
  } else if (ext === 'pdf') {
    return pdfLogo
  } else if (
    ext === 'csv' ||
    ext === 'xlsx' ||
    ext == 'vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ) {
    return excelLogo
  } else if (ext === 'docx') {
    return wordLogo
  } else if (ext === 'mp4' || ext === 'quicktime') {
    return videoLogo
  }
}

const inputTypes = computed(() => {
  let allowedTypes = []
  if (props.type === 'video') {
    allowedTypes = ['image/*;capture=camera', 'video/*', 'video/mp4', 'video/quicktime']
  } else {
    if (props.allowedTypes) {
      props.allowedTypes.forEach((el) => {
        if (el == 'pdf') {
          allowedTypes.push('application/pdf')
        } else if (el == 'jpg') {
          allowedTypes.push('image/png', 'image/jpeg', 'image/gift')
        } else if (el == 'excel') {
          allowedTypes.push(
            'text/csv',
            'application/csv',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel'
          )
        } else if (el == 'word') {
          allowedTypes.push('application/msword')
        }
      })
    } else {
      allowedTypes = [
        'text/csv',
        'application/msword',
        'application/vnd.ms-excel',
        'application/vnd.ms-powerpoint',
        'text/plain',
        'application/pdf',
        'image/png',
        'image/jpeg',
        'image/gif',
        'application/csv',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ]
    }
  }
  return allowedTypes
})

console.log(inputTypes.value)

function previewFiles(e) {
  //   console.log(e.target.files[0], "FILE TARGET");
  errorInFile.value = false
  uploadFile.value = null
  message.value = ''
  const file = e.target.files[0]
  inputFile.value = file
  uploadFile.value = file
  console.log(file.type, 'TYPEOFFILE')

  console.log(file.type)

  try {
    if (!inputTypes.value.includes(file.type)) {
      message.value = 'File type is wrong!!'
      inputFile.value = null
      errorInFile.value = true
      toast.error(message.value)
      throw new Error(message.value)
    }

    if (file.size > parseInt(Number(props.size) * 1000000)) {
      console.log(`Too large, max size allowed is ${parseInt(props.size)}MB`)
      message.value = `Too large, max size allowed is ${parseInt(props.size)}MB`
      inputFile.value = null
      errorInFile.value = true
      console.log(message.value)
      toast.error(message.value)
      throw new Error(message.value)
    }

    typeIcon.value = getFileType(file.type)
    const { name, size } = file
    fileName.value = name

    fileSize.value = formatBytes(size)
    let reader = new FileReader()

    reader.onloadend = (e) => {
      // data url
      // console.log(e.target.result)
      imgUrl.value = e.target.result
      emit('imageUrl', e.target.result)
    }
    reader.readAsDataURL(file)

    console.log(imgUrl.value, uploadFile.value)

    emit('fileUrl', uploadFile.value)
    // emit('imageUrl', imgUrl.value)
  } catch (e) {
    console.log(e.message)
  }

  // url = URL.createObjectURL(file);
  // uploadToServer();
}

// watch(imgUrl, () => {
//   console.log(imgUrl.value)
//   emit('imageUrl', imgUrl.value)
// })

onMounted(() => {
  fileName.value = ''
  fileSize.value = ''
  uploadFile.value = null
})
</script>

<style scoped>
.ion-camera-outline {
  color: #515251;
  font-weight: 700;
  font-size: 48px;
}
</style>
