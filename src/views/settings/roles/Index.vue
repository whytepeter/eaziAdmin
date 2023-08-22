<template>
  <div class="flex items-center justify-between">
    <h2 class="text-xl">Roles & Permissions</h2>
    <easiButton @click="createRoleModal = true">
      <span class="flex gap-2 items-center">
        <i class="pi pi-plus"></i>
        Create New Role
      </span>
    </easiButton>
  </div>

  <div class="flex gap-6 mt-5 border pl-4 py-4 rounded-2xl">
    <div class="w-52 lg:w-56 flex-shrink-0">
      <RoleList />
    </div>
    <div class="grow border-l px-6 flex flex-col gap-6">
      <div>
        <div class="flex items-center justify-between">
          <h4 class="text-xl text-primary sm:text-2xl capitalize">{{ role && role.title }}</h4>
          <DropDown
            :isOpen="openMenu"
            @open="openMenu = true"
            @close="openMenu = false"
            :menuItems="menuItems"
          />
        </div>
        <span class="text-sm py-2 text-dark-700">
          {{ role && role.description ? role.description : 'N/A' }}
        </span>
      </div>

      <TeamMember />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-2">
        <DisplayRoles />
        <DisplayRoles :hasAccess="false" />
      </div>
    </div>
  </div>

  <easiAlert
    @close="deleteRoleAlert = false"
    v-if="deleteRoleAlert"
    :icon="ConfirmIcon"
    title="Delete Role"
    caption="Are you sure you want to delete this role? However this action will not be reversible once taken."
  >
    <div class="grid grid-cols-2 gap-4">
      <easiButton @click="deleteRoleAlert = false" block variant="outlined">Cancel</easiButton>
      <easiButton :loading="deleteLoading" @click="deleteRole" block>Yes</easiButton>
    </div>
  </easiAlert>

  <easiAlert
    :persistence="false"
    @close="successAlert = false"
    v-if="successAlert"
    caption="You have successfully removed this role"
  >
  </easiAlert>

  <CreateRole :isOpen="createRoleModal" @close="createRoleModal = false" />
  <CreateRole :isOpen="editRoleModal" @close="editRoleModal = false" type="edit" :role="role" />

  <easiLoader v-if="loading" />
</template>

<script setup>
import RoleList from './RoleList.vue'
import TeamMember from './TeamMember.vue'
import DisplayRoles from './DisplayRoles.vue'
import DropDown from '../shared/DropDown.vue'

import ConfirmIcon from '@/assets/icons/confirm.svg?url'
import EditIcon from '@/assets/icons/editIcon.svg?url'
import RemoveIcon from '@/assets/icons/removeIcon.svg?url'
import CreateRole from './CreateRole.vue'

import { useDataStore } from '@/stores/data.js'
import { useToast } from 'vue-toastification'

import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useDataStore()
const { query, mutate } = store
const toast = useToast()

const createRoleModal = ref(false)
const editRoleModal = ref(false)
const deleteRoleAlert = ref(false)
const successAlert = ref(false)

const deleteLoading = ref(false)
const loading = ref(false)

const allRoles = computed(() => store.getAllRoles) //store.getAllRoles

const role = computed(() => {
  return allRoles.value && allRoles.value.find((el) => el._id === route.query.id)
})

const openMenu = ref(false)
const menuItems = computed(() => {
  return [
    {
      title: 'Edit',
      icon: EditIcon,
      action() {
        editRoleModal.value = true
        openMenu.value = false
      }
    },
    {
      title: 'Remove',
      icon: RemoveIcon,
      action() {
        deleteRoleAlert.value = true
        openMenu.value = false
      }
    }
  ]
})

const deleteRole = async () => {
  deleteLoading.value = true
  console.log(role.value._id)
  try {
    const res = await mutate({
      endpoint: 'DeleteRole',
      data: {
        input: {
          roleId: role.value._id
        }
      }
    })

    console.log(res)
    deleteLoading.value = false
    deleteRoleAlert.value = false

    if (res.success) {
      await queryRoles()
      successAlert.value = true

      setTimeout(() => {
        successAlert.value = false
      }, 3000)
    } else {
      toast.error(res.message)
    }
  } catch (error) {
    deleteLoading.value = false
    console.log(error.message)
  }
}

const queryRoles = async () => {
  try {
    loading.value = true

    await query({
      endpoint: 'ListRoles',
      storeKey: 'listRoles'
    })

    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error.message)
  }
}
queryRoles()
// const queryAdminByRoles = async () => {
//   try {
//     const res = await query({
//       endpoint: 'GetAdminsByRole',
//       payload: {
//         input: {
//           roleId: role.value._id
//         }
//       },
//       storeKey:'adminByRole'
//     })

//     console.log(res)
//   } catch (error) {
//     console.log(error.message)
//   }
// }
</script>

<style></style>
