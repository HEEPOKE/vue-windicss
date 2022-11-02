<template>
  <nav
    class="Nav bg-white flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg hover:bg-gray-100 dark:bg-dark-900 dark:border-dark-800 dark:hover:bg-dark-800"
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
        class="pt-4 text-xl text-dark-900 md:flex md:justify-between md:pt-0 dark:text-zinc-500"
      >
        <li>
          <RouterLink class="cursor-pointer" to="/">
            <a
              class="md:p-4 py-2 block hover:text-purple-700 dark:hover:text-purple-400"
              >Home</a
            >
          </RouterLink>
        </li>
        <li>
          <RouterLink class="cursor-pointer" to="/store">
            <a
              class="md:p-4 py-2 block hover:text-purple-700 dark:hover:text-purple-400"
              >Store</a
            >
          </RouterLink>
        </li>
        <li>
          <RouterLink class="cursor-pointer" to="/add">
            <a
              class="md:p-4 py-2 block hover:text-purple-700 dark:hover:text-purple-400"
              >Add</a
            >
          </RouterLink>
        </li>
        <li>
          <RouterLink class="cursor-pointer" to="/about">
            <a
              class="md:p-4 py-2 block hover:text-purple-700 dark:hover:text-purple-400"
              >About</a
            >
          </RouterLink>
        </li>
        <li>
          <a
            class="md:p-4 py-2 block hover:text-purple-700 dark:hover:text-purple-400"
          >
            Login
          </a>
        </li>
        <li>
          <a
            class="md:p-4 py-2 block hover:text-purple-700 dark:hover:text-purple-400"
          >
            Register
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
  methods: {
    Toggle() {
      const menu = document.querySelector("#menu");

      menu?.classList.toggle("hidden");
    },
  },
};
</script>
