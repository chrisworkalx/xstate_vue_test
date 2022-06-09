<template>
  <div>
    <h4>{{ title }}</h4>
    <button @click="handleClick">出发xstate工作流</button>
    <hr />
  </div>
</template>
<script>
import lightMachine from "../util/xstate1";
const events = ["click", "press", "keyup"];
let startX = 0;
export default {
  name: "testDemo",
  data() {
    return {
      title: "基本xstate使用",
      initState: lightMachine.initialState,
    };
  },
  computed: {
    curState: {
      get() {
        return this.initState;
      },
      set(newState) {
        console.log(newState, "==newState");
        this.initState = newState;
      },
    },
  },
  methods: {
    handleClick() {
      console.log(startX, "==startX");
      console.log(events[startX % 3], "==events[startX % 3]");
      this.curState = lightMachine.transition(
        this.curState,
        events[startX % 3]
      );
      startX++;
    },
  },
};
</script>
<style  scoped>
div {
  background-color: #ccc;
  padding: 20px;
}
h4 {
  color: #fff;
}
</style>