<template>
  <div class="App">
    <widget-container-modal />
    <router-view />
  </div>
</template>
<script lang="ts">
import { container } from "jenesius-vue-modal";

export default {
  name: "App",
  components: { WidgetContainerModal: container },
};
</script>
