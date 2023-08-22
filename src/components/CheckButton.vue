<template>
  <div>
    <button class="check-btn" :class="{ checked: checked === true }" @click="toggleChecked">
      <CheckIcon class="check-icon" />
    </button>
  </div>
</template>

<script setup>
import CheckIcon from '@/assets/icons/check.svg'

const props = defineProps(['checked', 'disabled'])
const emit = defineEmits('update:checked')

// Todo: keep an internal checked state too

const toggleChecked = () => {
  emit('update:checked', !props.checked)
}
</script>

<style lang="scss" scoped>
.check-icon {
  visibility: hidden;
}

.check-btn {
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(70, 79, 96, 0.16),
    0px 2px 5px rgba(89, 96, 120, 0.1);
  border-radius: 4px;
  height: 18px;
  width: 18px;
  display: grid;
  place-items: center;

  &:hover {
    color: #b5b6b5;

    .check-icon {
      visibility: visible;
    }
  }

  &:active {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(70, 96, 82, 0.16),
      0px 0px 0px 4px rgba(1, 237, 95, 0.36), 0px 2px 5px rgba(89, 120, 101, 0.1);
  }

  &.checked {
    background: #11453b;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 0px 1px #004a37,
      0px 2px 5px rgba(34, 230, 124, 0.12), inset 0px 1px 0px #249376;
    color: white;

    .check-icon {
      visibility: visible;
    }
  }
}
</style>
