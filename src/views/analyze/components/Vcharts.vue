<template>
  <div class="page-view vcharts">
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
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          data: []
        },
        colors: ['red', 'blue', 'green'],

        // 重新设置提示框
        tooltip: {
          enterable: true, // 允许鼠标进入提示框
          // position: ['50%', '50%'], // 固定提示框位置
          hideDelay: 1000, // 提示框消失的延迟时间 ms
          formatter: (params) => {
            let data = this.chartData.rows[params.dataIndex] || {}
            let blockLossDetail = data.detail || []
            let detailHtml = ''
            blockLossDetail.forEach(item => {
              detailHtml += `<a class="detail-item" href="${item.url}" target="_blank">${item.address}: ${item.lossCount}</a>`
            })

            let html =`
              <div class="auto-tooltip">
                <div>${params.name}</div> <!-- x轴的名称 -->
                <div>
                  <i class="tooltip-dot" style="background-color: ${params.color};"></i><!-- 图例颜色点 -->
                  <span>${params.seriesName}: ${params.value[1]}</span>
                </div>
                <div class="detail-list">${detailHtml}</div>
              </div>`

            return html;
          },
        }
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
      this.$_api.analyze.getBlockLoss({}, (err, res) => {
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

<style lang="scss">
.auto-tooltip {
  .tooltip-dot {
    display:inline-block;
    margin-right:5px;
    width:10px;
    height:10px;
    border-radius:5px;
  }
  .detail-item {
    display: block;
    padding-left: 18px;
    color: theme-color();
  }
}
</style>
