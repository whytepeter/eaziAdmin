<template>
    <div class="flex copyable-card" :class="[noPadding ? '' : 'padded']">
        <div class="copyable-icon flex-shrink-0">
            <slot name="icon" />
        </div>
        <div class="flex-1">
            <div class="copyable-label">
                {{ label }}
            </div>
            <div class="copyable-value">
                <slot name="value">
                    {{ value }}
                </slot>
            </div>
        </div>
        <div class="flex-shrink-0">
            <button class="text-xl">
                <CopyIcon class="w-4" />
            </button>
        </div>
    </div>
</template>

<script setup>
import CopyIcon from '@/components/icons/CopyIcon.vue';
defineProps({
    label: String,
    value: String,
    noPadding: Boolean
})

</script>

<style lang="scss">  .copyable-card {
      background: white;
      border-radius: 8px;
      gap: 10px;
  }

  .copyable-card.padded {
      padding: 12px 20px;
  }

  .copyable-icon {
      background: #D9EBCD;
      width: 32px;
      height: 32px;
      display: grid;
      border-radius: 99px;
      place-items: center;
  }

  .copyable-label {
      color: #515251;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 1px;

  }

  .copyable-value {
      color: #292A29;

      a {
          color: #359AA0;
          text-decoration: underline;
      }

  }
</style>