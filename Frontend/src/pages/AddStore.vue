<template>
  <MenuVue />
  <FormAddVue />
</template>
<script lang="ts">
import MenuVue from "../components/navbar/Index.vue";
import FormAddVue from "../components/addstore/FormAdd.vue";

export default {
  name: "AddStoreVue",
  components: {
    MenuVue,
    FormAddVue,
  },
};
</script>
