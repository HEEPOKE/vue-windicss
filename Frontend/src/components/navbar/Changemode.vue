<template>
  <div
    class="hidden w-full md:flex md:items-center md:w-auto"
    @click="ChangeMode()"
  >
    <input
      type="checkbox"
      class="checkboxChange absolute opacity-0"
      id="checkboxChange"
    />
    <label
      for="checkbox"
      class="labell relative bg-white flex justify-between items-center scale-150 rounded-4xl w-50px p-5px !cursor-pointer"
    >
      <font-awesome-icon icon="fa-solid fa-moon" />
      <font-awesome-icon icon="fa-solid fa-sun" />
      <div
        class="ball !absolute bg-gray-900 left-2px w-20px h-20px rounded-1/2 transition-transform !ease-linear"
        id="ball"
      ></div>
    </label>
  </div>
</template>
<script lang="ts">
import { useDark, useToggle } from "@vueuse/core";

export default {
  name: "ChangeModeVue",
  methods: {
    ChangeMode() {
      const ball = document.querySelector("#ball");

      ball?.classList.toggle("translateChange");

      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    },
  },
  // setup() {
  //   const isDark = useDark();
  //   const toggleDark = useToggle(isDark);
  // },
  // data() {
  //   const isDark = useDark();
  //   const toggleDark = useToggle(isDark);
  // },
};
</script>
