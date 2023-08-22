<template>
  <easiModal v-if="isOpen" persistence @close="$emit('close')">
    <template #header>
      <h2 class="font-medium">Confirm Payment</h2>
    </template>

    <div class="pt-2 pb-4 flex flex-col gap-4 sm:gap-6">
      <p class="mx-4 sm:mx-6 font-bold text-secondary text-center text-sm">
        Please ensure you confirm the money paid by this customer has been remitted into Eazipay’s
        account.
      </p>

      <div class="mx-4 sm:mx-6">
        <easiTextInput
          label="Enter Amount"
          v-model="args.amount"
          format
          type="text"
          inputmode="numeric"
          class=""
          :error="errorRules.amount"
        />
      </div>

      <div class="mx-4 sm:mx-6">
        <easiUpload
          :error="errorRules.photoUrl"
          @fileUrl="args.photoUrl = $event"
          title="Upload Payment Receipt"
        />
      </div>

      <div class="mx-4 sm:mx-6 cursor-pointer flex items-center justify-center gap-2">
        <Checkbox
          :class="{ 'p-invalid': errorRules.accept }"
          v-model="confirmPayment"
          :binary="true"
        />
        <span
          @click="confirmPayment = !confirmPayment"
          :class="[errorRules.accept ? 'text-secondary' : 'text-primary']"
        >
          I have confirmed the payment
        </span>
      </div>

      <hr class="mt-2 mb-3 border border-dividerColor text-dividerColor" />

      <div class="mx-4 sm:mx-6 grid grid-cols-2 gap-4 items-center place-content-center">
        <easiButton @click="$emit('close')" variant="outlined" block>Cancel</easiButton>
        <easiButton :loading="loading" @click="submit" block>Confirm Payment</easiButton>
      </div>
    </div>
  </easiModal>

  <easiAlert
    @close="showAlert = false"
    v-if="showAlert"
    caption="Payment has been successfully confirmed"
  >
    <easiButton @click="showAlert = false" block>Okay</easiButton>
  </easiAlert>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { helperFunctions } from '@/composable/helperFunctions'
import { useDataStore } from '@/stores/data.js'
import { useToast } from 'vue-toastification'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()
const { uploadFileToServer } = helperFunctions

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },

  loan: {
    type: Object,
    default: () => ({})
  }
})
defineEmits(['close'])

const loading = ref(false)
const confirmPayment = ref(false)
const showAlert = ref(false)

const args = reactive({
  amount: '',
  photoUrl: ''
})

const errorRules = reactive({
  amount: false,
  photoUrl: false,
  accept: false
})

const validation = () => {
  if (args.amount.trim() == '' && args.amount >= 0) {
    errorRules.amount = 'Please enter a valid amount'
    return false
  } else if (!args.photoUrl) {
    errorRules.photoUrl = 'Please select a receipt file'
    return false
  } else if (!confirmPayment.value) {
    errorRules.accept = true
    return false
  } else {
    errorRules.amount = false
    errorRules.photoUrl = false
    errorRules.accept = false
    return true
  }
}

const submit = async () => {
  if (validation()) {
    loading.value = true

    const url = await uploadFileToServer(args.photoUrl)

    const payload = {
      amount: parseFloat(args.amount),
      loanId: props.loan && props.loan._id,
      photoUrl: url
    }
    console.log(payload)

    try {
      const res = await mutate({
        endpoint: 'ConfirmLoanPayment',
        data: payload
      })

      console.log(res)

      if (res.success) {
        showAlert.value = true
        await queryLoanActivities()
        setTimeout(() => {
          showAlert.value = false
        }, 3000)
      } else {
        toast.error(res.message)
      }

      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error.message)
      toast.error(error.message)
    }
  }
}

const queryLoanActivities = async () => {
  try {
    loading.value = true

    const res = await query({
      endpoint: 'ListLoanActivity',
      payload: {
        loanId: props.loan._id
      },
      storeKey: 'loanActivities'
    })

    console.log(res)

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}
</script>

<style></style>
