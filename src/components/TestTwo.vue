<template>
  <div>
    <h3>{{ title }}</h3>
    <button @click="handleClick('click')">click</button>
    <button @click="handleClick('press')">press</button>
    <button @click="handleClick('keyup')">keyup</button>
  </div>
</template>

<script>
import { interpret } from "xstate";
import lightMachine from "../util/xstate2";
export default {
  name: "TestDemo2",
  data() {
    return {
      title: "xstateTwo",
      service: interpret(lightMachine),
    };
  },
  watch: {
    "service.state": {
      handler(v) {
        console.log(v);
      },
      deep: true,
    },
  },
  methods: {
    handleClick(stepEvent) {
      this.service.send(stepEvent);
    },
  },
};
</script>