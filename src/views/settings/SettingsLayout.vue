<template>
  <div>
    <div class="flex justify-center mb-10">
      <div class="tab-links">
        <RouterLink :to="{ name: 'PersonalInfo' }"> Personal Information</RouterLink>
        <RouterLink :to="{ name: 'Users' }"> Users</RouterLink>
        <RouterLink :to="{ name: 'RolesAndPermissions' }"> Roles And Permission</RouterLink>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.tab-links {
  display: flex;
  border: 1.15042px solid #e7e8e7;
  background: #ffffff;
  border-radius: 16px;
  padding: 8px;
  gap: 10px;
  overflow: auto;

  > a {
    outline: none;
    flex: 1;
    background: #f2f1f1;
    border-radius: 8px;
    padding: 6px 8px;
    letter-spacing: 0.25px;
    font-size: 14px;
    white-space: nowrap;

    &.router-link-active {
      background: #11453b;
      color: white;
      font-weight: 500;
      box-shadow: 0px 5.06963px 8px -3.80222px rgba(24, 39, 75, 0.12),
        0px 8.87185px 20px -2.53481px rgba(24, 39, 75, 0.12);
    }
  }
}
</style>
