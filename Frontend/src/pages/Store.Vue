<template>
  <MenuVue />
  <div
    className="relative flex flex-col justify-center w-10/12 overflow-hidden mt-6 mr-4 ml-4 bg-gray-800 rounded-lg"
  >
    <div className="text-white text-2xl font-semibold mt-2 ml-2">STORE</div>
    <TableVue />
  </div>
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
