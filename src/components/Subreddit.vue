<template>
  <section class="p-6">
    <div
      v-if="matches('failure')"
      class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
    >
      <p>Could not load posts</p>
      <button
        @click="send('RETRY')"
        class="bg-blue-500 hover:bg-blue-700 mt-4 text-white px-4 py-2 rounded-full"
      >
        Retry
      </button>
    </div>
    <div v-if="matches('loading')">Loading...</div>
    <template v-if="matches('loaded')">
      <header>
        <h3 class="capitalize text-xl font-bold text-gray-900">
          {{ context.subreddit }}
        </h3>
        <small>
          Last updated: {{ context.lastUpdated | formatDateTime }}
          <button
            @click="send('REFRESH')"
            class="bg-blue-500 hover:bg-blue-700 text-xs ml-1 text-white px-2 py-1 rounded-full"
          >
            REFRESH
          </button>
        </small>
      </header>
      <ul>
        <li v-for="post in context.posts" :key="post.id" class="p-4 border-b-2">
          <span v-html="post.title"></span>
        </li>
      </ul>
    </template>
  </section>
</template>

<script>
export default {
  name: "subreddit",
  props: ["service"],
  computed: {
    context() {
      return this.service.state.context;
    },
  },
  methods: {
    send(event) {
      this.service.send(event);
    },
    matches(value) {
      return this.service.state.matches(value);
    },
  },
  filters: {
    formatDateTime(dt) {
      return new Intl.DateTimeFormat(undefined, {
        dateStyle: "short",
        timeStyle: "medium",
      }).format(dt);
    },
  },
};
</script>

<style>
</style>