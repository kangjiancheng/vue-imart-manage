<template>
  <div class="vcharts">
    <!-- 折线图-->
    <ve-line
      :data="chartData"
      :extend="chartExtend"
      :loading="loading"
      :data-empty="dataEmpty"
      v-bind="echartOption">
    </ve-line>
  </div>
</template>

<script>
export default {
  name: "vcharts",
  data () {
    return {
      chartData: {
        columns: [],
        rows: []
      },

      // 对已配置好的内部属性进行单独的设置： https://v-charts.js.org/#/props?id=extend-%e5%b1%9e%e6%80%a7
      chartExtend: {
        series (v) {
          v.forEach(i => {
            i.smooth = false // 去掉平滑
          })
          return v
        }
      },

      // echart 配置项： https://www.echartsjs.com/zh/option.html
      echartOption: {
        title: {
          text: '折线图',
          subtext: '纯属虚构'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        colors: ['red', 'blue', 'green']
      },
      loading: false,
      dataEmpty: true
    }
  },
  mounted () {
    this.getChartData ()
  },
  methods: {
    // 获取图表数据
    getChartData () {
      this.loading = true
      this.$_api.chart.getVchartLine({}, (err, res) => {
        this.loading = false
        this.dataEmpty = true
        if (err) return

        this.chartData.columns = res.columns || []
        this.chartData.rows = res.rows || []
        this.dataEmpty = !res.rows.length
      })
    },
  }
}
</script>

<style scoped>
.page-view {
}
</style>
