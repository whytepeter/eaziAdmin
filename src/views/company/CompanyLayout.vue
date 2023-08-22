<template>
  <section>
    <div v-if="isLoading">
      <div class="grid place-items-center py-16 px-4">
        <Spinner />
      </div>
    </div>
    <div v-else-if="data">
      <div class="breadcrumbs flex items-center gap-1 mb-8">
        <RouterLink :to="{ name: 'CompanyList' }">Company Management</RouterLink>
        <span class="seperator">/</span>
        <RouterLink :to="{
          name: 'CompanyOverview',
          params: {
            slug: companyId
          }
        }">{{ companyName }}</RouterLink>
      </div>
      <div class="tab-links-layout mb-10">
        <div class="tab-links">
          <RouterLink :to="{ name: 'CompanyOverview', params: { slug: $route.params.slug } }">
            Overview</RouterLink>
          <RouterLink :to="{ name: 'CompanyAdmins', params: { slug: $route.params.slug } }">
            Admin</RouterLink>
          <RouterLink :to="{ name: 'CompanyDirectors', params: { slug: $route.params.slug } }">
            Directors</RouterLink>
          <RouterLink :to="{ name: 'CompanyEmployees', params: { slug: $route.params.slug } }">
            Employees</RouterLink>
          <RouterLink :to="{ name: 'CompanyWallet', params: { slug: $route.params.slug } }">
            Wallet</RouterLink>
          <RouterLink :to="{ name: 'CompanyPayroll', params: { slug: $route.params.slug } }">
            Payroll</RouterLink>

          <RouterLink :to="{ name: 'CompanyLoan', params: { slug: $route.params.slug } }">
            Loan</RouterLink>

          <RouterLink :to="{ name: 'CompanyDocuments', params: { slug: $route.params.slug } }">
            Documents</RouterLink>
        </div>
      </div>
      <router-view />
    </div>

  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed, provide } from 'vue';
import { useQuery } from '@/api/useQuery';
import Spinner from '@/components/Spinner.vue';

const route = useRoute()
const companyId = route.params.slug

const { data, isLoading, error } = useQuery('GetCompanySummary', {
  companyId: companyId
})

const companyName = computed(() => {
  if (data.value) {
    return data.value.company.company.companyName
  }
  return null
})

provide('companySummary', { data, isLoading, error })


</script>
<style scoped lang="scss">
.breadcrumbs {
  color: #8d8e8d;

  a {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: #8d8e8d;

    &:hover {
      text-decoration: underline;
    }
  }

  .seperator {
    display: inline-block;
    margin: 0 4px;
  }
}
</style>
