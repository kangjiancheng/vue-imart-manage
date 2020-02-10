<template>
  <div class="page-view echarts">

    <!-- 折线图-->
    <div ref="line-chart" class="im-chart line-chart"></div>

  </div>
</template>

<script>
export default {
  name: "echarts",
  data () {
    return {
      imChart: null, // echart 实例
      chartData: [], // 图表数据
      chartOption: {
        title: {
          text: '纯 Echarts 折线图堆叠',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [], // TODO: 图例列表
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [] // TODO: 横坐标列表值
        },
        yAxis: {
          type: 'value'
        },
        series: [], // TODO: 纵坐标列表值
      },
    }
  },
  mounted () {
    this.initChart()
    this.getChartData()
  },
  destroyed () {
    window.removeEventListener("resize", this.chartResize)
  },
  methods: {
    // 初始化图表
    initChart () {
      let chartDom = this.$refs['line-chart']
      // 基于准备好的dom，初始化echarts实例
      this.imChart = this.$_echarts.init(chartDom)
      // 绘制图表
      this.imChart.setOption(this.chartOption)

      // 窗口对象变化时，改变图表布局
      window.addEventListener("resize", this.chartResize)
    },

    chartResize () {
      this.imChart.resize()
    },

    // 获取图表数据
    getChartData () {
      this.$_api.chart.getEchartLine({}, (err, res) => {
        if (err) return
        this.chartData = res || []
        this.updateChart()
      })
    },

    // 更新图表
    updateChart () {
      // 获取横坐标列表
      let xAxisData = this.chartData.map(item => item['xAxis'])

      // 获取图例
      let legendData = Object.keys(this.chartData[0] || {})
      // 去掉横坐标名字
      if (legendData.includes('xAxis')) legendData.splice(legendData.indexOf('xAxis'), 1)

      // 规范每种图例对应的数据格式
      let series = []
      legendData.forEach((legend, index) => {
        series[index] = {
          name: legend,
          type: 'line',
          data: this.chartData.map(item => item[legend]) // 返回每个图例对应的 纵坐标值 列表
        }
      })

      // 需要更新的选项https://cn.vuejs.org/resources/themes.html
      this.chartOption.xAxis.data = xAxisData
      this.chartOption.legend.data = legendData
      this.chartOption.series = series

      // 更新
      this.imChart.setOption(this.chartOption)
    },
  }
}
</script>

<style scoped>
.page-view {
  padding: 20px;
}
.line-chart {
  width: 100%;
  height: 300px;
}
</style>
