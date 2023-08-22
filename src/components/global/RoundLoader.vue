<template>
  <main>
    <div
      @click.self="close"
      style="
        z-index: 300;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #032821;
        opacity: 0.95;
      "
      class="inset-0 -z-5 w-full overflow-y-auto"
    >
      <div class="flex justify-center items-center h-screen">
        <div class="lds-dual-ring">
          <!-- <div></div>
            <div></div>
            <div></div>
            <div></div> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const props = defineProps({
  isHeader: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["update"]);
function close() {
  emit("close");
}
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
