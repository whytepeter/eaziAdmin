<template>
  <div>
    <div class="w-10/12 mx-auto">
      <div class="card card-white loan-details-card">
        <div class="">
          <button @click="$router.back()">
            <ArrowLeft />
          </button>
        </div>

        <div class="loan-details-heading flex justify-between items-center mb-6">
          <h3 class="loan-type">Enterprise Loan</h3>

          <div class="flex gap-8 items-center">
            <div class="flex items-center gap-2 text-[#219653]">
              <span class="w-2 h-2 rounded-full bg-[#219653]" />
              <span>Credit Score: 80</span>
            </div>

            <easiButton2 outlined>View Documents</easiButton2>
            <easiButton2 outlined>Reject</easiButton2>
            <easiButton2>Approve</easiButton2>
          </div>
        </div>

        <h3 class="info-list-heading">Loan Details</h3>
        <div class="two-cols">
          <div class="col">
            <div class="info-list">
              <div class="info-list-item">
                <span>Applicant</span>
                <span>Mamus Food</span>
              </div>
              <div class="info-list-item">
                <span>Applicant</span>
                <span>Mamus Food</span>
              </div>
              <div class="info-list-item">
                <span>Applicant</span>
                <span>Mamus Food</span>
              </div>
            </div>
          </div>

          <div class="cols-seperator" />

          <div class="col repayment">
            <div class="info-list">
              <div class="info-list-item">
                <span>Applicant</span>
                <span>Mamus Food</span>
              </div>
              <div class="info-list-item">
                <span>Applicant</span>
                <span>Mamus Food</span>
              </div>
              <div class="info-list-item">
                <span>Applicant</span>
                <span>Mamus Food</span>
              </div>
            </div>
          </div>
        </div>

        <div class="loan-purpose">
          <div>Loan Purpose</div>
          <p>To Pay Employee For September, 2022</p>
        </div>

        <LoanRepaymentBreakDown />

        <div class="view-loan-contract">
          <div>View loan contract</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowLeft from '@/assets/icons/arrow-left.svg'
import LoanRepaymentBreakDown from '@/components/Loan/LoanRepaymentBreakDown.vue'
</script>

<style lang="scss" scoped src="./single-loan.scss" />
