<template>
  <MenuVue />
  <div class="bg-light-100 dark:bg-blue-300 mt-10">
    Home
    <button
      class="bg-light-400 border border-light-300 hover:bg-gray-200 dark:bg-dark-900 dark:border-dark-800 dark:hover:bg-dark-700"
    >
      aaa
    </button>
  </div>
</template>
<script lang="ts">
import MenuVue from "../components/navbar/Index.vue";

export default {
  name: "HomeVue",
  components: {
    MenuVue,
  },
};
</script>
