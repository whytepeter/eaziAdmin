<template>
  <easiModal v-if="isOpen" persistence @close="$emit('close')">
    <div class="p-6 flex flex-col gap-4 sm:gap-6">
      <div class="text-2xl">
        {{ type == 'create' ? 'Create New Role' : 'Edit Role' }}
      </div>

      <form @submit.prevent="submit" ref="form" autocomplete="on" class="flex flex-col gap-6">
        <easiTextInput v-model="args.title" label="Input role name" :error="errorRules.title" />
        <easiTextInput
          v-model="args.description"
          label="Role description"
          :error="errorRules.description"
        />
        <div class="flex gap-2">
          <div class="grow">
            <easiTextInput
              v-model="emailInput"
              type="email"
              inputmode="email"
              label="Add Email (Optional)"
              class=""
              :error="errorRules.email"
            />
          </div>
          <easiButton @click="addEmail" :disabled="emailInput.trim() == ''">Add More</easiButton>
        </div>

        <div v-if="args.email" class="flex flex-col gap-4 max-h-36 overflow-y-auto">
          <div
            v-for="(user, i) in args.email"
            :key="`user-${i}`"
            class="flex items-center gap-2 py-1 px-2 border border-[#E7E8E7] bg-[#F2F1F1] rounded-lg"
          >
            <div
              class="w-7 h-7 flex-shrink-0 bg-primary overflow-hidden rounded-full flex items-center justify-center"
            >
              <span class="text-white text-sm">
                {{ user.charAt(0).toUpperCase() }}
              </span>
            </div>
            <div class="w-full text-dark-800 text-sm flex items-center justify-between gap-2">
              {{ user }}
              <i
                @click="removeEmail(user)"
                class="pi pi-minus-circle text-sm text-secondary cursor-pointer"
              ></i>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="py-2 px-4 bg-[#F2F1F1] font-bold text-dark-800 uppercase rounded-lg">
            Privileges
          </div>
          <div class="flex flex-col gap-2 max-h-28 overflow-y-auto">
            <div
              v-for="(prev, i) in privileges"
              :key="`privileges-${i}`"
              class="flex items-center gap-4 text-sm text-dark-700"
            >
              <Checkbox v-model="args.privileges" :value="prev" :inputId="i" />
              <span>{{ i }}</span>
            </div>
          </div>
        </div>

        <hr class="border border-dividerColor text-dividerColor" />

        <p class="text-center text-primary text-sm sm:px-6 mx-auto">
          Please select any of the following permission you would like to assign to this role
        </p>

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
    :caption="`${type.toLowerCase() == 'create' ? 'Created' : 'Updated'} Successful`"
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
const { validateEmail } = helperFunctions

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'create'
  },
  role: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['close'])

const watchRole = computed(() => props.role)

const loading = ref(false)
const successAlert = ref(false)

const privileges = reactive({
  'Admin Management': 'Admin_Management',
  Dashboard: 'Dashboard',
  Reports: 'Reports',
  'Company Management': 'Company_Management',
  Feedback: 'Feedback',
  'Loan Managment': 'Loan_Managment'
})

const emailInput = ref('')
const args = reactive({
  title: '',
  description: '',
  email: [],
  privileges: null
})

const errorRules = reactive({
  title: false,
  description: false
})

function assignValues() {
  if (props.type.toLowerCase() == 'edit' && props.role) {
    const keys = ['title', 'description', 'email', 'privileges']
    for (let i = 0; i < keys.length; i++) {
      if (props.role && props.role[keys[i]]) {
        args[keys[i]] = props.role[keys[i]]
      }
    }
  }
}

assignValues()

watch(watchRole, () => {
  console.log(props.role)
  assignValues()
})

function validation() {
  if (args.title.trim() === '') {
    errorRules.title = 'Please fill in the role title'
    return false
  } else {
    //Reset Error
    Object.keys(errorRules).forEach((key) => {
      errorRules[key] = false
    })

    return true
  }
}

const addEmail = () => {
  const emailExist = args.email.find((el) => el == emailInput.value)

  if (emailInput.value.trim() == '' && !validateEmail(emailInput.value)) {
    errorRules.email = 'Email is badly formatted'
  } else if (emailExist) {
    errorRules.email = 'Email exist already'
    return false
  } else {
    errorRules.email = false
    args.email.push(emailInput.value)
    emailInput.value = ''
  }
}

const removeEmail = (email) => {
  args.email = args.email.filter((el) => el !== email)
}

const clearFields = () => {
  args.title = ''
  args.description = ''
  args.email = []
  args.privileges = null
}

const submit = async () => {
  if (!args.email.length && emailInput.value.trim() !== '') {
    args.email.push(emailInput.value)
  }

  if (validation()) {
    console.log(args)

    loading.value = true

    try {
      const res = await mutate({
        endpoint: props.type.toLowerCase() == 'create' ? 'CreateRole' : 'EditRole',
        data: {
          input: args
        }
      })

      console.log(res)
      loading.value = false

      if (res.success) {
        clearFields()
        emit('close')
        await queryRoles()
        successAlert.value = true

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

const queryRoles = async () => {
  try {
    loading.value = true

    const res = await query({
      endpoint: 'ListRoles',
      storeKey: 'listRoles'
    })

    console.log('Roles', res)

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}
</script>

<style></style>
