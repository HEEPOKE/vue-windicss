<template>
  
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
