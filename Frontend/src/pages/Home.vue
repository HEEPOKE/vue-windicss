<template>
  <MenuVue />
  <div class="bg-light-100">
    Home
    <font-awesome-icon icon="fa-solid fa-moon" />
    <font-awesome-icon icon="fa-solid fa-sun-bright" />
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
