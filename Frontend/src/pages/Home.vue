<template>
  <MenuVue />
  <div class="bg-light-100">
    Home
    <button class="bg-white dark: bg-green-500">aaa</button>
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
