<script setup>
import { ref, computed } from 'vue'


const props = defineProps({
  label: String,
  length: Number,
  error: Boolean || String
})

const emit = defineEmits(['change'])

const input = ref(Array(props.length).fill(''))
const inputRefs = ref([])

const errorFeedback = computed(() => typeof props.error === 'string' ? props.error : false)

// keys
const BACKSPACE_KEY = 'Backspace'
const ARROWLEFT = 'ArrowLeft'
const ARROWRIGHT = 'ArrowRight'

const emitChange = () => {
  emit('change', input.value.join(''))
}

const handleKeyDown = (event, index) => {
  const keyPressed = event.key
  let nextTarget = inputRefs.value[index + 1]
  let prevTarget = inputRefs.value[index - 1]
  let prevValue = input.value[index]
  switch (keyPressed) {
    case BACKSPACE_KEY:
      event.preventDefault()
      if (!prevValue) {
        if (prevTarget) {
          prevTarget.focus()
          prevTarget.select()
        }
      } else {
        // delete entry
        input.value[index] = ''
        emitChange()
      }
      break
    case ARROWLEFT:
      event.preventDefault()
      if (prevTarget) {
        prevTarget.focus()
        prevTarget.select()
      }
      break
    case ARROWRIGHT:
      event.preventDefault()
      if (nextTarget) {
        nextTarget.focus()
        nextTarget.select()
      }
      break
    default:
      break
  }
}

const handleInput = (event, index) => {
  event.preventDefault()
  let value = event.target.value
  if (!value) return
  input.value[index] = value
  emitChange()
  let nextTarget = inputRefs.value[index + 1]
  if (nextTarget) {
    nextTarget.focus()
    nextTarget.select()
  }
}

const handlePaste = (event, index) => {
  event.preventDefault()
  // Get the pasted text from the clipboard
  const pastedText = event.clipboardData.getData('text/plain')
  // start filling from index
  let start = index
  let newValue = [...input.value.slice(0, start), ...pastedText].slice(0, props.length)
  input.value = newValue
  emitChange()
}
</script>

<template>
  <div class="pin-input" :class="{ error: !!error }">
    <label class="text-[#515251] mb-2 inline-block">{{ label }}</label>
    <div class="flex items-center gap-4">
      <div v-for="i in length" :key="`input-${i}`" class="flex-1">
        <input :data-key="i - 1" v-model="input[i - 1]" @paste="handlePaste($event, i - 1)" :maxlength="1" type="text"
          ref="inputRefs" @keydown="handleKeyDown($event, i - 1)" @input="handleInput($event, i - 1)" class="" />
      </div>
    </div>
    <div class="pin-input-error" v-if="errorFeedback">
      {{ errorFeedback }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pin-input {
  input {
    @apply h-10 text-center px-2 w-full box-border border border-[#B5B6B5] rounded outline-none;

    &:focus {
      @apply border-[#11453B];
    }
  }

  &.error {
    input {
      @apply border-[#EA4E4B];
    }
  }
}

.pin-input-error {
  @apply text-[#EA4E4B] text-sm mt-2;
}
</style>
