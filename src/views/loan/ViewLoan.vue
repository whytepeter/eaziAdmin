<template>
  <div class="text-sm text-dark-600 flex gap-1 items-center">
    <span @click="$router.go(-1)" class="cursor-pointer hover:underline hover:text-dark-800"
      >Loan Management</span
    >/
    <span class="capitalize"> {{ companyName }}</span>
  </div>

  <div class="w-full md:w-10/12 l mx-auto mt-6 flex flex-col gap-6">
    <div class="grid grid-cols-12 gap-4 md:gap-8 place-content-center items-center">
      <!-- ///// Loan Card ///// -->
      <div
        class="wave col-span-12 sm:col-span-8 text-white p-6 pb-16 md:px-8 rounded-2xl border bg-primary flex justify-between"
      >
        <div>
          <h5 class="font-bold text-2xl capitalize">
            {{ companyName }}
          </h5>
          <div class="mt-2 flex items-center gap-2 text-sm sm:text-base">
            <span>Company Account</span> | <span>Registered</span>
          </div>
        </div>

        <div
          class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden bg-tertiary rounded-full"
        >
          <img
            v-if="loan && loan.companyId.company.logo"
            :src="loan && loan.companyId.company.logo"
            alt=""
            class="object-cover h-full w-full"
          />
          <div
            v-else
            class="w-full h-full flex items-center justify-center uppercase text-primary text-2xl font-bold"
          >
            {{ initials(loan && loan.companyId.company.companyName) }}
          </div>
        </div>
      </div>

      <!-- ///// Loan Credit Score ///// -->
      <div class="col-span-12 sm:col-span-4">
        <CreditScore :score="loan && loan.creditReport" />
      </div>
    </div>

    <LoanDetails :loan="loan" />
    <LoanActivities :loan="loan" />

    <easiLoader v-if="loading" />
  </div>
</template>

<script setup>
import CreditScore from '@/components/Loan/LoanCreditScore.vue'
import LoanDetails from '@/components/Loan/LoanDetails.vue'
import LoanActivities from '../../components/Loan/LoanActivities.vue'

import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDataStore } from '@/stores/data.js'
import { helperFunctions } from '@/composable/helperFunctions'

const { initials } = helperFunctions
const store = useDataStore()
const route = useRoute()
const router = useRouter()
const loading = ref(false)

const allLoans = computed(() => store.getAllLoans)
const loan = computed(() => {
  const id = route.params.id
  return allLoans.value && allLoans.value.find((el) => el._id == id)
})

const companyName = computed(() => {
  const name = loan.value && loan.value.companyId.company.companyName
  return name ? name : 'N/A'
})

console.log(loan.value)
</script>

<style scope>
.wave {
  background-image: url('@/assets/img/wave.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
