<template>
  <div
    class="relative overflow-hidden h-72 w-52 max-w-full rounded-xl bg-primary flex-shrink-0 flex items-center justify-center"
  >
    <img
      v-if="user && user && user.pfp"
      :src="user && user.pfp"
      alt=""
      class="h-full w-full object-cover"
    />
    <span v-else class="font-bold text-white text-7xl">
      {{ initials(userName) }}
    </span>
    <div
      class="photo-gradient w-full absolute left-0 bottom-0 flex items-center justify-center gap-4 p-4"
    >
      <div
        class="flex-shrink-0 w-12 h-9 cursor-pointer border border-white rounded-full flex items-center justify-center"
      >
        <i class="pi pi-times text-white text-sm"></i>
      </div>
      <easiEditor @cropped="updateProfilePic">
        <div
          class="flex-shrink-0 w-12 h-9 cursor-pointer bg-primary rounded-full flex items-center justify-center"
        >
          <img :src="cameraIcon" alt="" class="w-5" />
        </div>
      </easiEditor>
    </div>
  </div>

  <easiLoader v-if="loading" />
</template>

<script setup>
import cameraIcon from '@/assets/icons/camera.svg?url'
import { helperFunctions } from '@/composable/helperFunctions'
import { computed, ref } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { useToast } from 'vue-toastification'

const { initials } = helperFunctions
const store = useDataStore()
const { query, mutate } = store
const toast = useToast()

const loading = ref(false)
const props = defineProps({
  profile: {
    type: Boolean,
    default: false
  },
  user: Object
})

const userName = computed(() => {
  if (props.user) {
    return `${props.user.firstName} ${props.user.lastName}`
  }
})

const updateProfilePic = async (url) => {
  try {
    const payload = {
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      id: props.user._id,
      email: props.user.email,
      pfp: url
    }

    loading.value = true

    console.log(payload)
    const res = await mutate({
      endpoint: 'UpdateAnAdminUser',
      data: {
        input: payload
      }
    })

    console.log(res)
    loading.value = false
    if (res.success) {
      if (props.profile) {
        queryUsersProfile()
      } else {
        queryAdminUsers()
      }

      toast.success('Profile photo successfully updated')
    } else {
      toast.error(res.message)
    }
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}

const queryUsersProfile = async () => {
  try {
    await query({
      endpoint: 'GetMyProfile',
      storeKey: 'user'
    })
  } catch (error) {
    console.log(error.message)
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

<style scope>
.photo-gradient {
  /* background: linear-gradient(
    360deg,
    #242424 0%,
    rgba(81, 81, 81, 0.9) 27.09%,
    rgba(139, 139, 139, 0.539111) 56.07%,
    rgba(218, 218, 218, 0) 88.16%
  ); */
  background: linear-gradient(
    360deg,
    #020706 0%,
    rgba(15, 20, 19, 0.77) 31.64%,
    rgba(3, 9, 7, 0.22) 67.17%,
    rgba(251, 251, 251, 0) 106.58%
  );
}
</style>
