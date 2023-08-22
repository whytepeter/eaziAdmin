<template>
  <div>
    <div v-if="chartData">
      <div class="flex items-center">
        <div class="mr-12">
          <Pie :data="chartData.chartData" :options="chartOptions" :plugins="chartPlugins" />
        </div>
        <div class="legend flex-shrink-0">
          <div class="legend__item legend__title">
            <div class="legend__item__label">{{ data.total.label }}</div>
            <div class="legend__item__value">{{ formatCurrency(data.total.value) }}</div>
          </div>

          <div v-for="item, index of chartData.legend" :key="`legend-${index}`" :style="{ '--color': item.color }">
            <div class="legend__item__label">{{ item.label }}</div>
            <div class="legend__item__value">{{ item.value }}</div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { computed } from 'vue'
import { formatCurrency } from '@/utils/currency'

const props = defineProps({
  data: {
    type: Object,
  }
})

const chartPlugins = [ChartDataLabels]

ChartJS.register(ArcElement, Tooltip, Legend)


const chartData = computed(() => {
  if (props.data) {
    let { items, total } = props.data;

    let colors = []
    let datasets = []
    let labels = []

    const legend = []

    items.forEach(({ label, value, color }) => {
      let percentage = Number((value / total.value) * 100).toFixed(2)
      datasets.push(percentage)
      labels.push(label)
      colors.push(color)

      legend.push({
        label: label + ` (${percentage}%)`,
        color: color,
        value: formatCurrency(value)
      })
    })

    return {
      chartData: {
        labels: labels,
        datasets: [
          {
            backgroundColor: colors,
            data: datasets
          }
        ]
      },
      legend: legend
    }

  }
  return null
})

const chartOptions = computed(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        color: 'white',
        font: {
          size: 16
        },
        formatter(value) {
          return `${value}%`
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.legend {
  display: grid;
  gap: 12px;

  &__item {
    &__label {
      position: relative;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 99px;
        background: var(--color, gray);
        margin-right: 4px;
      }
    }

    &__value {
      color: var(--color);
      font-weight: bold;
      font-size: 18px;
    }
  }

  &__title {
    .legend__item__label {
      &::before {
        display: none;
      }
    }
  }
}
</style>
