<template>
  <div
    class="text-3xl font-bold text-dark-900 text-center cursor-pointer hover:text-purple-500 dark:text-zinc-500 dark:hover:text-purple-700 mt-3"
    @click="Add"
  >
    ADD
  </div>
</template>
<script lang="ts">
export default {
  name: "HeaderVue",
  methods: {
    Add() {
      window.location.reload();
    },
  },
};
</script>
