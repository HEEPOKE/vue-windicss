<template>
  <div class="hidden w-full md:flex md:items-center md:w-auto">
    <input type="checkbox" class="checkbox" id="checkbox" />
    <label for="checkbox" class="label">
      <font-awesome-icon icon="fa-solid fa-moon" />
      <font-awesome-icon icon="fa-solid fa-sun" />
      <div class="ball"></div>
    </label>
  </div>
</template>
<script lang="ts">
export default {
  name: "ChangeModeVue",
};
</script>
