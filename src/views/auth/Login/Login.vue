<script setup>
import { computed, ref } from 'vue'
import FramedQuote from './Frame.vue'

import OTPForm from './OTPForm.vue'

import PersonIcon from './PersonIcon.vue'
import { useDataStore } from '@/stores/data.js'
import { useRouter } from 'vue-router'

const store = useDataStore()

const loading = ref(false)
const showOtp = ref(false)
const router = useRouter()
const email = ref('')

const loginError = ref('')
const otpError = ref(false)

const handleLogin = async () => {
  loginError.value = ''
  // const enteredEmail = email.value

  const data = {
    input: {
      email: email.value,
      loginWith: 'EMAIL',
      rememberMe: true
    }
  }

  loading.value = true

  try {
    let res = await store.mutate({
      endpoint: 'EaziAdminLogin',
      data
    })

    loading.value = false
    showOtp.value = true

    localStorage.setItem('token', res.token)
    localStorage.setItem('userEmail', email.value)

    email.value = ''
  } catch (err) {
    loading.value = false
    console.log(err)
    loginError.value = err.message ?? 'error occurred'
  }
}

const verifyOtp = async (otp) => {
  const reference = localStorage.getItem('token')
  const value = localStorage.getItem('userEmail')

  const payload = {
    reference,
    value,
    code: otp
  }
  loading.value = true
  try {
    otpError.value = null
    let res = await store.mutate({
      endpoint: 'ConfirmLoginOtp',
      data: { input: payload }
    })

    if (res.success !== true) {
      throw new Error('Invalid Token. The token you provided is not valid or has expired')
    }
    loading.value = false
    localStorage.removeItem('userEmail')
    let { token } = res;
    if (token) {
      localStorage.setItem('token', res.token)
    }
    localStorage.setItem('userData', res.data)
    localStorage.setItem('privileges', res.privileges)

    await queryUser()
    router.push('/admin/dashboard')
  } catch (err) {
    loading.value = false
    otpError.value = err.message ?? 'error occurred'
    console.log(err)
  }
}

const queryUser = async () => {
  try {
    let res = await store.query({
      endpoint: 'GetMyProfile',
      storeKey: 'user'
    })
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="grid lg:grid-cols-2 h-screen overflow-hidden">
    <aside class="bg-primary hidden lg:block overflow-auto relative">
      <img src="./assets/curve.svg?url" class="absolute bottom-4 w-full left-0" />
      <div class="w-8/12 mx-auto mt-40 py-8 relative">
        <FramedQuote>
          Do what you do so well that customers will want to use it again and bring their friends.
        </FramedQuote>
      </div>
    </aside>
    <div class="h-full overflow-auto bg-[#F0F7EB]">
      <main class="mt-[15vh] py-6 px-6">
        <div class="login-card max-w-[420px] shadow-sm mx-auto bg-white p-8 rounded-[40px]">
          <div class="flex justify-center mb-7 relative">
            <div v-if="showOtp" class="absolute left-0 top-0 bottom-0 inline-grid place-items-center">
              <button @click="showOtp = false">
                <img src="@/assets/icons/arrow-left.svg?url" />
              </button>
            </div>
            <div>
              <img src="@/assets/logo/new-logo-green.svg?url" />
            </div>
          </div>

          <!-- otp step -->
          <OTPForm v-if="showOtp" :loading="loading" @submit="verifyOtp" :error="otpError">
          </OTPForm>

          <form v-else @submit.prevent="handleLogin">
            <p class="mb-8 text-center text-[#292A29] font-bold">Please input your username</p>
            <div class="mb-6">
              <easiTextInput v-model="email" type="email" label="Email" autofocus required :error="loginError">
                <template #append>
                  <PersonIcon />
                </template>
              </easiTextInput>
            </div>
            <easiButton2 block :is-loading="loading"> Take me in </easiButton2>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.pin-input-label {
  @apply text-[#515251] leading-[24px] font-medium;
}

.login-card {
  animation: loginCardSlideIn 0.5s ease;
}

@keyframes loginCardSlideIn {
  0% {
    transform: translateX(24px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
