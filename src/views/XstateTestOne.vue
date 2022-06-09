<template>
  <div>
    <h1>{{ title }}</h1>
    <TestOne />
    <hr />
    <TestTwo />
  </div>
</template>
<script>
import TestOne from "../components/TestOne";
import TestTwo from "../components/TestTwo";
export default {
  name: "XstateTestOne",
  components: {
    TestOne,
    TestTwo,
  },
  data() {
    return {
      title: "XstateTestOne",
    };
  },
};
</script>
<style  scoped>
</style>