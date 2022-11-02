<template>
  <MenuVue />
  <TableVue />
</template>
<script lang="ts">
import MenuVue from "../components/navbar/Index.vue";
import TableVue from "../components/store/Table.vue";

export default {
  name: "StoreVue",
  components: {
    MenuVue,
    TableVue,
  },
};
</script>
