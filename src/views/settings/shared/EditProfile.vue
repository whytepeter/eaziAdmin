<template>
  <easiModal v-if="isOpen" persistence @close="$emit('close')">
    <div class="p-6 flex flex-col gap-4 sm:gap-6">
      <div class="text-2xl">Edit Profile</div>

      <form @submit.prevent="submit" ref="form" autocomplete="on" class="flex flex-col gap-6">
        <easiTextInput v-model="args.firstName" label="First Name" :error="errorRules.firstName" />
        <easiTextInput v-model="args.lastName" label="Last Name" :error="errorRules.lastName" />
        <easiTextInput
          v-model="args.email"
          type="email"
          inputmode="email"
          label="Email"
          :error="errorRules.email"
        />
        <easiTextInput
          v-model="args.phoneNumber"
          type="tel"
          inputmode="numeric"
          label="Phone Number"
          :error="errorRules.phoneNumber"
        />
        <easiTextInput v-model="args.address" label="Address" :error="errorRules.address" />

        <div class="grid grid-cols-2 gap-4 items-center place-content-center">
          <easiButton @click="$emit('close')" variant="outlined" block>Cancel</easiButton>
          <easiButton :loading="loading" type="submit" block>Submit</easiButton>
        </div>
      </form>
    </div>
  </easiModal>

  <easiAlert
    v-if="successAlert"
    :persistence="false"
    @close="successAlert = false"
    caption="Update Successful"
  >
  </easiAlert>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { helperFunctions } from '@/composable/helperFunctions'
import { useDataStore } from '@/stores/data.js'
import { useToast } from 'vue-toastification'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()
const { processNumber, validateEmail } = helperFunctions

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  user: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['close', 'complete'])

const watchUser = computed(() => props.user)

const loading = ref(false)
const successAlert = ref(false)

const args = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  accountType: '',
  id: ''
})

const errorRules = reactive({
  firstName: false,
  lastName: false,
  email: false,
  phoneNumber: false,
  address: false
})

const clearFields = () => {
  args.id = ''
  args.firstName = ''
  args.lastName = ''
  args.email = ''
  args.phoneNumber = ''
  args.address = ''
  args.accountType = ''
}

function assignValues() {
  clearFields()
  const keys = ['firstName', 'lastName', 'email', 'phoneNumber', 'address', 'accountType']
  for (let i = 0; i < keys.length; i++) {
    if (props.user && props.user[keys[i]]) {
      args[keys[i]] = props.user[keys[i]]
    }
  }
  console.log(props.user)
}
assignValues()

watch(watchUser, () => {
  assignValues()
})

function validation() {
  let checkNumber =
    isNaN(args.phoneNumber.trim()) ||
    (processNumber(args.phoneNumber) && processNumber(args.phoneNumber).length !== 13)

  if (args.firstName.trim() === '') {
    errorRules.firstName = 'Please fill in your first name'
    return false
  } else if (args.lastName.trim() === '') {
    errorRules.lastName = 'Please fill in your last name'
    return false
  } else if (args.email.trim() === '') {
    errorRules.email = 'Please fill in your email address'
    return false
  } else if (!validateEmail(args.email)) {
    errorRules.email = 'Email is badly formated'
    return false
  } else if (args.phoneNumber.trim() === '') {
    errorRules.phoneNumber = 'Please fill in your phone number'
    return false
  } else if (checkNumber !== false) {
    errorRules.phoneNumber = 'Phone number badly formatted'
    return false
  } else if (args.address.trim() === '') {
    errorRules.address = 'Please fill in your company'
    return false
  } else {
    //Reset Error
    Object.keys(errorRules).forEach((key) => {
      errorRules[key] = false
    })

    return true
  }
}

const submit = async () => {
  if (validation()) {
    args.id = props.user._id
    console.log(args)

    try {
      loading.value = true

      const res = await mutate({
        endpoint: 'UpdateAnAdminUser',
        data: {
          input: args
        }
      })

      console.log(res)
      loading.value = false

      if (res.success) {
        emit('close')
        successAlert.value = true
        queryAdmin()
        emit('complete')

        setTimeout(() => {
          successAlert.value = false
        }, 3000)
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      loading.value = false
      console.log(error.message)
    }
  }
}

const queryAdmin = async () => {
  try {
    await query({
      endpoint: 'GetAdminUsers',
      payload: {
        input: {
          addedBy: null
        }
      },
      storeKey: 'adminUsers'
    })
  } catch (error) {
    console.log(error.message)
  }
}
</script>

<style></style>
