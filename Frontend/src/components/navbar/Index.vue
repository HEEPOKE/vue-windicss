<template>
  <nav
    class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"
  >
    <div>
      <routerlink to="/">
        <img src="../../assets/vue.svg" />
        <!-- <span class="">Vue ts App</span> -->
      </routerlink>
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
          <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
            >Features</a
          >
        </li>
        <li>
          <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
            >Pricing</a
          >
        </li>
        <li>
          <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
            >Customers</a
          >
        </li>
        <li>
          <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Blog</a>
        </li>
        <li>
          <a
            class="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
            href="#"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  name: "MenuVue",
  methods: {
    Toggle() {
      const menu = document.querySelector("#menu");

      menu?.classList.toggle("hidden");
    },
  },
};
</script>
