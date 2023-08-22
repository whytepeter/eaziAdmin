<template>
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
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500" />
            <span>Active</span>
          </div>

          <easiButton2>Clear Loan</easiButton2>
        </div>
      </div>

      <div class="two-cols">
        <div class="col loan-details info-list-block">
          <h3 class="mb-2 info-list-heading">Loan Details</h3>
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

        <div class="col repayment info-list-block">
          <h3 class="mb-2 info-list-heading">Loan Details</h3>
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

    <div class="loan-activities mt-16">
      <LoanActivities :loan="loan" />
    </div>
  </div>
</template>

<script setup>
import ArrowLeft from '@/assets/icons/arrow-left.svg'
import LoanRepaymentBreakDown from '@/components/Loan/LoanRepaymentBreakDown.vue'
import LoanActivities from '@/components/Loan/LoanActivities.vue'
import { useQuery } from '@/api/useQuery'
import { useRoute } from 'vue-router'

const route = useRoute()

const { slug: companyId, loanId } = route.params

const { data: loanActivities } = useQuery('ListLoanActivity', {
  loanId
})

const loan = {
  _id: '641f150c0b31b3002339fa05',
  companyId: {
    companyAdmin: {
      firstName: 'Peter',
      lastName: 'Whyte',
      email: 'emmanuelwhytepeter@gmail.com',
      __typename: 'CompanyAdmn'
    },
    totalCrAmount: null,
    company: {
      companyName: 'Whyte Creatives',
      companyEmail: null,
      __typename: 'Company'
    },
    __typename: 'CompanyLite'
  },
  creatorId: '63b84d2be5c9c6001c303867',
  type: 'PAYROLL_COVER',
  purpose: '',
  status: 'CUSTOMER_CANCELED',
  termsAndConditions: '',
  termsAndConditionsAccepted: true,
  reasons: {
    CUSTOMER_CANCELED: 'I do not need the loan again'
  },
  loanAmountApplied: 2257902,
  loanAmountPaid: 0,
  totalRepaymentAmount: 2370797.1,
  totalIntrest: 112895.1,
  totalRepaymentPaid: 0,
  duration: 4,
  durationInDays: 28,
  durationEndedAt: '2023-04-22T15:36:44.818Z',
  createdAt: '2023-03-25T15:36:44.831Z',
  updatedAt: '2023-03-27T23:44:18.984Z',
  durationPeriod: 'WEEK',
  employeesDetails: {},
  repaymentBreakDown: [
    {
      status: 'active',
      _id: '641f150c0b31b3002339fa06',
      intrest: 112895.1,
      totalAmount: 2370797.1,
      dueDate: '2023-04-22T15:36:44.818Z'
    }
  ],
  __typename: 'LoanWithCompany'
}
</script>

<style lang="scss" scoped src="./single-loan.scss"></style>
