<template>
  <div class="relative">
    <Menu>
      <MenuButton>
        <ThreeDots />
      </MenuButton>
      <MenuItems
        class="absolute left-0 text-[14px] leading-[16px] bg-white py-3 px-3 rounded-xl shadow"
      >
        <slot>
          <MenuItem
            v-for="(opt, index) of options"
            :key="`kebab-menu-option-${index}`"
            :label="opt.label"
          >
            <template #icon>
              <component :is="opt.icon" />
            </template>
          </MenuItem>
        </slot>
      </MenuItems>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import MenuItem from './MenuItem.vue'
import ThreeDots from '@/assets/icons/three-dots.svg'

defineProps({
  options: [Object]
})
</script>

<style lang="scss" scoped></style>
