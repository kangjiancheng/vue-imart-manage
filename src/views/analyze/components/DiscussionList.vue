<template>
  <div class="discussion-list">
    <div class="input-box">
      <el-input
        v-model="inputText"
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 10 }"
        clearable
        placeholder="有什么想法，请说啊～～～">
      </el-input>
      <div class="input-footer">
        <el-button type="primary" size="medium" :loading="loading" :disabled="!inputText || loading" @click="handlePublish">发表</el-button>
      </div>
    </div>

    <div class="comment-list">
      <div
        class="comment-item"
        v-for="(item, index) in discussionList"
        :key="index">
        <div class="comment-header">
          <span class="comment-author">{{ item.author }}</span>
          <span class="comment-time">{{ item.time }}</span>
        </div>
        <div class="comment-body">
          <span class="comment-text">{{ item.text }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "discussion-list",
  data () {
    return {
      inputText: '',
      userName: '用户',
      userID: '',

      discussionList: [],
      loading: false,
    }
  },
  mounted () {
    this.getUserID()
    this.getDiscussionList()
    this.setDiscussionNums()
  },
  methods: {
    getUserID () {
      this.userID = localStorage.getItem('prophet-comment-user-id')
      if(!this.userID) {
        this.userID = Math.floor(Date.now() / 1000)
        localStorage.setItem('prophet-comment-user-id', this.userID)
      }
    },

    getDiscussionList () {
      this.$_api.analyze.getDiscussionList({}, (err, res) => {
        if (err) return

        this.discussionList = Array.isArray(res) && res || []
        this.setDiscussionNums()
      })
    },

    // 发表
    handlePublish () {
      let params = {
        author: this.userName + this.userID,
        time: new Date(),
        text: this.inputText,
      }

      this.loading = true
      this.$_api.analyze.publishDiscussion(params, (err, res) => {
        this.loading = false
        if (err) return

        this.discussionList.push(params)
        this.setDiscussionNums()
        this.inputText = ''
      })

    },
    setDiscussionNums () {
      this.$emit('update:discussionNums', this.discussionList.length)
    }
  }
}
</script>

<style scoped lang="scss">
.discussion-list {
  max-width: 600px;

  .input-footer {
    margin-top: 20px;
    text-align: right;
  }

  .comment-list {
    margin-top: 20px;
    .comment-item {
      padding: 20px 0;
      border-top: 1px solid rgba(0, 0, 0, .1);
      font-size: 14px;

      .comment-header {
        margin-bottom: 10px;
        vertical-align: middle;
      }

      .comment-author {
        margin-right: 10px;
        color: rgba(0, 0, 0, .9);
      }
      .comment-time {
        color: rgba(0, 0, 0, .3);
        font-size: 12px;
      }

      .comment-text {
        color: rgba(0, 0, 0, .6);
      }
    }
  }
}
</style>