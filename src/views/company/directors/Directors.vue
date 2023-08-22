<template>
  <div>
    <h3 class="mb-6 font-normal">Directors/CEO/Co-founder</h3>
    <Loading :data="data" :error="error">
      <div class="flex items-start gap-8 admin-list-layout">
        <div class="w-3/12 h-full flex flex-col overflow-hidden">
          <employee-list
            v-model:selected="selectedUser"
            class="bg-white rounded-md p-3"
            :data="data.companyExecs"
          >
            <template #name="slotProps">
              {{ getFullname(slotProps.data) }}
            </template>
          </employee-list>
        </div>

        <div class="w-9/12 h-full">
          <div class="card card-white h-full" v-if="selectedUser">
            <div class="flex gap-8">
              <picture class="flex-shrink-0 h-98 w-90 rounded-lg overflow-hidden">
                <img :src="selectedUser.pictureUrl" class="h-full w-full object-cover" />
              </picture>

              <div class="flex-1">
                <div>
                  <div class="flex items-center justify-between mb-10">
                    <h3>{{ getFullname(selectedUser) }}</h3>

                    <div>
                      <easi-button>Edit Director</easi-button>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-8 gap-y-10">
                    <copyable-value-card noPadding label="Position" value="Chief Accountant">
                      <template #icon>
                        <UserCheckIcon />
                      </template>
                    </copyable-value-card>

                    <copyable-value-card noPadding label="Email">
                      <template #value>
                        <a href="#">{{ selectedUser.email }}</a>
                      </template>
                      <template #icon>
                        <MailIcon />
                      </template>
                    </copyable-value-card>

                    <copyable-value-card noPadding label="Address" :value="selectedUser.address">
                      <template #icon>
                        <LocationIcon />
                      </template>
                    </copyable-value-card>

                    <copyable-value-card noPadding label="BVN" :value="selectedUser.bvn">
                      <template #icon>
                        <BankIcon />
                      </template>
                    </copyable-value-card>

                    <copyable-value-card
                      noPadding
                      label="Phone Number"
                      :value="selectedUser.phoneNumber"
                    >
                      <template #icon>
                        <CallIcon />
                      </template>
                    </copyable-value-card>

                    <div>
                      <div class="mb-2">Identification</div>
                      <div class="flex gap-3">
                        <div>
                          <ImageFileIcon />
                        </div>
                        <div class="flex-1">
                          <div class="text-[#515251] mb-2">international passport</div>
                          <div class="flex items-center justify-between">
                            <span>257KB</span>
                            <span>Preview</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Loading>
  </div>
</template>

<script setup>
import UserCheckIcon from '@/assets/icons/user-check.svg'
import LocationIcon from '@/assets/icons/location.svg'
import CallIcon from '@/assets/icons/call.svg'
import MailIcon from '@/assets/icons/mail.svg'
import BankIcon from '@/assets/icons/bank.svg'
import CopyableValueCard from '../shared/CopyableValueCard.vue'
import EmployeeList from '../shared/EmployeeList.vue'
import ImageFileIcon from '@/assets/icons/image-file.svg'
import Loading from '@/components/Loading.vue'

import { useQuery } from '@/api/useQuery'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'

const route = useRoute()

const companyId = route.params.slug

const { data, error } = useQuery('ListCompanyExecs', {
  companyId: companyId
})

const selectedUser = ref(null)

watchEffect(() => {
  if (data.value && !selectedUser.value) {
    const { companyExecs } = data.value
    if (companyExecs && companyExecs.length > 0) {
      selectedUser.value = companyExecs[0]
    }
  }
})

const getFullname = (exec) => {
  return exec.title + ' ' + exec.fullName
}
</script>
