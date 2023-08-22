<template>
  <Teleport to="body">
    <div class="fixed opacity-0">
      <ReportPage id="page1" report-title="Loan Report" page-no="1" total-pages="2">
        <div class="flex gap-4 mb-8 flex-parent">
          <InfoValueCard label="total" value="26,415,998">
            <template #icon> <CalendarIcon /> </template>
          </InfoValueCard>
          <InfoValueCard label="Active" value="26,415,998" fill="blue">
            <template #icon>
              <LoanIcon />
            </template>
          </InfoValueCard>
          <InfoValueCard label="Completed" value="26,415,998" fill="green">
            <template #icon>
              <CheckDoubleIcon />
            </template>
          </InfoValueCard>
          <InfoValueCard label="cleared" value="26,415,998">
            <template #icon>
              <CheckBigIcon />
            </template>
          </InfoValueCard>
        </div>
        <div class="flex flex-parent gap-4 mb-8">
          <InfoValueCard label="rejected" value="26,415,998">
            <template #icon>
              <CalendarIcon />
            </template>
          </InfoValueCard>
          <InfoValueCard label="overdues" value="26,415,998" fill="red">
            <template #icon>
              <OverdueIcon />
            </template>
          </InfoValueCard>
          <InfoValueCard label="Blacklisted" value="26,415,998">
            <template #icon>
              <CalendarIcon />
            </template>
          </InfoValueCard>
        </div>
        <LoanDisbursedChart />
        <LoanRevenueChart />
      </ReportPage>
      <ReportPage id="page2" page-no="2" total-pages="2">
        <LoanTransactions />
      </ReportPage>
    </div>
  </Teleport>
  <DownloadButton @click="downloadReport" />
</template>

<script setup>
import ReportPage from '../ReportPage.vue'
import DownloadButton from '../DownloadButton.vue'
import LoanDisbursedChart from './LoanDisbursedChart.vue'
import LoanRevenueChart from './LoanRevenueChart.vue'
import InfoValueCard from '@/components/InfoValueCard.vue'
// icons
import CheckBigIcon from '@/assets/icons/check-big.svg'
import LoanIcon from '@/assets/icons/loan.svg'
import CheckDoubleIcon from '@/assets/icons/check-double-big.svg'
import CalendarIcon from '@/assets/icons/calendar.svg'
import OverdueIcon from '@/assets/icons/overdue.svg'

import { htmlToImage } from '../reportUtils'
import jsPDF from 'jspdf'
import LoanTransactions from './LoanTransactions.vue'

const downloadReport = async () => {
  console.log('downloading report...')
  const [page1, { width: imageWidth, height: imageHeight }] = await htmlToImage('#page1')
  const doc = new jsPDF({
    unit: 'px',
    format: [imageWidth, imageHeight]
  })

  doc.addImage(page1, 'JPEG', 0, 0, imageWidth, imageHeight)
  doc.addPage()

  const [page2] = await htmlToImage('#page2')
  doc.addImage(page2, 'JPEG', 0, 0, imageWidth, imageHeight)

  doc.save('loan-report.pdf')
}
</script>

<style lang="scss" scoped>
.flex-parent {
  > * {
    flex: 1;
  }
}
</style>
