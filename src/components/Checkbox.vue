<template>
  <div>
    <label>
      <input type="checkbox" class="hidden" />
      <div class="checkbox">
        <CheckIcon class="check-icon" />
      </div>
    </label>
  </div>
</template>

<script setup>
import CheckIcon from '@/assets/icons/Check.svg'
</script>

<style lang="scss" scoped>
.checkbox {
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(70, 79, 96, 0.16),
    0px 2px 5px rgba(89, 96, 120, 0.1);
  border-radius: 4px;
  height: 16px;
  width: 16px;
  display: grid;
  place-items: center;
}

.check-icon {
  visible: hidden;
}
label input:checked ~ .checkbox .check-icon {
  visibility: visible;
}
</style>
