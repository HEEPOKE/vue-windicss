<template>
    <div
      class="text-3xl font-bold text-dark-900 text-center cursor-pointer hover:text-purple-500 dark:text-zinc-500 dark:hover:text-purple-700 mt-3"
      @click="Store"
    >
    STORE
    </div>
</template>
<script lang="ts">
export default {
  name: "HeaderVue",
  methods: {
    Store() {
      window.location.reload();
    },
  },
};
</script>
