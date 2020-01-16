<template>
  <div class="about">
    <!-- default solid 'fas'-->
    <font-awesome-icon icon="user-secret" />
    <font-awesome-icon :icon="['fas', 'user-secret']" />

    <font-awesome-icon :icon="['far', 'address-book']" class="address-book" />

    <font-awesome-icon :icon="['fab', 'github']" />

    <svg-sprite-icon icon="im-icon-heart-solid" />

  </div>
</template>

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
