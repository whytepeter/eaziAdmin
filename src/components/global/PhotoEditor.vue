<template>
  <main>
    <div
      v-if="isOpen"
      style="
        z-index: 300;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 19, 9, 0.5);
      "
      class="inset-0 w-full backdrop-blur-[1.5px] flex flex-col items-center justify-center overflow-y-auto"
    >
      <cropper
        ref="cropperRef"
        class="bg-primary w-full h-full sm:w-[500px] h-[500px]"
        :src="imageUrl"
        :stencil-props="{
          aspectRatio: 10 / 12
        }"
        @change="change"
      />

      <div
        class="w-full px-4 py-8 sm:w-7/12 md:6/12 lg:w-4/12 grid grid-cols-2 items-center gap-4 sm:gap-6"
      >
        <easiButton @click="clearFiles" block variant="outlined" color="white">Cancel</easiButton>
        <easiButton :loading="loading" block @click="save">Save</easiButton>
      </div>
    </div>

    <div @click="$refs.input.click()">
      <slot />
    </div>

    <input
      v-show="hide === false"
      ref="input"
      accept="image/png', 'image/jpeg', 'image/gift"
      @change="loadImage($event)"
      type="file"
    />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { helperFunctions } from '@/composable/helperFunctions'
import { useToast } from 'vue-toastification'

const { uploadFileToServer } = helperFunctions

const props = defineProps({
  size: {
    type: [Number, String],
    default: 2
  }
})

const emit = defineEmits(['cropped'])
const toast = useToast()

const loading = ref(false)
const isOpen = ref(false)

const hide = ref(true)
const input = ref(null)
defineExpose({ input })

const imageUrl = ref('')
const croppedImage = ref('')
const fileType = ref('')
const fileName = ref('')
const canva = ref(null)

const change = ({ canvas }) => {
  canva.value = canvas
}

const save = () => {
  if (canva.value) {
    loading.value = true
    canva.value.toBlob(async (blob) => {
      //Conver blob to file
      const file = new File([blob], fileName.value, { type: fileType.value })
      console.log('File', file)

      //Upload to server
      croppedImage.value = await uploadFileToServer(file)

      // console.log(croppedImage.value)
      await emit('cropped', croppedImage.value)
      isOpen.value = false
      loading.value = false
    }, fileType.value)
  }
}

const clearFiles = () => {
  input.value.value = null
  imageUrl.value = ''
  fileType.value = ''
  fileName.value = ''

  isOpen.value = false
}

function loadImage(e) {
  //   console.log(e.target.files[0], "FILE TARGET");
  const acceptedTypes = ['image/png', 'image/jpeg', 'image/gift']
  const file = e.target.files[0]
  fileType.value = file.type

  console.log(file.type, 'TYPEOFFILE', file.size)

  try {
    if (!acceptedTypes.includes(file.type)) {
      toast.error('File type is wrong!!')
      throw new Error('File type is wrong!!')
    }

    if (file.size > parseInt(Number(props.size) * 1000000)) {
      toast.error(`Too large, max size allowed is ${parseInt(props.size)}MB`)
      throw new Error(`Too large, max size allowed is ${parseInt(props.size)}MB`)
    }

    const { name } = file
    fileName.value = name

    let reader = new FileReader()

    reader.onloadend = (e) => {
      // data url
      // console.log(e.target.result)
      imageUrl.value = e.target.result
      isOpen.value = true
    }
    reader.readAsDataURL(file)
  } catch (e) {
    console.log(e.message)
  }
}
</script>

<style></style>
