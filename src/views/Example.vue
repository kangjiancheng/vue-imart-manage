<template>
  <div class="example">
    <dl>
      <dt>font-awesome</dt>
      <dd>
        <!-- default solid 'fas'-->
        <font-awesome-icon icon="user-secret" />
        <font-awesome-icon :icon="['fas', 'user-secret']" />

        <font-awesome-icon :icon="['far', 'address-book']" class="address-book" />

        <font-awesome-icon :icon="['fab', 'github']" />
      </dd>

      <dt>阿里iconfont</dt>
      <dd>
        <i class="iconfont im-icon-web-logo"></i>
        <svg-sprite-icon icon="im-icon-heart-solid" />
      </dd>

      <dt>date moment</dt>
      <dd>
        new Date(): {{ new Date() }} -> {{ $_moment(new Date()).format('YYYY-MM-DD HH:mm:ss') }}
      </dd>
    </dl>
  </div>
</template>

<script>
  export  default {
    name: 'example',
    data () {
      return {
        mockData: [],
        cancelHttp: null,
      }
    },
    created () {
      this.getMockData ()
    },
    methods: {
      getMockData () {
        let self = this
        this.$_api.test.getUserInfo({ name: 'Tom'}, {
          cancelToken: new this.$axios.CancelToken(function executor(cancel) {
            // executor 函数接收一个 cancel 函数作为参数
            self.cancelHttp = cancel;
          }),
          timeout: 20000,
        }, (err, data) => {
          console.log('err: ', err)
          if (err) return

          // do something
          console.log('res: ', data)
        })
      },

      // 取消 ajax 请求
      httpCancel () {
        this.cancelHttp()
      }
    },
  }
</script>

<style lang="scss" scoped>
  .example {
    overflow: auto;
  }
  dl {
    margin-left: 20px;
  }
  dt {
    margin: 20px 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
  }
  h3 {
    margin-top: 50px;
  }
  .fa-user-secret {
    font-size: 20px;
    color: red;
  }

  .address-book {
    font-size: 18px;
    color: blue;
  }
</style>
