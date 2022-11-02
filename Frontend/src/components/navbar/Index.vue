<template>
  <nav
    class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-gray-900"
  >
    <div>
      <RouterLink class="cursor-pointer" to="/">
        <img src="../../assets/vue.svg" />
        <!-- <span class="">Vue ts App</span> -->
      </RouterLink>
    </div>
    <button
      class="h-6 w-6 cursor-pointer md:hidden block"
      id="menu-button"
      fill="none"
      @click="Toggle"
    >
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
    <div class="menu hidden w-full md:flex md:items-center md:w-auto" id="menu">
      <ul
        class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"
      >
        <li>
          <RouterLink class="cursor-pointer" to="/">
            <a class="md:p-4 py-2 block hover:text-purple-400">Home</a>
          </RouterLink>
        </li>
        <li>
          <RouterLink class="cursor-pointer" to="/store">
            <a class="md:p-4 py-2 block hover:text-purple-400">Store</a>
          </RouterLink>
        </li>
        <li>
          <RouterLink class="cursor-pointer" to="/add">
            <a class="md:p-4 py-2 block hover:text-purple-400">Add</a>
          </RouterLink>
        </li>
        <li>
          <RouterLink class="cursor-pointer" to="/about">
            <a class="md:p-4 py-2 block hover:text-purple-400">About</a>
          </RouterLink>
        </li>
        <li>
          <a class="md:p-4 py-2 block hover:text-purple-400 text-purple-500">
            Login
          </a>
        </li>
        <li>
          <a
            class="md:p-4 py-2 block hover:text-purple-400 text-purple-500 dark: bg-rose-500"
          >
            Regiser
          </a>
        </li>
      </ul>
      <ChangemodeVue />
    </div>
  </nav>
</template>
<script lang="ts">
import ChangemodeVue from "./Changemode.vue";

export default {
  name: "MenuVue",
  components: {
    ChangemodeVue,
  },
  data: () => ({
    darkmode: false,
  }),
  methods: {
    Toggle() {
      const menu = document.querySelector("#menu");
      // const element = document.getElementById("html-root");

      menu?.classList.toggle("hidden");
    },
  },
};
</script>
