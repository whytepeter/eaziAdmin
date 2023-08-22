<template>
  <div class="flex items-center justify-between">
    <h2 class="text-xl">Admin Users</h2>
    <easiButton @click="addAdminModal = true">
      <span class="flex gap-2 items-center">
        <i class="pi pi-plus"></i>
        Add Admin User
      </span>
    </easiButton>
  </div>
  <div class="flex gap-6 mt-5">
    <div class="w-72 flex-shrink-0">
      <AdminList />
    </div>

    <div
      class="border grow p-4 sm:px-6 sm:pt-6 sm:pb-14 rounded-2xl mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 flex gap-6 flex-col md:flex-row"
    >
      <ProfilePic :user="admin" />

      <div class="grow">
        <div class="flex items-center justify-between">
          <h4 class="text-xl sm:text-2xl">
            {{ admin && admin.firstName }}
            {{ admin && admin.lastName }}
          </h4>
          <!-- <i class="pi pi-ellipsis-v text-dark-400 cursor-pointer"></i> -->
          <DropDown
            :isOpen="openMenu"
            @open="openMenu = true"
            @close="openMenu = false"
            :menuItems="menuItems"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center pt-8 pb-4">
          <DetailsCard v-for="(details, i) in adminDetails" :data="details" :key="i" />
        </div>
      </div>
    </div>
  </div>

  <easiAlert
    @close="removeAlert = false"
    v-if="removeAlert"
    :icon="ConfirmIcon"
    title="Remove Admin"
    caption="Are you sure you want to remove this user from admin? However this action will not be reversible once taken."
  >
    <div class="grid grid-cols-2 gap-4">
      <easiButton @click="removeAlert = false" block variant="outlined">Cancel</easiButton>
      <easiButton :loading="removeLoading" @click="removeAdmin" block>Yes</easiButton>
    </div>
  </easiAlert>

  <easiAlert
    :persistence="false"
    @close="successAlert = false"
    v-if="successAlert"
    caption="You have successfully removed the user."
  >
  </easiAlert>

  <AddAdmin :isOpen="addAdminModal" @close="addAdminModal = false" />
  <ChangeRole :user="admin" :isOpen="changeRoleModal" @close="changeRoleModal = false" />
  <EditProfile :user="admin" :isOpen="editProfileModal" @close="editProfileModal = false" />

  <easiLoader v-if="loading" />
</template>

<script setup>
import ProfilePic from '../shared/ProfilePic.vue'
import DetailsCard from '../shared/DetailsCard.vue'
import AdminList from './AdminList.vue'
import DropDown from '../shared/DropDown.vue'
import AddAdmin from './AddAdmin.vue'
import ChangeRole from './ChangeRole.vue'
import EditProfile from '../shared/EditProfile.vue'

import ConfirmIcon from '@/assets/icons/confirm.svg?url'
import CallIcon from '@/assets/icons/call.svg?url'
import MailIcon from '@/assets/icons/mail.svg?url'
import UserCheckIcon from '@/assets/icons/user-check.svg?url'
import LocationIcon from '@/assets/icons/location.svg?url'
import BankIcon from '@/assets/icons/bank.svg?url'
import EditIcon from '@/assets/icons/editIcon.svg?url'
import RemoveIcon from '@/assets/icons/removeIcon.svg?url'
import RoleIcon from '@/assets/icons/roleIcon.svg?url'

import { computed, ref, onMounted, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { helperFunctions } from '@/composable/helperFunctions'
import { useToast } from 'vue-toastification'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const { query, mutate } = store
const toast = useToast()
const { formatPhone, formatDate } = helperFunctions
const route = useRoute()
const router = useRouter()

const addAdminModal = ref(false)
const changeRoleModal = ref(false)
const editProfileModal = ref(false)
const removeAlert = ref(false)
const successAlert = ref(false)

const loading = ref(false)
const removeLoading = ref(false)

const allAdmins = computed(() => store.getAdminUsers)

const admin = computed(() => {
  return allAdmins.value && allAdmins.value.find((el) => el._id === route.query.id)
})

const adminDetails = computed(() => {
  const role = admin.value && admin.value.roles.length ? admin.value.roles[0].title : 'N/A'
  const email = admin.value && admin.value.email
  const phone =
    admin.value && admin.value.phoneNumber ? formatPhone(admin.value.phoneNumber) : 'N/A'
  const address = admin.value && admin.value.address ? admin.value.address : 'N/A'

  return [
    {
      title: 'Role',
      value: role,
      icon: UserCheckIcon
    },
    {
      title: 'Email',
      value: email,
      link: `mailto:${email}`,
      icon: MailIcon,
      copy: true
    },
    {
      title: 'Address',
      value: address,
      icon: LocationIcon
    },
    {
      title: 'Date Added',
      value: formatDate(admin.value && admin.value.createdAt),

      icon: BankIcon
    },
    {
      title: 'Phone Number',
      value: phone,
      icon: CallIcon
    }
  ]
})

const openMenu = ref(false)
const menuItems = computed(() => {
  return [
    {
      title: 'Edit',
      icon: EditIcon,
      action() {
        console.log(admin.value)
        editProfileModal.value = true
        openMenu.value = false
      }
    },
    {
      title: 'Change Role',
      icon: RoleIcon,
      action() {
        changeRoleModal.value = true
        openMenu.value = false
      }
    },
    {
      title: 'Remove',
      icon: RemoveIcon,
      action() {
        removeAlert.value = true
        openMenu.value = false
      }
    }
  ]
})

onMounted(async () => {
  await queryAdminUsers()
})

watch(allAdmins, () => {
  if (route.query && !route.query.id && allAdmins.value.length) {
    router.push({ query: { id: allAdmins.value[0]._id } })
  }
})

const removeAdmin = async () => {
  removeLoading.value = true

  try {
    const res = await mutate({
      endpoint: 'RemoveAnAdminUser',
      data: {
        input: {
          userId: admin.value._id
        }
      }
    })
    removeLoading.value = false
    removeAlert.value = false
    console.log(res)
    if (res.success) {
      successAlert.value = true
      queryAdminUsers()
      setTimeout(() => {
        successAlert.value = false
      }, 3000)
    } else {
      toast.error(res.message)
    }
  } catch (error) {
    removeLoading.value = false
    console.log(error.message)
    // toast.error(error.message)
  }
}

const queryAdminUsers = async () => {
  try {
    loading.value = true

    await query({
      endpoint: 'GetAdminUsers',
      payload: {
        input: {
          addedBy: null
        }
      },
      storeKey: 'adminUsers'
    })

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}

const queryRoles = async () => {
  try {
    // loading.value = true

    await query({
      endpoint: 'ListRoles',
      storeKey: 'listRoles'
    })

    // loading.value = false
  } catch (error) {
    // loading.value = false
    console.log(error.message)
  }
}

queryRoles()
</script>

<style></style>
