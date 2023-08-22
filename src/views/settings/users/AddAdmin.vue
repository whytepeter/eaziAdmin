<template>
  <easiModal v-if="isOpen" persistence @close="$emit('close')">
    <div class="p-6 flex flex-col gap-4 sm:gap-6">
      <div class="text-2xl">Add Admin User</div>
      <form @submit.prevent="submit" ref="form" autocomplete="on" class="flex flex-col gap-6">
        <easiTextInput v-model="args.fullName" label="Full Name" :error="errorRules.fullName" />
        <easiTextInput v-model="args.username" label="Username" :error="errorRules.username" />
        <easiTextInput
          v-model="args.email"
          type="email"
          label="Email"
          inputmode="email"
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

        <easiSelectInput
          @update="args.roles = $event"
          placeholder="Select role"
          :value="args.roles.value"
          :options="roles"
          :error="errorRules.roles"
        />

        <div class="grid grid-cols-2 gap-4 items-center place-content-center">
          <easiButton @click="$emit('close')" variant="outlined" block>Cancel</easiButton>
          <easiButton :loading="loading" @click="submit" block>Yes</easiButton>
        </div>
      </form>
    </div>
  </easiModal>

  <easiAlert
    v-if="successAlert"
    :persistence="false"
    @close="successAlert = false"
    caption="You have successfully added a new admin."
  >
  </easiAlert>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { helperFunctions } from '@/composable/helperFunctions'
import { useToast } from 'vue-toastification'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()
const { validateEmail, processNumber } = helperFunctions

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])

const loading = ref(false)
const successAlert = ref(false)

const roles = computed(() => {
  const arr = store.getAllRoles
  return arr
    ? arr.map((el) => {
        return {
          label: el.title,
          value: el.title,
          id: el._id
        }
      })
    : []
})

console.log('Rolesssss', roles.value)
const args = reactive({
  fullName: '',
  lastName: '',
  username: '',
  email: '',
  phoneNumber: '',
  address: '',
  accountType: 'EaziAdmin',
  roles: {}
})

const errorRules = reactive({
  fullName: false,
  lastName: false,
  username: false,
  email: false,
  phoneNumber: false,
  address: false,
  roles: false
})

function validation() {
  let checkNumber =
    isNaN(args.phoneNumber.trim()) ||
    (processNumber(args.phoneNumber) && processNumber(args.phoneNumber).length !== 13)

  if (args.fullName.trim() === '') {
    errorRules.fullName = 'Please enter a name'
    return false
  } else if (args.username.trim() === '') {
    errorRules.username = 'Please enter a username'
    return false
  } else if (args.email.trim() === '') {
    errorRules.email = 'Please enter an email address'
    return false
  } else if (!validateEmail(args.email)) {
    errorRules.email = 'Email is badly formated'
    return false
  } else if (args.phoneNumber.trim() === '') {
    errorRules.phoneNumber = 'Please enter a phone number'
    return false
  } else if (checkNumber !== false) {
    errorRules.phoneNumber = 'Phone number badly formatted'
    return false
  } else if (args.address.trim() === '') {
    errorRules.address = 'Please enter an address'
    return false
  } else if (!args.roles.value) {
    errorRules.roles = 'Please select a role'
    return false
  } else {
    //Reset Error
    Object.keys(errorRules).forEach((key) => {
      errorRules[key] = false
    })

    return true
  }
}

const clearFields = () => {
  args.fullName = ''
  args.lastName = ''
  args.username = ''
  args.email = ''
  args.phoneNumber = ''
  args.address = ''
  args.roles = {}
}

const submit = async () => {
  if (validation()) {
    loading.value = true

    const payload = { ...args }

    payload.firstName = payload.fullName.split(' ')[0]
    payload.lastName = payload.fullName.split(' ')[1]
    payload.roles = [payload.roles.id]
    delete payload.fullName

    console.log(args)

    try {
      const res = await mutate({
        endpoint: 'AddAdminUser',
        data: {
          input: payload
        }
      })

      loading.value = false
      if (res.success) {
        emit('close')
        clearFields()
        successAlert.value = true

        queryAdminUsers()
        setTimeout(() => {
          successAlert.value = false
        }, 3000)
      } else {
        console.log(error.message)
        toast.error(error.message)
      }
    } catch (error) {
      loading.value = false
      console.log(error.message)
      toast.error(error.message)
    }
  }
}

const queryAdminUsers = async () => {
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
