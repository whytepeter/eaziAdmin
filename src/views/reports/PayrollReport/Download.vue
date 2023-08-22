<template>
  <Teleport to="body">
    <div class="fixed opacity -z-2">
      <ReportPage id="page1" report-title="Payroll Report" page-no="1" total-pages="3">
        <div class="grid gap-4 h-full">
          <TotalPayrollProcessedChart :chart-height="400" />
          <TotalComplianceProcessedChart />
        </div>
      </ReportPage>
      <ReportPage id="page2" page-no="2" total-pages="3">
        <div>
          <h3 class="mb-3">Latest Transactions</h3>
          <LatestTransactions />
        </div>
      </ReportPage>

      <ReportPage id="page3" page-no="3" total-pages="3">
        <div>
          <h3 class="mb-3">Payroll List</h3>
          <PayrollList />
        </div>
      </ReportPage>
    </div>
  </Teleport>
  <easiButton2 outlined @click="downloadReport"
    >Download
    <template #rightIcon>
      <DownloadIcon />
    </template>
  </easiButton2>
</template>

<script setup>
import TotalPayrollProcessedChart from './TotalPayrollProcessedChart.vue'
import TotalComplianceProcessedChart from './TotalComplianceProcessedChart.vue'
import PayrollList from './PayrollList.vue'
import jsPDF from 'jspdf'
import ReportPage from '../ReportPage.vue'
import LatestTransactions from '../shared/LatestTransactions.vue'
import { htmlToImage } from '../reportUtils'

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
