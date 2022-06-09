<template>
  <div>
    <h1>{{ title }}</h1>
    <h2 v-if="matches('loading')">红红火火</h2>
    <div style="height: 300px">
      <el-steps direction="vertical" :active="active">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step
          title="步骤 3"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: "mySteps",
  data() {
    return {
      title: "测试我的step",
    };
  },
  props: ["service"],
  methods: {
    send(event) {
      this.service.send(event);
    },
    matches(value) {
      // console.log(this.service, "===this.service");
      return this?.service?.state?.matches(value);
      // return false;
    },
  },
  computed: {
    context() {
      return this.service.state.context;
    },
    active() {
      console.log(this?.service?.state, "====myVue");
      let activeKey = 1;
      switch (this?.service?.state?.value) {
        case "loading":
          activeKey = 1;
          break;
        case "loaded":
          activeKey = 2;
          break;
        case "failure":
          activeKey = 3;
          break;
        default:
          break;
      }
      console.log(activeKey, "==activeKey");
      return activeKey;
    },
  },
};
</script>