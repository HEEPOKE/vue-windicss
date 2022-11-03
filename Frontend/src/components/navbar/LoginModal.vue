<template>
  <li>
    <a
      class="md:p-4 py-2 block !cursor-pointer hover:text-purple-700 dark:hover:text-purple-400"
      @click=""
    >
      Login
    </a>
  </li>
  <transition name="modal-fade">
    <div id="LoginModal" class="Login-modal bg-white">
      <p>Hello from the modal!</p>
      <button class="bg-dark-900">Close</button>
    </div>
  </transition>
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
