<template>
  <div class="about">
    <!-- default solid 'fas'-->
    <font-awesome-icon icon="user-secret" />
    <font-awesome-icon :icon="['fas', 'user-secret']" />

    <font-awesome-icon :icon="['far', 'address-book']" class="address-book" />

    <font-awesome-icon :icon="['fab', 'github']" />

    <i class="iconfont im-icon-web-logo"></i>
    <svg-sprite-icon icon="im-icon-heart-solid" />

  </div>
</template>

<script>
  export  default {
    name: 'about',
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
  .about {
    text-align: center;
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
