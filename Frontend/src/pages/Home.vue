<template>
  <MenuVue />
  <div class="bg-light-100 dark:bg-blue-300">
    Home
    <button
      class="bg-white text-gray-900 dark:bg-green-500 dark:text-yellow-400"
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
