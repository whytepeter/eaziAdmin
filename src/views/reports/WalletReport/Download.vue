<template>
  <Teleport to="body">
    <div class="fixed opacity-0 -z-2">
      <ReportPage id="page1" report-title="Wallet Report" page-no="1" total-pages="3">
        <div class="grid gap-4">
          <TransactionChart :data="avgTransactionFreq.daily" amount="141,560,334.03" frequency="Daily" />
          <TransactionChart :data="avgTransactionFreq.monthly" amount="141,560,334.03" frequency="Monthly" />
        </div>
      </ReportPage>

      <ReportPage id="page2" page-no="2" total-pages="3">
        <div class="grid gap-4">
          <TransactionChart :data="avgTransactionFreq.yearly" amount="141,560,334.03" frequency="Yearly" />
          <!-- <TopupChart /> -->
        </div>
      </ReportPage>

      <ReportPage id="page3" page-no="3" total-pages="3">
        <div class="grid gap-4">
          <!-- <WithdrawalChart /> -->
          <LatestTransactions />
        </div>
      </ReportPage>
    </div>
  </Teleport>
  <DownloadButton outlined @click="downloadReport" />
</template>

<script setup>
import jsPDF from 'jspdf'
import ReportPage from '../ReportPage.vue'
import { htmlToImage } from '../reportUtils'
import TransactionChart from './TransactionChart.vue'
// import TopupChart from './TopupChart.vue'
// import WithdrawalChart from './WithdrawalChart.vue'
import LatestTransactions from '../shared/LatestTransactions.vue'
import DownloadButton from '../DownloadButton.vue'

const avgTransactionFreq = {
  daily: {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [40, 20, 12, 20, 50, 120, 55],
        backgroundColor: ['#11453B']
      }
    ],
    borderColor: 'green'
  },

  monthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [40, 20, 12, 20, 50, 120, 55, 12, 20, 50, 120, 55, 89],
        backgroundColor: ['#11453B']
      }
    ],
    borderColor: 'green'
  },

  yearly: {
    labels: ['1996', '2005', '2011', '2020', '2035', '2050'],
    datasets: [
      {
        data: [40, 20, 12, 20, 50, 120, 55],
        backgroundColor: ['#11453B']
      }
    ],
    borderColor: 'green'
  }
}

const downloadReport = async () => {
  const [page1, { width: imageWidth, height: imageHeight }] = await htmlToImage('#page1')
  const doc = new jsPDF({
    unit: 'px',
    format: [imageWidth, imageHeight]
  })

  doc.addImage(page1, 'JPEG', 0, 0, imageWidth, imageHeight)
  doc.addPage()

  const [page2] = await htmlToImage('#page2')
  doc.addImage(page2, 'JPEG', 0, 0, imageWidth, imageHeight)
  doc.addPage()

  const [page3] = await htmlToImage('#page3')
  doc.addImage(page3, 'JPEG', 0, 0, imageWidth, imageHeight)

  doc.save('payroll-report.pdf')

  return
}
</script>

<style lang="scss" scoped>
.report-container {
  width: 700px;
  height: 800px;
}

.report-horizontal-padding {
  @apply p-8;
}
</style>
