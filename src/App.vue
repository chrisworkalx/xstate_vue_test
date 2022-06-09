<template>
  <div>
    <div class="link-wrapper">
      <router-link to="/" exact active-class="active">首页</router-link>
      <router-link to="/test1" exact active-class="active"
        >xstateDemo1</router-link
      >
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  watch: {
    $route() {
      console.log(this.$route);
    },
  },
};
</script>
<style scoped>
.link-wrapper {
  width: 100%;
  padding: 20px;
  background-color: skyblue;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
}
.active {
  font-size: 24px;
  color: #f40;
}
</style>

