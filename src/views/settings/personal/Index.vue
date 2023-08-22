<template>
  <div
    class="border p-4 sm:px-6 sm:pt-6 sm:pb-14 rounded-2xl mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 flex gap-6 flex-col md:flex-row"
  >
    <ProfilePic profile :user="user" />

    <div class="grow">
      <div class="flex items-center justify-between">
        <h4 class="text-xl sm:text-2xl">
          {{ user && user.firstName }} {{ user && user.lastName }}
        </h4>
        <easiButton @click="editModal = true">Edit Profile</easiButton>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center pt-8 pb-4">
        <DetailsCard v-for="(details, i) in userDetails" :data="details" :key="i" />
      </div>
    </div>
  </div>

  <EditProfile
    @complete="queryUsersProfile"
    :user="user"
    :isOpen="editModal"
    @close="editModal = false"
  />
</template>

<script setup>
import ProfilePic from '../shared/ProfilePic.vue'
import DetailsCard from '../shared/DetailsCard.vue'
import EditProfile from '../shared/EditProfile.vue'

import CallIcon from '@/assets/icons/call.svg?url'
import MailIcon from '@/assets/icons/mail.svg?url'
import UserCheckIcon from '@/assets/icons/user-check.svg?url'
import LocationIcon from '@/assets/icons/location.svg?url'

import { computed, ref } from 'vue'
import { helperFunctions } from '@/composable/helperFunctions'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query } = store
const { formatPhone, formatDate } = helperFunctions
const editModal = ref(false)
const loading = ref(false)

const user = computed(() => store.getUser)
console.log('User', user.value)
const userDetails = computed(() => {
  return [
    {
      title: 'Role',
      value: user.value && user.value.accountType,
      icon: UserCheckIcon
    },
    {
      title: 'Email',
      value: user.value && user.value.email,
      link: `mailto:${user.value && user.value.email}`,
      icon: MailIcon,
      copy: true
    },
    {
      title: 'Address',
      value: user.value && user.value.address ? user.value.address : 'N/A',
      icon: LocationIcon
    },
    {
      title: 'Phone Number',
      value: formatPhone(user.value && user.value.phoneNumber),
      icon: CallIcon
    }
  ]
})

const queryUsersProfile = async () => {
  try {
    loading.value = true

    await query({
      endpoint: 'GetMyProfile',
      storeKey: 'user'
    })

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}

queryUsersProfile()
</script>

<style></style>
