<template>
  <form @submit.prevent="$emit('submit', { username })">
    <p class="mb-8 text-center text-[#292A29] font-bold">Please input your username</p>
    <div class="mb-6">
      <easiTextInput v-model="username" label="Username" autofocus required>
        <template #append>
          <PersonIcon />
        </template>
      </easiTextInput>
      <!-- <TextInput label="Username" placeholder="Username" required>
                <template #prefix>
                  <PersonIcon />
                </template>
        </TextInput> -->
    </div>
    <easiButton2 block> Take me in</easiButton2>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import PersonIcon from './PersonIcon.vue'

const username = ref('')
</script>

<style lang="scss" scoped></style>
