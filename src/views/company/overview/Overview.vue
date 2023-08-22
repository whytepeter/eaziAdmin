<template>
  <div class="grid lg:grid-cols-2 gap-8" v-if="data">
    <section>
      <div class="business-card relative mb-10 rounded-lg flex px-8 pt-8 pb-12">
        <div class="text-white">
          <h3 class="mb-5">{{ company.companyName }}</h3>
          <div class="flex items-end leading-[1] mb-5">
            <span> {{ data.company.registrationType }} </span>
            <span class="border-r border-[#D9EBCD] mx-3 self-stretch"></span>
            <span> Registered </span>
          </div>

          <easiButton2 block class="edit-btn">Edit Business</easiButton2>
        </div>

        <div class="ml-auto">
          <div class="relative">
            <div class="absolute right-[-4px] top-[-4px]">
              <wavy-check />
            </div>
            <div class="w-20 h-20 rounded-full bg-white bg-cover bg-center bg-no-repeat" :style="{
              backgroundImage: `url(${company.logo})`
            }"></div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <company-info-card label="Email">
          <template #icon>
            <MailIcon />
          </template>
          <template #value>
            <a v-if="company.email" :href="`mailto:${company.email}`">{{ company.email }}</a>
          </template>
        </company-info-card>

        <company-info-card label="Registration Date">
          <template #icon>
            <CalendarIcon />
          </template>
          <template #value>
            <p>September 15, 2022</p>
          </template>
        </company-info-card>

        <company-info-card label="Office Address">
          <template #icon>
            <LocationIcon />
          </template>
          <template #value>
            <p>{{ company.address }}</p>
          </template>
        </company-info-card>

        <company-info-card label="September 15, 2022">
          <template #icon>
            <CallIcon />
          </template>
          <template #value>
            <a href="tel:+234 812 8989 700">+{{ company.countryCode }}</a>
          </template>
        </company-info-card>

        <!-- <company-info-card label="Website">
              <template #icon>
                <InternetIcon />
              </template>
              <template #value>
                <a href="www.mamusfoods.com">www.mamusfoods.com</a>
              </template>
            </company-info-card>
  
           
            <company-info-card label="Industry">
              <template #icon>
                <Money2Icon />
              </template>
              <template #value>
                <p>Agriculture</p>
              </template>
            </company-info-card> -->
      </div>
    </section>

    <section class="">
      <div class="h-full flex flex-col">
        <div class="grid gap-4 mb-8">
          <info-value-card label="Branches" :value="data.branchesCount">
            <template #icon>
              <money-icon />
            </template>
          </info-value-card>
          <info-value-card label="No. Employee(s)" :value="data.employeesCount">
            <template #icon>
              <user-check-icon />
            </template>
          </info-value-card>
        </div>
        <RevenueChart :company-id="companyId" />
      </div>
    </section>
  </div>
</template>

<script setup>
import CompanyInfoCard from './CompanyInfoCard.vue'
import InfoValueCard from '@/components/InfoValueCard.vue'
import WavyCheck from '@/assets/icons/wavy-check.svg'
import UserCheckIcon from '@/assets/icons/user-check.svg'
import MoneyIcon from '@/assets/icons/money.svg'
import MailIcon from '@/assets/icons/mail.svg'
import CallIcon from '@/assets/icons/call.svg'
import CalendarIcon from '@/assets/icons/calendar.svg'
// import Money2Icon from '@/assets/icons/money-2.svg'
// import InternetIcon from '@/assets/icons/internet.svg'
import LocationIcon from '@/assets/icons/location.svg'
import { useRoute } from 'vue-router'
import { computed, inject } from 'vue'
import RevenueChart from './RevenueChart.vue'

const route = useRoute()
const companyId = route.params.slug


const { data } = inject('companySummary',)

const company = computed(() => {
  if (data) {
    return data.value.company.company
  }
  return undefined
})

</script>

<style lang="scss" scoped>
.business-card {
  background-color: #11453b;
  background-image: url('@/assets/img/green-waves.png');
  background-position: center;
}

.edit-btn {
  color: #11453b;
  background-color: #d9ebcd;
  width: 100%;

  &:hover {
    background-color: #d9ebcd !important;
  }
}
</style>
