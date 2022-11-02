<template>
  <div class="hidden w-full md:flex md:items-center md:w-auto">
    <input type="checkbox" class="checkboxChange absolute opacity-0" id="checkboxChange" />
    <label
      for="checkbox"
      class="labell relative bg-white flex justify-between items-center scale-150 rounded-4xl w-50px p-5px"
    >
      <font-awesome-icon icon="fa-solid fa-moon" />
      <font-awesome-icon icon="fa-solid fa-sun" />
      <div
        class="ball !absolute bg-gray-900 left-2px w-20px h-20px rounded-1/2 transition-transform !ease-linear cursor-pointer"
        id="ball"
        @click="ChangeMode()"
      ></div>
    </label>
  </div>
</template>
<script lang="ts">
export default {
  name: "ChangeModeVue",
  methods: {
    ChangeMode() {
      const ball = document.querySelector("#ball");

      ball?.classList.toggle("translateChange");
      // const checkbox = document.getElementById("checkboxChange");

      // checkbox?.addEventListener("change", () => {
      //   document.body.classList.toggle("dark");
      // });
    },
  },
};
</script>
