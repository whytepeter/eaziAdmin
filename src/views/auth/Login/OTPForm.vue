<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <p class="mb-8 text-center text-[#292A29] font-bold">
        We’ve sent OTP to your mail and phone number.
      </p>

      <div class="grid gap-6 mb-6">
        <PinInput :length="6" label="OTP" @change="otp = $event" :error="error" />
        <!-- <PinInput :length="6" label="Phone Number OTP" @change="phoneOtp = $event" /> -->
      </div>
      <div class="flex justify-between items-center mb-8">
        <button type="button" :disabled="!canResend" @click="resendOtp"
          class="text-[#EA4E4B] disabled:opacity-50 tracking-[0.25px] text-sm">
          Resend
        </button>
        <div class="text-sm font-bold">
          <span class="time-left">{{ timeLeft.minutes }}</span>
          <span class="text-base inline-block mx-1">:</span>
          <span class="time-left">{{ timeLeft.seconds }}</span>
        </div>
      </div>

      <easiButton2 :is-loading="loading" block type="submit">Submit</easiButton2>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, onUnmounted } from 'vue'
import PinInput from './PinInput.vue'

const RESEND_INTERVAL_SECONDS = 180 // seconds

defineProps(['loading', 'error'])
const emit = defineEmits(['submit'])

const secondsLeft = ref(RESEND_INTERVAL_SECONDS)
const canResend = ref(false)
const otp = ref('')

const handleSubmit = () => {
  emit('submit', otp.value)
}

let interval

const startTimer = () => {
  secondsLeft.value = RESEND_INTERVAL_SECONDS
  canResend.value = false
  interval = setInterval(() => {
    secondsLeft.value = secondsLeft.value - 1
    if (secondsLeft.value === 0) {
      clearInterval(interval)
      canResend.value = true
    }
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(interval)
})

const timeLeft = computed(() => {
  let minutes = parseInt(secondsLeft.value / 60)
  let seconds = secondsLeft.value % 60

  minutes = minutes.toString().padStart(2, '0')
  seconds = seconds.toString().padStart(2, '0')

  return { minutes, seconds }
})

const resendOtp = () => {
  startTimer()
}
</script>

<style lang="scss" scoped>
.time-left {
  @apply inline-block py-1 px-2 bg-gray-200 rounded-md text-sm;
  color: #515251;
  font-weight: 500;
}
</style>
