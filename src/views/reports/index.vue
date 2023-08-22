<template>
  <div>
    <div class="tab-links-layout">
      <div class="tab-links">
        <RouterLink class="tab-link" :to="{ name: 'PayrollReport' }"> Payroll Report </RouterLink>
        <RouterLink class="tab-link" :to="{ name: 'LoanReport' }">Loan Report </RouterLink>
        <RouterLink class="tab-link" :to="{ name: 'WalletReport' }">Wallet Report </RouterLink>
      </div>
    </div>

    <section class="mt-8">
      <RouterView />
    </section>
  </div>
</template>
