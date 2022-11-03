<template>
  <div class="bg-white z-50">aa</div>
</template>
<script lang="ts">

export default {
  name: "LoginModalVue",
  methods: {
    close() {
      this.$emit("close");
    },
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>
