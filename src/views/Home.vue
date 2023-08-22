<template>
  <div style="margin: 0" id="emailTemplate" class="">
    <div class="max-w-md mx-auto mt-[10vh]">
      <h3 class="text-4xl">Hello 👋</h3>
      <div class="home-btns grid gap-4 mt-10">
        <easiButton block @click="$router.push({ name: 'Dashboard' })">Enter dashboard</easiButton>
        <easiButton block @click="$router.push({ name: 'Login' })">Login</easiButton>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
