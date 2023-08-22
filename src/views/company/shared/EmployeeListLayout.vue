<template>
  <div class="flex items-start gap-8 admin-list-layout">
    <div class="w-3/12 h-full flex flex-col overflow-hidden">
      <slot name="employeeList" />
    </div>

    <div class="w-9/12 h-full">
      <div class="card card-white h-full">
        <div class="flex gap-8">
          <slot name="selectedEmployeeAvatar">
            <picture class="flex-shrink-0 h-80 w-52 bg-purple-300 rounded-lg"> </picture>
          </slot>
          <div class="flex-1">
            <slot name="selectedEmployeeDetails" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.admin-list-layout {
  height: 440px;
}
</style>
