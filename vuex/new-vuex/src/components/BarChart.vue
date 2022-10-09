<template>
  <div>
    <v-row>
      <div class="text-h6 ">Costs by categories</div>
    </v-row>
    <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

export default {
  name: 'BarChart',
  components: { Doughnut },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 300
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['paymentsList']),

    paymentsListA () {
      return this.paymentsList
    },
    chartData () {
      const obj = {}
      const labels = [...new Set(this.paymentsListA.map((i) => i.category))]
      this.paymentsListA.map((i) => {
        const categoryEl = i.category
        const valueEl = Number(i.value)
        obj[categoryEl] = (obj[categoryEl] || 0) + valueEl
        return obj
      })
      return {
        labels: labels,
        datasets: [{
          label: 'Costs by categories',
          data: labels.map((i) => {
            return obj[i]
          }),
          backgroundColor: ['#41B883', '#890096', '#00D8FF', '#DD1B16', '#00ff00'],
          hoverOffset: 10
        }]
      }
    }
  }
}
</script>
