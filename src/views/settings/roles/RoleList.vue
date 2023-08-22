<template>
  <div>
    <div class="uppercase text-sm text-white bg-primary px-3 py-1 rounded-lg">Roles</div>

    <div class="flex flex-col gap-4 h-96 overflow-y-auto mt-6 text-sm">
      <div
        v-for="role in allRoles"
        :key="role._id"
        @click="$router.push({ query: { id: role._id } })"
        :class="{ 'text-primary font-bold bg-[#F2F1F1]': role._id === $route.query.id }"
        class="py-2 px-3 rounded-xl cursor-pointer capitalize text-dark-700 hover:text-primary hover:font-bold hover:bg-[#F2F1F1]"
      >
        {{ role.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDataStore } from '@/stores/data.js'

const store = useDataStore()
const route = useRoute()
const router = useRouter()

const allRoles = computed(() => store.getAllRoles)
console.log('All Roles', allRoles.value)

onMounted(() => {
  if (route.query && !route.query.id && allRoles.value.length) {
    router.push({ query: { id: allRoles.value[0]._id } })
  }
})
</script>

<style></style>
