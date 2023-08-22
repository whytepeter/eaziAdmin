<template>
  <main>
    <button
      @click="link.length ? $router.push({ name: link }) : $router.go(-1)"
      class="font-medium focus:outline-none text-sm"
      :class="color"
    >
      <i class="fas fa-angle-left mr-2 cursor-pointer"></i> Back
    </button>
  </main>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "text-dark-800",
  },
});
</script>

<style></style>
