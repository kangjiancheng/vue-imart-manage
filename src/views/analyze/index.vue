<template>
  <div class="page-view analyze">
    <div class="section-box">
      <div class="section-title">丢块量</div>
      <div class="section-body">
        <vcharts />
      </div>
    </div>

    <div class="section-box ">
      <div class="section-title">{{ discussionNums }} 条评论</div>
      <div class="section-body">
        <discussion-list :discussion-nums.sync="discussionNums"/>
      </div>
    </div>

  </div>
</template>

<script>
import Vcharts from "./components/Vcharts"
import DiscussionList from "./components/DiscussionList"
export default {
  name: "analyze",
  components: {
    DiscussionList,
    Vcharts
  },
  data () {
    return {
      discussionNums: 0,
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.page-view {
  .section-box {
    .section-title {
      padding-left: 10px;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      font-weight: bold;
      border-left: 5px solid theme-color();
    }
    .section-body {
      padding: 20px;
    }

    &:first-child {
      padding-top: 10px;
      .section-body {
        padding: 0 20px;
      }
    }
  }
}
</style>
