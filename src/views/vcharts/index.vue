<template>
  <div class="page-view vcharts">
    <!-- 折线图-->
    <ve-line :data="chartData" :extend="chartExtend" v-bind="echartOption"></ve-line>
  </div>
</template>

<script>
export default {
  name: "vcharts",
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
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
        colors: ['red', 'blue', 'green']
      }
    }
  }
}
</script>

<style scoped>
.page-view {
  padding: 20px;
}
</style>
