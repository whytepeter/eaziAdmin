<template>
  <easiModal v-if="isOpen" persistence @close="$emit('close')">
    <template #header>
      <h2 class="font-medium">Change Role</h2>
    </template>

    <div class="pt-2 pb-4 px-4 sm:px-6 flex flex-col gap-4 sm:gap-6">
      <p class="text-primary text-center leading-5">
        Please Select Role. <br />
        You can select more than one role for a user.
      </p>

      <easiSearch
        @keyup="handleSearch"
        @search="handleSearch"
        large
        placeholder="Search..."
        v-model="searchText"
      />

      <div class="flex flex-col gap-4 max-h-52 overflow-auto">
        <div
          v-for="role in visibleData"
          :key="role._id"
          :class="{ 'bg-[#F2F1F1]': selectedRole == role._id }"
          @click="handleSelect(role)"
          class="border border-[#E7E8E7] p-4 rounded-2xl cursor-pointer flex items-center gap-2"
        >
          <span class="flex-shrink-0 w-5">
            <img :src="selectedRole == role._id ? CheckActive : CheckNull" alt="" />
          </span>
          <span class="capitalise">{{ role.title }}</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 items-center place-content-center">
        <easiButton @click="$emit('close')" variant="outlined" block>Cancel</easiButton>
        <easiButton :loading="loading" @click="submit" block>Yes</easiButton>
      </div>
    </div>
  </easiModal>

  <easiAlert
    v-if="successAlert"
    :persistence="false"
    @close="successAlert = false"
    caption="You have successfully changed the role of this user."
  >
  </easiAlert>
</template>

<script setup>
import CheckActive from '@/assets/icons/checkbox-active.svg?url'
import CheckNull from '@/assets/icons/checkbox-null.svg?url'

import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { useToast } from 'vue-toastification'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  user: Object
})
const emit = defineEmits(['close'])

const watchUser = computed(() => props.user)
const loading = ref(false)
const successAlert = ref(false)
const searchText = ref('')

const selectedRole = ref(null)

const roles = computed(() => store.getAllRoles)
console.log(props.user && props.user.roles)
const visibleData = ref([])

onMounted(() => {
  visibleData.value = roles.value
  selectedRole.value = props.user && props.user.roles.length ? props.user.roles[0]._id : null
})

watch(watchUser, () => {
  selectedRole.value = props.user && props.user.roles.length ? props.user.roles[0]._id : null
})

const handleSelect = (role) => {
  selectedRole.value = selectedRole.value == role._id ? null : role._id
}

const handleSearch = () => {
  if (searchText.value.trim() !== '') {
    visibleData.value = roles.value.filter((el) =>
      el.title.toLowerCase().includes(searchText.value.toLowerCase())
    )
  } else {
    visibleData.value = roles.value
  }
}

const submit = async () => {
  if (selectedRole.value) {
    console.log(selectedRole.value)

    loading.value = true

    const payload = {
      id: props.user._id,
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      email: props.user.email,
      roles: [selectedRole.value]
    }

    try {
      const res = await mutate({
        endpoint: 'UpdateAnAdminUser',
        data: {
          input: payload
        }
      })

      console.log(res)

      loading.value = false

      if (res.success) {
        emit('close')
        queryAdmin()
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
  } else {
    toast.error('Please select a role to continue')
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
