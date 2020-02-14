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
      }
    },
    created () {
      this.getMockData ()
    },
    methods: {
      getMockData () {
        this.$_api.test.getUserInfo({ name: 'Tom'}, (err, data) => {
          console.log('err: ', err)
          if (err) return

          // do something
          console.log('res: ', data)
        })
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
