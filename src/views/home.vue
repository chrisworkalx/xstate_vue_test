<template>
  <main id="app">
    <div style="display: flex; justify-content: flex-end">
      <MySteps :service="subreddit" />
    </div>
    <header class="p-4 bg-blue-500">
      <select @change="select($event)">
        <option disabled selected value>Select a subreddit</option>
        <option v-for="subreddit in subreddits" :key="subreddit">
          {{ subreddit }}
        </option>
      </select>
    </header>
    <section v-if="matches('idle')" class="p-6">
      <h1 class="capitalize text-xl font-bold text-gray-900">
        Select a subreddit
      </h1>
    </section>
    <Subreddit v-else :key="subreddit.id" :service="subreddit" />
  </main>
</template>

<script>
import { redditMachine } from "../redditMachine.js";
import { interpret } from "xstate";
import Subreddit from "../components/Subreddit.vue";
import MySteps from "../components/MySteps.vue";

export default {
  name: "app",
  components: {
    Subreddit,
    MySteps,
  },
  data() {
    return {
      redditService: interpret(redditMachine),
      current: redditMachine.initialState,
      subreddits: ["frontend", "reactjs", "vuejs"],
    };
  },
  computed: {
    subreddit() {
      return this.current.context.subreddit;
    },
  },
  created() {
    console.log(redditMachine.initialState, "====redditMachine.initialState");
    this.redditService
      .onTransition((state) => {
        console.log(state, "===state--App.vue");
        this.current = state;
      })
      .start();
  },
  methods: {
    select(event) {
      this.send({ type: "SELECT", name: event.target.value });
    },
    send(event) {
      this.redditService.send(event);
    },
    matches(value) {
      return this.current.matches(value);
    },
  },
};
</script>

<style>
</style>
